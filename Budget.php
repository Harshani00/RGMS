<?php
// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start the session
session_start();

// Include the database connection
include("dbConnection.php");

// Ensure user_id is available in the session
if (!isset($_SESSION['user_id'])) {
    echo json_encode([
        "status" => "error",
        "message" => "User not logged in."
    ]);
    exit();
}

// Retrieve user_id from session
$user_id = $conn->real_escape_string($_SESSION['user_id']);

// Ensure app_ID is in the POST data
$app_ID = isset($_POST['app_ID']) ? $conn->real_escape_string($_POST['app_ID']) : null;
if (!$app_ID) {
    echo json_encode(["status" => "error", "message" => "Application ID is required."]);
    exit();
}

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

    // Ensure both files are uploaded successfully
    $previousBudgetPath = isset($responses['PreviousBudget']) && strpos($responses['PreviousBudget'], 'Error') === false ? $targetDir . $responses['PreviousBudget'] : null;
    $currentBudgetPath = isset($responses['CurrentBudget']) && strpos($responses['CurrentBudget'], 'Error') === false ? $targetDir . $responses['CurrentBudget'] : null;

    // If both files are uploaded successfully
    if ($previousBudgetPath && $currentBudgetPath) {
        // Prepare and execute the insert query
        $stmt = $conn->prepare("INSERT INTO budget (app_ID, previous_budget, current_budget) VALUES (?, ?, ?)");
        if ($stmt) {
            $stmt->bind_param("iss", $app_ID, $previousBudgetPath, $currentBudgetPath);
            if ($stmt->execute()) {
                echo json_encode([
                    "status" => "success",
                    "message" => "Files uploaded successfully.",
                    "previous_budget" => $previousBudgetPath,
                    "current_budget" => $currentBudgetPath
                ]);
            } else {
                echo json_encode([
                    "status" => "error",
                    "message" => "Failed to insert data into the database."
                ]);
            }
            $stmt->close();
        } else {
            echo json_encode([
                "status" => "error",
                "message" => "Failed to prepare the SQL query."
            ]);
        }
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Error uploading files."
        ]);
    }

    // Close the connection
    $conn->close();
}
?>
