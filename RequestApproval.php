<?php
// Enable CORS for cross-origin requests if necessary
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start session if needed
session_start();

// Include the database connection
include("dbConnection.php");

// SQL query to fetch applications with Status = 2.1
// $sql = "SELECT p.app_ID, p.projectTitle, p.submittedDate, a.Status 
//         FROM project p
//         JOIN application a ON p.app_ID = a.Id
//         WHERE ROUND(a.Status, 1) = 2.1";  // Rounding to one decimal point if necessary

$sql = "
    SELECT 
        p.app_ID, 
        p.projectTitle, 
        p.submittedDate, 
        a.Status, 
        ha.decision  AS hod_decision, 
        da.decision  AS dean_decision 
    FROM project p
    JOIN application a ON p.app_ID = a.Id
    LEFT JOIN hod_approval ha ON p.app_ID = ha.app_ID
    LEFT JOIN dean_approval da ON p.app_ID = da.app_ID
    WHERE ROUND(a.Status, 1) IN (2.1, 3.1, 3.2)
";


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
