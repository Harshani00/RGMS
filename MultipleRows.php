<?php

// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start the session
session_start(); 

// Database connection (replace with your connection details)
include 'dbConnection.php'; // Assuming you have a separate file for the connection

// Retrieve app_ID from the session
if (!isset($_SESSION['app_ID'])) {
    echo json_encode(["status" => "error", "message" => "app_ID not found in session."]);
    exit();
}

$app_ID = $_SESSION['app_ID']; // Get app_ID from session

// Get the raw POST data
$data = json_decode(file_get_contents('php://input'), true);

// Check if both 'fundingRows' and 'grantRows' are provided
if (isset($data['fundingRows']) && isset($data['grantRows'])) {

    $fundingRows = $data['fundingRows'];  // Get the funding rows from the decoded JSON data
    $grantRows = $data['grantRows'];  // Get the grant rows from the decoded JSON data

    // Start a transaction to ensure all rows are inserted together
    $conn->begin_transaction();

    // Prepare SQL for funding rows
    $stmt_funding = $conn->prepare("INSERT INTO other_grants (fundingOrganization, fundingAmount, app_ID) VALUES (?, ?, ?)");
    if (!$stmt_funding) {
        echo json_encode(['status' => 'error', 'message' => 'Failed to prepare funding statement: ' . $conn->error]);
        exit();
    }

    // Insert funding rows
    foreach ($fundingRows as $fundingRow) {
        $fundingOrganization = $fundingRow['fundingOrganization'];
        $fundingAmount = $fundingRow['fundingAmount'];
       
        // Only bind and execute if none of the values are empty
        if (!empty($fundingOrganization) && !empty($fundingAmount)) {
            $stmt_funding->bind_param("sss", $fundingOrganization, $fundingAmount, $app_ID);

            // Execute the statement and handle errors
            if (!$stmt_funding->execute()) {
                // Rollback the transaction if an error occurs
                $conn->rollback();
                echo json_encode(['status' => 'error', 'message' => 'Error inserting funding row: ' . $conn->error]);
                exit();
            }
        }
    }

    // Prepare SQL for grant rows
    $stmt_grant = $conn->prepare("INSERT INTO prev_university_grants (fundingSource, durationperiod, currency, amount, app_ID) VALUES (?, ?, ?, ?, ?)");
    if (!$stmt_grant) {
        echo json_encode(['status' => 'error', 'message' => 'Failed to prepare grant statement: ' . $conn->error]);
        exit();
    }

    // Insert grant rows
    foreach ($grantRows as $grantRow) {
        $fundingSource = $grantRow['fundingSource'];
        $durationperiod = $grantRow['durationperiod'];
        $currency = $grantRow['currency'];
        $amount = $grantRow['amount'];
      
        // Only bind and execute if none of the values are empty
        if (!empty($fundingSource) && !empty($durationperiod) && !empty($currency) && !empty($amount)) {
            $stmt_grant->bind_param("sssss", $fundingSource, $durationperiod, $currency, $amount, $app_ID);

            // Execute the statement and handle errors
            if (!$stmt_grant->execute()) {
                // Rollback the transaction if an error occurs
                $conn->rollback();
                echo json_encode(['status' => 'error', 'message' => 'Error inserting grant row: ' . $conn->error]);
                exit();
            }
        }
    }

    // Commit the transaction after all rows are inserted
    $conn->commit();

    // Return success response
    echo json_encode(['status' => 'success', 'message' => 'All rows inserted successfully']);

    // Close prepared statements
    $stmt_funding->close();
    $stmt_grant->close();

} else {
    echo json_encode(['status' => 'error', 'message' => 'No funding or grant rows provided']);
}
?>
