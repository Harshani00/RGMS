<?php
// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start the session if you want to automatically log in the user
session_start();

// Database connection
include("dbConnection.php");

// Get POST data with checks
$firstName = isset($_POST['firstName']) ? $_POST['firstName'] : '';
$lastName = isset($_POST['lastName']) ? $_POST['lastName'] : '';
$userName = isset($_POST['userName']) ? $_POST['userName'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$role = isset($_POST['role']) ? $_POST['role'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO sign_in (firstName, lastName, userName, email, role, password) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $firstName, $lastName, $userName, $email, $role, $password);

// Execute the statement
if ($stmt->execute()) {
    // Optionally, log the user in immediately after signup
    $_SESSION['user_id'] = $conn->insert_id; // Get the ID of the newly inserted record
    $_SESSION['user_email'] = $email;
    $_SESSION['user_role'] = $role;
    $_SESSION['is_logged_in'] = true;
    echo "Welcome to Research Grant Management System";
} else {
    echo "Error: " . $stmt->error;
}

// Close the connection
$stmt->close();
$conn->close();
?>

