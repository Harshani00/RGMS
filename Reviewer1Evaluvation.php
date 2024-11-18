<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Database connection
include("dbConnection.php");

$targetDir = "D:/GrantData/EvaluationReports/"; // Adjust path as needed
$allowedTypes = ['pdf', 'doc', 'docx', 'pdf'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $app_ID = $_POST['app_ID'] ?? null;
    $overallMarks = $_POST['overallMarks'] ?? null;
    $evaluationReport = $_FILES['evaluationReport'] ?? null;

    if (!$app_ID || !$overallMarks || !$evaluationReport) {
        echo json_encode(["status" => "error", "message" => "Missing required fields."]);
        exit;
    }

    $fileName = basename($evaluationReport["name"]);
    $fileType = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

    // Check if the file type is allowed
    if (!in_array($fileType, $allowedTypes)) {
        echo json_encode(["status" => "error", "message" => "Invalid file type. Only PDF, DOC, and DOCX allowed."]);
        exit;
    }

    // Rename the file and set target path
    $targetFilePath = $targetDir . uniqid() . "_" . $fileName;

    // Attempt to move the file to the target directory
    if (move_uploaded_file($evaluationReport["tmp_name"], $targetFilePath)) {
        // Insert or update record in the reviewer_a table
        $stmt = $conn->prepare("UPDATE reviewer_1 SET final_mark = ?, file_name = ? WHERE app_ID = ?");
        
        if ($stmt) {
            $stmt->bind_param("ssi", $overallMarks, $targetFilePath, $app_ID);
            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "File and marks uploaded successfully."]);
            } else {
                echo json_encode(["status" => "error", "message" => "Failed to update the database."]);
            }
            $stmt->close();
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to prepare the SQL query."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to upload the file."]);
    }
}

$conn->close();
?>
