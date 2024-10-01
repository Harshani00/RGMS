<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start session
session_start();

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit();
}

// Include the database connection
include("dbConnection.php");

// Ensure the user is logged in
if (!isset($_SESSION['user_id'])) {
    echo json_encode([
        "status" => "error",
        "message" => "User not logged in."
    ]);
    exit();
}

// Fetch raw input data and decode the JSON
$inputData = json_decode(file_get_contents('php://input'), true);

// Log raw POST data and decoded app_ID for debugging
error_log("Raw POST data: " . file_get_contents('php://input'));
error_log("Decoded app_ID: " . $inputData['app_ID']);

// Get the app_ID from the decoded JSON data
$app_ID = isset($inputData['app_ID']) ? $conn->real_escape_string($inputData['app_ID']) : '';

if (empty($app_ID)) {
    echo json_encode([
        "status" => "error",
        "message" => "Application ID not provided."
    ]);
    exit();
}

// Query to retrieve the form data based on app_ID
$sql = "SELECT * FROM application 
        LEFT JOIN project ON application.Id = project.app_ID 
        WHERE application.Id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $app_ID);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $formData = $result->fetch_assoc();
    echo json_encode([
        "status" => "success",
        "data" => $formData
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "No data found for the given Application ID."
    ]);
}

$stmt->close();
$conn->close();

?>
