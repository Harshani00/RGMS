<?php
// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start the session
session_start();

// Database connection
include("dbConnection.php");

// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    echo json_encode(["message" => "User not logged in", "status" => false]);
    exit();
}

// Get user ID from session
$user_id = $_SESSION['user_id'];

// Fetch grants submitted by the logged-in user along with application status
$sql = "SELECT p.pID, p.projectTitle, a.Status ,a.Id,p.submittedDate
        FROM project p
        JOIN application a ON p.app_ID = a.Id 
        WHERE p.uid = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

$submittedGrants = [];
while ($row = $result->fetch_assoc()) {
    // Map numeric status to string representation
    $row['Status'] = $row['Status'] == 1 ? 'Submitted' : 'Save'; // Adjust mapping as needed
    $submittedGrants[] = $row;
}

header('Content-Type: application/json');
echo json_encode($submittedGrants);

$stmt->close();
$conn->close();
?>
