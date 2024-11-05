<?php

// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start the session
session_start(); 

// Include the database connection
include("dbConnection.php");

// Use ROUND() to avoid floating-point comparison issues
$sql = "SELECT p.app_ID, p.projectTitle, p.submittedDate, a.name, a.Status 
        FROM project p 
        JOIN application a ON p.app_ID = a.Id
        WHERE ROUND(a.Status, 1) IN (1, 2.1, 2.2)"; // Using ROUND() for float comparison

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $applications = [];

    // Fetch each row as an associative array
    while ($row = $result->fetch_assoc()) {
        $applications[] = $row; // Append each row to the applications array
    }

    // Output the applications as JSON
    echo json_encode($applications);
} else {
    echo json_encode([]); // Return an empty array if no records found
}

// Close the connection
$conn->close();
?>
