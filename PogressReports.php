<?php

// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start the session
session_start(); 

// Include the database connection
include("dbConnection.php");

// Set the target directory for uploads
$targetDir = "D:/GrantData/ProgressReport/";
$allowedTypes = array('pdf', 'doc', 'docx', 'xls', 'xlsx'); // Allowed file types

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
// Check if files are submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $responses = [];
    if (isset($_FILES['file'])) {
        foreach ($_FILES['file']['name'] as $key => $name) {
            $file = [
                "name" => $_FILES['file']['name'][$key],
                "type" => $_FILES['file']['type'][$key],
                "tmp_name" => $_FILES['file']['tmp_name'][$key],
                "error" => $_FILES['file']['error'][$key],
                "size" => $_FILES['file']['size'][$key]
            ];
            $response = uploadFile($file, $targetDir, $allowedTypes);
            if (strpos($response, 'Error') === false) {
                // Prepare the SQL query including app_ID
                $stmt = $conn->prepare("INSERT INTO progress_reports (app_ID, file_name, file_path, uploaded_at) VALUES (?, ?, ?, NOW())");
                if ($stmt) {
                    // Get app_ID from session
                    $app_ID = $_SESSION['app_ID']; // Ensure app_ID is set in the session

                    $filePathFull = $targetDir . $response;
                    // Bind the parameters including app_ID
                    $stmt->bind_param("sss", $app_ID, $response, $filePathFull);
                    if ($stmt->execute()) {
                        $responses[$name] = "File uploaded and database updated successfully.";
                    } else {
                        $responses[$name] = "Error: " . $stmt->error;
                    }
                    $stmt->close();
                } else {
                    $responses[$name] = "Error: Unable to prepare SQL statement.";
                }
            } else {
                $responses[$name] = $response;
            }
        }
    } else {
        $responses['Error'] = "No files were uploaded.";
    }

    // Output responses as JSON
    echo json_encode($responses);

    // Close the database connection
    $conn->close();
}
?>