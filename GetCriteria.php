<?php
// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Include database connection
include("dbConnection.php");

// Handle GET requests
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT C_Id, criteria FROM criteria";
    $result = $conn->query($sql);

    $entries = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $entries[] = $row;
        }
    }

    echo json_encode($entries);

    $conn->close();
}
?>
