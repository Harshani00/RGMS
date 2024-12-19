<?php
// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start the session
session_start();

// Include the database connection
include("dbConnection.php");


// Get JSON input
$data = json_decode(file_get_contents('php://input'), true);

$name = $conn->real_escape_string($data['name']);
$email = $conn->real_escape_string($data['email']);
$address = $conn->real_escape_string($data['address']);

// Insert into the database
$sql = "INSERT INTO users (name, email, address) VALUES ('$name', '$email', '$address')";
if ($conn->query($sql) === TRUE) {
    echo json_encode(['message' => 'Data saved successfully']);
} else {
    echo json_encode(['message' => 'Error: ' . $conn->error]);
}

// Close connection
$conn->close();
?>