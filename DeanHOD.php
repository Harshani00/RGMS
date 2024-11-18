<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

include("dbConnection.php");

$app_ID = $_GET['app_ID']; // Get the application ID from the URL

$sql = "SELECT p.projectTitle, a.name, p.app_ID
        FROM project p
        JOIN application a ON p.app_ID = a.Id
        WHERE p.app_ID = ?";
        
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $app_ID); // Bind the application ID parameter
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $application = $result->fetch_assoc();
    echo json_encode($application);
} else {
    echo json_encode([]);
}

$stmt->close();
$conn->close();



?>
