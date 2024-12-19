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

// Function to handle file upload and renaming
function uploadFile($file, $targetDir, $allowedTypes, $app_ID, $reportType) {
    $fileType = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));

    // Validate file type
    if (!in_array($fileType, $allowedTypes)) {
        return "Error: Only " . implode(", ", $allowedTypes) . " files are allowed.";
    }

    // Rename the file to app_ID_ProgressReport(Mid,End or Final Report).ext
    $reportTypeFormatted = ucfirst($reportType); // Capitalize the first letter (Mid, End, Final)
    $newFileName = $app_ID . "_ProgressReport(" . $reportTypeFormatted . ")." . $fileType;
    $targetFilePath = $targetDir . $newFileName;

    // Check if file already exists and add a unique ID if necessary
    if (file_exists($targetFilePath)) {
        $newFileName = $app_ID . "_ProgressReport(" . $reportTypeFormatted . ")_" . uniqid() . "." . $fileType;
        $targetFilePath = $targetDir . $newFileName;
    }

    // Attempt to move the uploaded file
    if (move_uploaded_file($file["tmp_name"], $targetFilePath)) {
        return [
            "fileName" => $newFileName,
            "filePath" => $targetFilePath
        ];
    } else {
        return "Error: Unable to upload the file.";
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $responses = [];

    // Validate and sanitize the app_ID and reportType from POST data
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
            $uploadResponse = uploadFile($file, $targetDir, $allowedTypes, $app_ID, $reportType);

            if (is_array($uploadResponse)) {
                // Prepare and execute SQL to insert the uploaded file info
                $stmt = $conn->prepare("INSERT INTO progress_reports (app_ID, report_type, file_name, file_path, uploaded_at) VALUES (?, ?, ?, ?, NOW())");
                if ($stmt) {
                    // Bind parameters correctly
                    $stmt->bind_param("ssss", $app_ID, $reportType, $uploadResponse['fileName'], $uploadResponse['filePath']);
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
                $responses[$name] = $uploadResponse; // Return error from uploadFile
            }
        }
    } else {
        $responses['Error'] = "No files were uploaded.";
    }

    echo json_encode($responses);
    $conn->close();
}
?>
