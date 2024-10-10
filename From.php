<?php

// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Include database connection
include("dbConnection.php");

// Get the raw POST data
$data = json_decode(file_get_contents('php://input'), true);

// Check if rows are provided
if (isset($data['rows'])) {

    $rows = $data['rows'];  // Get the 'rows' from the decoded JSON data

    // Start a transaction to ensure all rows are inserted together
    $conn->begin_transaction();

    // Now insert all rows with a new Test1ID
    $stmt = $conn->prepare("INSERT INTO test1 (name, age) VALUES (?, ?)");

    foreach ($rows as $row) {
        $stmt->bind_param("ss", $row['name'], $row['age']);
        if (!$stmt->execute()) {
            // If any insert fails, roll back the transaction
            $conn->rollback();
            echo json_encode(['error' => 'Failed to insert rows']);
            exit;
        }
    }

    // Commit the transaction
    $conn->commit();

    // Get the Test1ID of the last inserted row (which would be the one for the batch)
    $test1Id = $conn->insert_id;

    // Return the Test1ID to the frontend
    echo json_encode(['test1Id' => $test1Id]);

    $stmt->close();
} else {
    echo json_encode(['error' => 'No data to submit']);
}

$conn->close();
?>
