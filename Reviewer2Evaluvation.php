<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Database connection
include("dbConnection.php");

$targetDir = "D:/GrantData/EvaluationReports/"; // Path to save uploaded files
$allowedTypes = ['pdf', 'doc', 'docx']; // Allowed file types

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the form data
    $app_ID = $_POST['app_ID'] ?? null;
    $overallMarks = $_POST['overallMarks'] ?? null;
    $evaluationReport = $_FILES['evaluationReport'] ?? null;

    if (!$app_ID || !$overallMarks || !$evaluationReport) {
        echo json_encode(["status" => "error", "message" => "Missing required fields."]);
        exit;
    }

    // Check if the file is an allowed type
    $fileName = basename($evaluationReport["name"]);
    $fileType = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

    if (!in_array($fileType, $allowedTypes)) {
        echo json_encode(["status" => "error", "message" => "Invalid file type. Only PDF, DOC, and DOCX allowed."]);
        exit;
    }

    // Create a unique name for the file and set the target path
    $targetFilePath = $targetDir . uniqid() . "_" . $fileName;

    // Move the uploaded file to the target directory
    if (move_uploaded_file($evaluationReport["tmp_name"], $targetFilePath)) {
        // Insert or update the reviewer_a table with marks and file path
        $stmt = $conn->prepare("UPDATE reviewer_2 SET final_mark = ?, file_name = ? WHERE app_ID = ?");
        
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
