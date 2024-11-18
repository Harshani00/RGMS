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

// Validate and sanitize the app_ID
$app_ID = isset($_POST['app_ID']) ? $conn->real_escape_string($_POST['app_ID']) : null;
if (!$app_ID) {
    echo json_encode(["status" => "error", "message" => "Application ID is required."]);
    exit();
}

// Define target directory and allowed file types
$targetDir = "D:/GrantData/BudgetRevision/";
$allowedTypes = ['pdf', 'doc', 'docx', 'xls', 'xlsx'];

// Ensure the uploads directory exists
if (!is_dir($targetDir)) {
    mkdir($targetDir, 0755, true);
}

// Function to handle file upload
function uploadFile($file, $targetDir, $allowedTypes) {
    $fileName = basename($file["name"]);
    $fileType = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

    // Validate file type
    if (!in_array($fileType, $allowedTypes)) {
        return "Error: Only " . implode(", ", $allowedTypes) . " files are allowed.";
    }

    // Rename file to avoid conflicts
    $targetFilePath = $targetDir . uniqid() . "_" . $fileName;

    // Attempt to move the uploaded file
    if (move_uploaded_file($file["tmp_name"], $targetFilePath)) {
        chmod($targetFilePath, 0644); // Set permissions if necessary
        return $targetFilePath;
    } else {
        return "Error: Unable to upload the file.";
    }
}

// Initialize responses array
$responses = [
    'PreviousBudget' => 'No file uploaded.',
    'CurrentBudget' => 'No file uploaded.'
];

// Check if files are submitted and upload
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['PreviousBudget'])) {
        $responses['PreviousBudget'] = uploadFile($_FILES['PreviousBudget'], $targetDir, $allowedTypes);
    }
    if (isset($_FILES['CurrentBudget'])) {
        $responses['CurrentBudget'] = uploadFile($_FILES['CurrentBudget'], $targetDir, $allowedTypes);
    }

    // Ensure both files are uploaded successfully
    if (!str_contains($responses['PreviousBudget'], 'Error') && !str_contains($responses['CurrentBudget'], 'Error')) {
        // Insert into the database
        $stmt = $conn->prepare("INSERT INTO budget (app_ID, previous_budget, current_budget) VALUES (?, ?, ?)");
        if ($stmt) {
            $stmt->bind_param("iss", $app_ID, $responses['PreviousBudget'], $responses['CurrentBudget']);
            if ($stmt->execute()) {
                echo json_encode([
                    "status" => "success",
                    "message" => "Files uploaded successfully.",
                    "previous_budget" => $responses['PreviousBudget'],
                    "current_budget" => $responses['CurrentBudget']
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
            "message" => "Error uploading files.",
            "details" => $responses
        ]);
    }

    $conn->close();
}
?>
