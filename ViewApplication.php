<?php

// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start the session
session_start(); 

// Include the database connection
include("dbConnection.php");

// Fetch data from the `application` table
$sql = "SELECT id, projectTitle, submittedDate FROM application";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $applications = [];

    // Fetch each row as an associative array
    while ($row = $result->fetch_assoc()) {
        // Manually set the status to 'Submitted'
        $row['status'] = 'Submitted';
        $applications[] = $row;
    }

    // Output the applications as JSON
    echo json_encode($applications);
} else {
    echo json_encode([]);
}

// Close the connection
$conn->close();
?>
