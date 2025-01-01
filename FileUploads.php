<?php

// Enable CORS if needed
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start the session
session_start();

// Include the database connection
include("dbConnection.php");

// Define target directory and allowed file types
$targetDir = "D:/GrantData/Applications/"; // Ensure this directory exists and is writable
$allowedTypes = array('pdf'); // Adjust as needed

// Function to handle file upload with renaming
function uploadFile($file, $targetDir, $allowedTypes, $app_ID, $filePurpose) {
    $fileType = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));

    // Check file type
    if (!in_array($fileType, $allowedTypes)) {
        return "Error: Only " . implode(", ", $allowedTypes) . " files are allowed.";
    }

    // Rename the file to app_ID_projectPurpose.ext
    $newFileName = $app_ID . "_" . $filePurpose . "." . $fileType;
    $targetFilePath = $targetDir . $newFileName;

    // Attempt to move the uploaded file
    if (move_uploaded_file($file["tmp_name"], $targetFilePath)) {
        return $newFileName; // Return the new file name
    } else {
        return "Error: Unable to upload the file.";
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Retrieve app_ID from the session
    if (!isset($_SESSION['app_ID'])) {
        echo json_encode(["status" => "error", "message" => "app_ID not found in session."]);
        exit();
    }

    $app_ID = $_SESSION['app_ID'];

    $responses = ['status' => 'success'];
    
    // Handle file uploads and rename
    if (isset($_FILES['projectProposal'])) {
        $responses['projectProposal'] = uploadFile($_FILES['projectProposal'], $targetDir, $allowedTypes, $app_ID, "projectProposal");
    }
    if (isset($_FILES['projectBudget'])) {
        $responses['projectBudget'] = uploadFile($_FILES['projectBudget'], $targetDir, $allowedTypes, $app_ID, "projectBudget");
    }
    if (isset($_FILES['projectCV'])) {
        $responses['projectCV'] = uploadFile($_FILES['projectCV'], $targetDir, $allowedTypes, $app_ID, "projectCV");
    }
    if (isset($_FILES['coInvestigatorsCVs'])) {
        $responses['coInvestigatorsCVs'] = uploadFile($_FILES['coInvestigatorsCVs'], $targetDir, $allowedTypes, $app_ID, "coInvestigatorsCVs");
    }

    // Prepare the SQL query
    $stmt = $conn->prepare("
        INSERT INTO uploads 
        (app_ID, projectProposal, projectBudget, projectCV, coInvestigatorsCVs, uploaded_at) 
        VALUES (?, ?, ?, ?, ?, NOW())
    ");

    if ($stmt) {
        // Bind parameters and insert into the database
        $stmt->bind_param(
            "issss", 
            $app_ID, 
            $responses['projectProposal'], 
            $responses['projectBudget'], 
            $responses['projectCV'], 
            $responses['coInvestigatorsCVs']
        );
        if ($stmt->execute()) {
            echo json_encode($responses);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to insert into database: " . $stmt->error]);
        }
        $stmt->close();
    } else {
        echo json_encode(["status" => "error", "message" => "Error preparing statement: " . $conn->error]);
    }

    $conn->close();
}
?>
