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

// Handle the POST request (update decision)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
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
}

// Handle the GET request (fetch applications or serve file)
elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['app_ID']) && isset($_GET['reportType'])) {
        // Serve the requested file
        $app_ID = $_GET['app_ID'];
        $reportType = $_GET['reportType'];

        // Define the base directory for budget files
        $targetDir = 'D:/GrantData/BudgetRevision/';

        // Determine the file name based on reportType
        $fileName = $app_ID . '_Budget(' . ($reportType === 'previous' ? 'PreviousBudget' : 'CurrentBudget') . ').pdf';
        $filePath = $targetDir . $fileName;

        // Security and existence check
        if (file_exists($filePath)) {
            // Set headers for file download
            header('Content-Type: application/pdf');
            header('Content-Disposition: attachment; filename="' . $fileName . '"');
            header('Content-Length: ' . filesize($filePath));

            // Output the file contents
            readfile($filePath);
            exit();
        } else {
            echo json_encode([
                "status" => "error",
                "message" => "File not found."
            ]);
        }
    } else {
        // Fetch applications
        $sql = "
            SELECT p.projectTitle, b.uploaded_at, a.Id, p.app_ID, b.app_ID, b.decision
            FROM project p
            JOIN budget b ON p.app_ID = b.app_ID
            JOIN application a ON p.app_ID = a.Id
            WHERE ROUND(a.Status, 1) = 5.1";

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
}

$conn->close();
?>
