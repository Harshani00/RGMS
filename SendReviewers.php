<?php
// Enable CORS for cross-origin requests if necessary
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start session if needed
session_start();

// Include the database connection
include("dbConnection.php");

// SQL query to fetch applications with Status = 3.1 and their reviewer marks
$sql = "
    SELECT 
        p.app_ID, 
        p.projectTitle, 
        p.submittedDate, 
        a.Status, 
        a.reviewer1Name, 
        a.reviewer2Name, 
        a.reviewer1Email, 
        a.reviewer2Email, 
        a.reviewer1Affiliation, 
        a.reviewer2Affiliation,
        r1.final_mark AS reviewer1_mark, 
        r2.final_mark AS reviewer2_mark
    FROM 
        project p
    JOIN 
        application a ON p.app_ID = a.Id
    LEFT JOIN 
        reviewer_1 r1 ON p.app_ID = r1.app_ID 
    LEFT JOIN 
        reviewer_2 r2 ON p.app_ID = r2.app_ID 
    WHERE 
        ROUND(a.Status, 1) = 3.1";

$result = $conn->query($sql);

$applications = [];
if ($result->num_rows > 0) {
    // Fetch each row as an associative array and add it to the applications array
    while ($row = $result->fetch_assoc()) {
        $applications[] = $row;
    }
}

// Return the applications array as JSON
echo json_encode($applications);

// Close the database connection
$conn->close();
?>
