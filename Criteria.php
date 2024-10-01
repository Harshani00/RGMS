<?php

// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start the session
session_start();

// Include the database connection
include("dbConnection.php");

// Define the target directory where files will be uploaded
$targetDir = "D:/GrantData/CriteriaFiles/"; // Make sure this folder exists
$allowedTypes = array('docx'); // Allowed file types

// Ensure the uploads directory exists
if (!file_exists($targetDir)) {
    mkdir($targetDir, 0755, true);
}

// Function to handle file upload
function uploadFile($file, $targetDir, $allowedTypes) {
    $fileName = basename($file["name"]);
    $targetFilePath = $targetDir . $fileName;
    $fileType = strtolower(pathinfo($targetFilePath, PATHINFO_EXTENSION));

    // Check if the file type is allowed
    if (!in_array($fileType, $allowedTypes)) {
        return "Error: Only " . implode(", ", $allowedTypes) . " files are allowed.";
    }

    // Check if the file already exists
    if (file_exists($targetFilePath)) {
        return "Error: File already exists.";
    }

    // Move the uploaded file to the target directory
    if (move_uploaded_file($file["tmp_name"], $targetFilePath)) {
        return $fileName; // Return the file name if uploaded successfully
    } else {
        return "Error: Failed to upload the file.";
    }
}

// Function to fetch the uploaded file from the database
function fetchUploadedFile($conn) {
    $result = $conn->query("SELECT criteria FROM criteria ORDER BY C_Id DESC LIMIT 1"); // Assuming 'id' is the primary key
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        return $row['criteria']; // Return the file path or name
    } else {
        return "No file uploaded yet.";
    }
}

// Check if a POST request was made (for uploading a file)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $responses = [];
    
    // Check if the file was submitted via the "criteria" field
    if (isset($_FILES['criteria'])) {
        $uploadResult = uploadFile($_FILES['criteria'], $targetDir, $allowedTypes);
        $responses['criteria'] = $uploadResult;

        // If the file was successfully uploaded, insert it into the database
        if (strpos($uploadResult, 'Error') === false) {
            // Prepare the SQL query to insert the file into the `criteria` table
            $stmt = $conn->prepare("INSERT INTO criteria (criteria) VALUES (?)");

            if ($stmt) {
                // Insert the file path (or name) into the `criteria` column
                $filePath = $targetDir . $uploadResult;
                $stmt->bind_param("s", $filePath);
                $stmt->execute();
                $stmt->close();
            }
        }
    }

    // Return the response as JSON
    echo json_encode($responses);

// Check if a GET request was made (for fetching the file to view)
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $file = fetchUploadedFile($conn);
    echo json_encode(['criteria' => $file]);
}

// Close the database connection
$conn->close();

?>
