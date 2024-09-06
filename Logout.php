<?php
// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
 
// Start the session
session_start();

// Destroy the session
session_unset();
session_destroy();

// Return a response
echo json_encode(["message" => "Logged out successfully"]);
?>
