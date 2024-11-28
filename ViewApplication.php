<?php

// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start the session
session_start(); 

// Include the database connection
include("dbConnection.php");

// Fetch all applications with the relevant statuses (1, 5.1, 5.2, 3.1, 3.2)
$sql = "SELECT p.app_ID, p.projectTitle, p.submittedDate, a.name, a.Status
        FROM project p 
        JOIN application a ON p.app_ID = a.Id
         WHERE ROUND(a.Status, 1) IN (1, 5.1, 5.2, 3.1, 3.2)"; // Include all required statuses

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $applications = [];

    // Fetch each row as an associative array
    while ($row = $result->fetch_assoc()) {
        // Map numeric status to the string representation
        switch ($row['Status']) {
            case 1:
                $row['Status'] = 'Submitted';
                break;
            case 5.1:
            case 5.2:
                $row['Status'] = 'Granted';
                break;
            case 3.1:
                $row['Status'] = 'Approved';
                break;
            case 3.2:
                $row['Status'] = 'Rejected';
                break;
            default:
                $row['Status'] = 'Unknown'; // Default case, if needed
                break;
        }
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
