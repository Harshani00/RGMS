<?php
// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start the session
session_start();

// Database connection
include("dbConnection.php");

// Get JSON data from the request body
$input = json_decode(file_get_contents('php://input'), true);

// Log the input data for debugging (optional)
// error_log(print_r($input, true));

// Check if the required data is present
if (isset($input['email']) && isset($input['password'])) {
    $email = $input['email'];
    $password = $input['password'];

    // Prepare and execute SQL statement to check credentials
    $sql = "SELECT * FROM sign_in WHERE email=? AND password=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $email, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    // Verify credentials
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        // Store user data in session
        $_SESSION['user_id'] = $row['uid'];
        $_SESSION['user_email'] = $row['email'];
        $_SESSION['user_name'] = $row['firstName']; // Store user's first name
        $_SESSION['user_role'] = $row['role']; // Store user's role
        $_SESSION['is_logged_in'] = true;

        // Respond with success and user details
        echo json_encode([
            "message" => "Login successful",
            "status" => true,
            "user_name" => $row['firstName'], // Include user name (First name) in response
            "user_role" => $row['role'], // Include user role in response
            "user_id" => $row['uid'] // Include user role in response
        ]);
    } else {
        echo json_encode([
            "message" => "Incorrect email or password",
            "status" => false
        ]);
    }

    // Close connection
    $stmt->close();
    $conn->close();
} else {
    echo json_encode([
        "message" => "Missing required fields",
        "status" => false
    ]);
}
?>