<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

include("dbConnection.php");

// Get app_ID from the request
$app_ID = isset($_GET['app_ID']) ? intval($_GET['app_ID']) : 0;

if ($app_ID === 0) {
    echo json_encode(["error" => "Invalid application ID"]);
    exit;
}

// Query to fetch data from multiple tables
$sql = "
    SELECT 
        a.name,
        a.submittedDate,
        a.Status,
        hod.decision AS hod_decision,
        hod.remarks AS hod_remarks,
        hod.Decision_Date AS hod_date,
        dean.decision AS dean_decision,
        dean.remarks AS dean_remarks,
        dean.Decision_Date AS dean_date,
        r1.final_mark AS reviewer1_marks,
        r1.Decision_Date AS reviewer1_date,
        r2.final_mark AS reviewer2_marks,
        r2.Decision_Date AS reviewer2_date,
        p.startDate,
        p.period,
        p.amount,
        b.uploaded_at AS budget_uploaded_at
    FROM application a
    LEFT JOIN hod_approval hod ON a.Id = hod.app_ID
    LEFT JOIN dean_approval dean ON a.Id = dean.app_ID
    LEFT JOIN reviewer_1 r1 ON a.Id = r1.app_ID
    LEFT JOIN reviewer_2 r2 ON a.Id = r2.app_ID
    LEFT JOIN project p ON a.Id = p.app_ID
    LEFT JOIN budget b ON a.Id = b.app_ID
    WHERE a.Id = ?
";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $app_ID);

if ($stmt->execute()) {
    $result = $stmt->get_result();
    $data = $result->fetch_assoc();
    echo json_encode($data);
} else {
    echo json_encode(["error" => "Failed to fetch data: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
