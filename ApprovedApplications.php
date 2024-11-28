<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

session_start();
include('dbconnection.php');

// SQL query to fetch the required data
$sql = "SELECT a.Id, p.projectTitle, p.submittedDate,a.Status,
               r1.final_mark AS reviewer1_mark, r2.final_mark AS reviewer2_mark,
               h.decision AS hod_decision, d.decision AS dean_decision
        FROM application a
        JOIN project p ON a.Id = p.app_ID
        LEFT JOIN reviewer_1 r1 ON a.Id = r1.app_ID
        LEFT JOIN reviewer_2 r2 ON a.Id = r2.app_ID
        LEFT JOIN hod_approval h ON a.Id = h.app_ID
        LEFT JOIN dean_approval d ON a.Id = d.app_ID
        WHERE ROUND(a.Status, 1) IN (3.1 ,5.1 ,5.2)";


$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $submittedGrants = [];

    while ($row = $result->fetch_assoc()) {
        $submittedGrants[] = $row;
    }

    echo json_encode($submittedGrants); // Return the result as a JSON array
} else {
    echo json_encode([]); // Return an empty array if no results
}

$conn->close();
?>
