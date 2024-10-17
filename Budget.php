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
        return $fileName; // Return the file name
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
    $stmt = $conn->prepare("INSERT INTO budget (app_ID, previous_budget, current_budget) VALUES (?, ?, ?)");

    if ($stmt) {
        // Get app_ID from session
        $app_ID = $_SESSION['app_ID']; // Make sure app_ID is set in the session

        // Insert each file into the database
        $previousBudgetPath = isset($responses['PreviousBudget']) && strpos($responses['PreviousBudget'], 'Error') === false ? $targetDir . $responses['PreviousBudget'] : null;
        $currentBudgetPath = isset($responses['CurrentBudget']) && strpos($responses['CurrentBudget'], 'Error') === false ? $targetDir . $responses['CurrentBudget'] : null;

        if ($previousBudgetPath && $currentBudgetPath) {
            $stmt->bind_param("iss", $app_ID, $previousBudgetPath, $currentBudgetPath);
            $stmt->execute();
        }
        $stmt->close();
    }

    $conn->close();

    echo json_encode($responses);
}
?>
