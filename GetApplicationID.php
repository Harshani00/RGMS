<?php

// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start the session
session_start();

// Include the database connection
include("dbConnection.php");

// Ensure user_id is available in the session
if (!isset($_SESSION['user_id'])) {
    echo json_encode([
        "status" => "error",
        "message" => "User not logged in."
    ]);
    exit();
}

// Retrieve user_id from session
$user_id = $conn->real_escape_string($_SESSION['user_id']);

// Fetch app_IDs and corresponding project titles associated with the user
$sql = "SELECT app_ID, projectTitle FROM project WHERE uid = ?";
       
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

$appData = [];
while ($row = $result->fetch_assoc()) {
    $appData[] = [
        "app_ID" => $row['app_ID'],
        "projectTitle" => $row['projectTitle']
    ];
}

$stmt->close();
$conn->close();

// Return the list of app_IDs and project titles in JSON format
echo json_encode($appData);
?>
