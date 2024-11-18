<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
session_start();

include("dbConnection.php");

if (isset($_POST['app_ID'], $_POST['reviewerName'], $_POST['reviewerEmail'], $_POST['reviewerAffiliation'])) {
    $app_ID = $_POST['app_ID'];
    $reviewer_name = $_POST['reviewerName'];
    $reviewer_email = $_POST['reviewerEmail'];
    $reviewer_affiliation = $_POST['reviewerAffiliation'];

    $stmt = $conn->prepare("INSERT INTO reviewer_1 (app_ID, reviewer1_name, reviewer1_email, reviewer1_affiliation ) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("isss", $app_ID, $reviewer_name, $reviewer_email, $reviewer_affiliation);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Reviewer 1 details saved successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error: " . $stmt->error]);
    }

    $stmt->close();
} else {
    echo json_encode(["status" => "error", "message" => "Required data missing"]);
}

$conn->close();
?>
