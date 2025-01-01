<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Database connection
include("dbConnection.php");

$evaluationReportDir = "D:/GrantData/EvaluationReports(Reviewer_One)/"; // Directory for evaluation reports
$criteriaFilesDir = "D:/GrantData/CriteriaFiles/"; // Directory for criteria files
$allowedTypes = ['pdf', 'doc', 'docx'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Handle file upload and marks submission
    $app_ID = $_POST['app_ID'] ?? null;
    $overallMarks = $_POST['overallMarks'] ?? null;
    $evaluationReport = $_FILES['evaluationReport'] ?? null;

    if (!$app_ID || !$overallMarks || !$evaluationReport) {
        echo json_encode(["status" => "error", "message" => "Missing required fields."]);
        exit;
    }

    $fileType = strtolower(pathinfo($evaluationReport["name"], PATHINFO_EXTENSION));

    // Check if the file type is allowed
    if (!in_array($fileType, $allowedTypes)) {
        echo json_encode(["status" => "error", "message" => "Invalid file type. Only PDF, DOC, and DOCX allowed."]);
        exit;
    }

    // Rename the file and set target path
    $newFileName = $app_ID . "_EvaluationReport." . $fileType;
    $targetFilePath = $evaluationReportDir . $newFileName;

    // Attempt to move the file to the target directory
    if (move_uploaded_file($evaluationReport["tmp_name"], $targetFilePath)) {
        // Insert or update record in the reviewer_1 table
        $stmt = $conn->prepare("UPDATE reviewer_1 SET final_mark = ?, file_name = ? WHERE app_ID = ?");
        
        if ($stmt) {
            $stmt->bind_param("ssi", $overallMarks, $newFileName, $app_ID);
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
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Handle file download for evaluation criteria with dynamic file name
    $files = glob($criteriaFilesDir . "*");

    if (!empty($files)) {
        // Pick the most recently modified file
        $latestFile = array_reduce($files, function ($carry, $item) {
            return filemtime($item) > filemtime($carry) ? $item : $carry;
        });

        $fileName = basename($latestFile);

        if (file_exists($latestFile)) {
            // Set headers to download the file
            header('Content-Type: application/octet-stream');
            header('Content-Disposition: attachment; filename="' . $fileName . '"');
            header('Content-Length: ' . filesize($latestFile));

            // Read and output the file
            readfile($latestFile);
            exit;
        } else {
            echo json_encode(['error' => 'File not found.']);
        }
    } else {
        echo json_encode(['error' => 'No files available for download.']);
    }
} else {
    echo json_encode(['error' => 'Invalid request.']);
}

$conn->close();
?>
