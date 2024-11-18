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

// Set the target directory for uploads
$targetDir = "D:/GrantData/ProgressReport/";
$allowedTypes = array('pdf', 'doc', 'docx', 'xls', 'xlsx');

// Ensure the uploads directory exists
if (!file_exists($targetDir)) {
    mkdir($targetDir, 0755, true);
}

// Function to handle file upload
function uploadFile($file, $targetDir, $allowedTypes) {
    $fileName = basename($file["name"]);
    $targetFilePath = $targetDir . $fileName;
    $fileType = strtolower(pathinfo($targetFilePath, PATHINFO_EXTENSION));

    if (!in_array($fileType, $allowedTypes)) {
        return "Error: Only " . implode(", ", $allowedTypes) . " files are allowed.";
    }
     // Rename file to avoid conflicts
     $targetFilePath = $targetDir . uniqid() . "_" . $fileName;

 

    if (move_uploaded_file($file["tmp_name"], $targetFilePath)) {
        return $fileName;
    } else {
        return "Error: Unable to upload the file.";
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $responses = [];

    // Validate and sanitize the app_ID from POST data
    $app_ID = isset($_POST['app_ID']) ? $conn->real_escape_string($_POST['app_ID']) : null;
    $reportType = isset($_POST['reportType']) ? $conn->real_escape_string($_POST['reportType']) : null;
    if (!$app_ID || !$reportType) {
        echo json_encode(["status" => "error", "message" => "Application ID and report type are required."]);
        exit();
    }

    // Check if files are uploaded
    if (isset($_FILES['file']['name']) && is_array($_FILES['file']['name'])) {
        foreach ($_FILES['file']['name'] as $key => $name) {
            $file = [
                "name" => $_FILES['file']['name'][$key],
                "type" => $_FILES['file']['type'][$key],
                "tmp_name" => $_FILES['file']['tmp_name'][$key],
                "error" => $_FILES['file']['error'][$key],
                "size" => $_FILES['file']['size'][$key]
            ];

            // Call the uploadFile function
            $response = uploadFile($file, $targetDir, $allowedTypes);
            if (strpos($response, 'Error') === false) {
                // Prepare and execute SQL to insert the uploaded file info
                $stmt = $conn->prepare("INSERT INTO progress_reports (app_ID, report_type, file_name, file_path, uploaded_at) VALUES (?, ?, ?, ?, NOW())");
                if ($stmt) {
                    // Get user_id from session
                    $user_id = $_SESSION['user_id'];
                    $filePathFull = $targetDir . $response;
                    // Bind parameters correctly
                    $stmt->bind_param("ssss", $app_ID, $reportType, $response, $filePathFull);
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

    echo json_encode($responses);
    $conn->close();
}


?>
