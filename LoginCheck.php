<?php
// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start the session (if not already started)
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Check if the user is logged in
if (isset($_SESSION['is_logged_in']) && $_SESSION['is_logged_in'] === true) {
    // User is logged in
    echo json_encode([
        "message" => "User is logged in",
        "status" => true,
        "user_name" => $_SESSION['user_name'],
        "user_role" => $_SESSION['user_role'],
        "user_id" => $_SESSION['user_id']
    ]);
} else {
    // User is not logged in
    echo json_encode([
        "message" => "User is not logged in",
        "status" => false
    ]);
}
?>