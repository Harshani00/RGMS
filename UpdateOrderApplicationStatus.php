<?php

// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start the session
session_start(); 

// Include the database connection
include("dbConnection.php");

// Capture input from the frontend
$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['app_ID']) || !isset($data['status'])) {
    echo json_encode([
        "status" => "error",
        "message" => "Missing app_ID or status"
    ]);
    exit();
}

$app_ID = $data['app_ID'];
$status = $data['status'];

// Validate that the status is either 2.1, 2.2, or 1 (blue for Select)
if (!in_array($status, ['2.1', '2.2', '1'])) {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid status value"
    ]);
    exit();
}

// Convert status to float if necessary
$status = floatval($status);

// Check if app_ID already exists in app_status
$sql_check = "SELECT * FROM app_status WHERE app_ID = ?";
if ($stmt = $conn->prepare($sql_check)) {
    $stmt->bind_param("i", $app_ID);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        // If app_ID exists, perform an update
        $sql_update_status = "UPDATE app_status SET status = ?, date = NOW() WHERE app_ID = ?";
        if ($stmt_update = $conn->prepare($sql_update_status)) {
            $stmt_update->bind_param("di", $status, $app_ID);
            $stmt_update->execute();
            $stmt_update->close();
        } else {
            echo json_encode([
                "status" => "error",
                "message" => "Error preparing status update statement"
            ]);
            exit();
        }
    } else {
        // If app_ID doesn't exist, perform an insert
        $sql_insert_status = "INSERT INTO app_status (app_ID, status, date) VALUES (?, ?, NOW())";
        if ($stmt_insert = $conn->prepare($sql_insert_status)) {
            $stmt_insert->bind_param("id", $app_ID, $status);
            $stmt_insert->execute();
            $stmt_insert->close();
        } else {
            echo json_encode([
                "status" => "error",
                "message" => "Error preparing status insertion statement"
            ]);
            exit();
        }
    }

    $stmt->close();
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Error checking app_ID existence"
    ]);
    exit();
}

// Update the application table with the new status
$sql_update_application = "UPDATE application SET Status = ? WHERE Id = ?";
if ($stmt = $conn->prepare($sql_update_application)) {
    $stmt->bind_param("di", $status, $app_ID); // 'd' for float, 'i' for integer
    if (!$stmt->execute()) {
        echo json_encode([
            "status" => "error",
            "message" => "Error updating application status"
        ]);
        exit();
    }
    $stmt->close();
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Error preparing application update statement"
    ]);
    exit();
}

// Return success response
echo json_encode([
    "status" => "success",
    "message" => "Status updated successfully"
]);

// Close the connection
$conn->close();
?>