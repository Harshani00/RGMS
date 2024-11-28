<?php
// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS, GET');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json; charset=UTF-8');

// Start session
session_start();

// Include the database connection
include("dbConnection.php");

// Ensure user_id is available in session
if (!isset($_SESSION['user_id'])) {
    echo json_encode([
        "status" => "error",
        "message" => "User not logged in."
    ]);
    exit();
}

// Check if it's a POST or GET request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Handle the POST request (update decision)
    $data = json_decode(file_get_contents("php://input"), true);

    $app_ID = $data['app_ID'];
    $decision = $data['decision'];

    // Prepare the SQL query to update the decision in the budget table
    $sql = "UPDATE budget SET decision = ? WHERE app_ID = ?";

    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("si", $decision, $app_ID);

        if ($stmt->execute()) {
            echo json_encode([
                "status" => "success",
                "message" => "Decision saved successfully."
            ]);
        } else {
            echo json_encode([
                "status" => "error",
                "message" => "Failed to save decision."
            ]);
        }

        $stmt->close();
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Database query preparation failed."
        ]);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Handle the GET request (fetch applications)
    $sql = "
        SELECT p.projectTitle, b.uploaded_at , a.Id , p.app_ID , b.app_ID, b.decision
        FROM project p
        JOIN budget b ON p.app_ID = b.app_ID
        JOIN application a ON p.app_ID = a.Id
        WHERE ROUND(a.Status, 1) = 5.1";  // Correctly referencing status from application table

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $applications = [];
        while ($row = $result->fetch_assoc()) {
            $applications[] = $row;
        }
        echo json_encode($applications);
    } else {
        echo json_encode([]);
    }
}

$conn->close();
?>
