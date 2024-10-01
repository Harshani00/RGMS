<?php
session_start();
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

include("dbConnection.php");

// Check if userId is set in the session
if (isset($_SESSION['uid'])) {
    // Retrieve user_id from session
$user_id = $conn->real_escape_string($_SESSION['user_id']);

    // Prepare and execute the SQL statement
    $sql = "SELECT firstName, lastName, userName, email, role FROM sign_in WHERE uid = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $uid);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if the user was found
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        echo json_encode($user); // Return user data as JSON
    } else {
        echo json_encode(["error" => "User not found"]);
    }

    $stmt->close();
} else {
    echo json_encode(["error" => "User not authenticated"]);
}

$conn->close();
?>
