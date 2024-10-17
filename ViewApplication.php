<?php

// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start the session
session_start(); 

// Include the database connection
include("dbConnection.php");

// Fetch only submitted grants (Status = 1) from the `project` table and join with `application` table
$sql = "SELECT p.app_ID, p.projectTitle, p.submittedDate, a.Status 
        FROM project p 
        JOIN application a ON p.app_ID = a.Id
        WHERE a.Status = 1"; // Filter for Submitted grants only

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $applications = [];

    // Fetch each row as an associative array
    while ($row = $result->fetch_assoc()) {
        // Status is already filtered in SQL, so we can directly set it
        $row['Status'] = 'Submitted'; // Set status to "Submitted" since it's already filtered
        $applications[] = $row;
    }

    // Output the applications as JSON
    echo json_encode($applications);
} else {
    echo json_encode([]); // Return an empty array if no records found
}

// Close the connection
$conn->close();
?>