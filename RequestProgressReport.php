<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

include('dbconnection.php');

// Query to fetch applications with status 5.1 and related project and user email details
$sql = "SELECT 
            a.Id,
            a.Status,
            a.email AS userEmail,
            p.projectTitle,
            a.submittedDate
        FROM application a
        JOIN project p ON a.Id = p.app_ID
        WHERE ROUND(a.Status, 1) = 5.1"; // Missing closing quote fixed here

$result = $conn->query($sql);

$applications = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $applications[] = $row;
    }
}

echo json_encode($applications);

$conn->close();
?>
