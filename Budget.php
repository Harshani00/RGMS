<?php

// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start the session
session_start(); 

// Include the database connection
include("dbConnection.php");

// Define target directory and allowed file types
$targetDir = "D:/GrantData/BudgetRevision/";
$allowedTypes = array('pdf', 'doc', 'docx', 'xls', 'xlsx'); // Adjust as needed

// Ensure the uploads directory exists
if (!file_exists($targetDir)) {
    mkdir($targetDir, 0755, true);
}

// Function to handle file upload
function uploadFile($file, $targetDir, $allowedTypes) {
    $fileName = basename($file["name"]);
    $targetFilePath = $targetDir . $fileName;
    $fileType = strtolower(pathinfo($targetFilePath, PATHINFO_EXTENSION));

    // Check file type
    if (!in_array($fileType, $allowedTypes)) {
        return "Error: Only " . implode(", ", $allowedTypes) . " files are allowed.";
    }

    // Check if file already exists
    if (file_exists($targetFilePath)) {
        return "Error: File already exists.";
    }

    // Attempt to move the uploaded file
    if (move_uploaded_file($file["tmp_name"], $targetFilePath)) {
        return $fileName;
    } else {
        return "Error: Unable to upload the file.";
    }
}

// Check if files are submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $responses = [];
    if (isset($_FILES['PreviousBudget'])) {
        $responses['PreviousBudget'] = uploadFile($_FILES['PreviousBudget'], $targetDir, $allowedTypes);
    }
    if (isset($_FILES['CurrentBudget'])) {
        $responses['CurrentBudget'] = uploadFile($_FILES['CurrentBudget'], $targetDir, $allowedTypes);
    }

    // Prepare the SQL query
    $stmt = $conn->prepare("INSERT INTO budget (file_name, file_path) VALUES (?, ?)");

    if ($stmt) {
        // Insert each file into the database
        foreach ($responses as $fileKey => $filePath) {
            if (strpos($filePath, 'Error') === false) {
                $fileName = $fileKey;
                $filePathFull = $targetDir . $filePath;
                $stmt->bind_param("ss", $fileName, $filePathFull);
                $stmt->execute();
            }
        }
        $stmt->close();
    }

    $conn->close();

    echo json_encode($responses);
}
?>
