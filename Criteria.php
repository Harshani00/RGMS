<?php
// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start the session
session_start();

// Include the database connection
include("dbConnection.php");



// Define the target directory where files will be uploaded
$targetDir = "D:/GrantData/CriteriaFiles/";
$allowedTypes = array('docx'); // Allowed file types

// Ensure the uploads directory exists
if (!file_exists($targetDir)) {
    mkdir($targetDir, 0755, true);
}

// Function to handle file upload with auto-incremented file name
function uploadFile($file, $targetDir, $allowedTypes) {
    // Get all existing files in the target directory
    $existingFiles = scandir($targetDir);
    $maxNumber = 0;

    // Check existing files for CriteriaFile_[number] pattern
    foreach ($existingFiles as $existingFile) {
        // Match files like CriteriaFile_1.docx, CriteriaFile_2.docx
        if (preg_match('/^CriteriaFile_(\d+)\.docx$/', $existingFile, $matches)) {
            // Ensure we extract the correct number and update maxNumber
            $maxNumber = max($maxNumber, (int)$matches[1]);
        }
    }

    // Debugging: Check the maxNumber value after loop
    echo "Max Number Found: " . $maxNumber . "\n";  // Output for debugging

    // Generate new file name with incremented number
    $newFileNumber = $maxNumber + 1;
   // $fileName = "Evaluation Criteria_URC Grants_" . $newFileNumber . ".docx"; // Use docx or other file types as needed
   $fileName = "Evaluation Criteria_URC Grants_" . $newFileNumber . ".docx";
    $targetFilePath = $targetDir . $fileName;
    $fileType = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));

    // Debugging: Check the new file name
    echo "New File Name: " . $fileName . "\n";  // Output for debugging

    // Check if the file type is allowed
    if (!in_array($fileType, $allowedTypes)) {
        return "Error: Only " . implode(", ", $allowedTypes) . " files are allowed.";
    }

    // Move the uploaded file to the target directory
    if (move_uploaded_file($file["tmp_name"], $targetFilePath)) {
        return $fileName; // Return the new file name if uploaded successfully
    } else {
        return "Error: Failed to upload the file.";
    }
}



// Handle POST request for uploading a file
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $responses = [];

    if (isset($_FILES['criteria'])) {
        $uploadResult = uploadFile($_FILES['criteria'], $targetDir, $allowedTypes);
        $responses['criteria'] = $uploadResult;

        // If the file was successfully uploaded, update or insert into the database
        if (strpos($uploadResult, 'Error') === false) {
            $filePath = $uploadResult;

            // Check if a record already exists
            $checkQuery = "SELECT C_Id FROM criteria LIMIT 1";
            $checkResult = $conn->query($checkQuery);

            if ($checkResult->num_rows > 0) {
                // Update the existing record
                $stmt = $conn->prepare("UPDATE criteria SET criteria = ? WHERE C_Id = (SELECT C_Id FROM criteria LIMIT 1)");
                $stmt->bind_param("s", $filePath);
            } else {
                // Insert a new record
                $stmt = $conn->prepare("INSERT INTO criteria (criteria) VALUES (?)");
                $stmt->bind_param("s", $filePath);
            }

            if ($stmt) {
                $stmt->execute();
                $stmt->close();
            }
        }
    }

    echo json_encode($responses);

// Handle GET request for fetching uploaded criteria files and file download
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $targetDir = "D:/GrantData/CriteriaFiles/";
    
    if (isset($_GET['download'])) { // If a download is requested
        $fileName = $_GET['download'];
        $filePath = $targetDir . $fileName;

        if (file_exists($filePath)) {
            // Set headers for file download
            header('Content-Type: application/pdf');
            header('Content-Disposition: attachment; filename="' . $fileName . '"');
            header('Content-Length: ' . filesize($filePath));

            // Output the file contents
            readfile($filePath);
            exit();
        } else {
            echo json_encode(['error' => 'File not found.']);
        }
    } else {
        // Fetch all files
        $fileQuery = "SELECT criteria FROM criteria"; // Retrieve all uploaded files
        $result = $conn->query($fileQuery);

        if ($result && $result->num_rows > 0) {
            $files = [];
            while ($row = $result->fetch_assoc()) {
                $fileName = $row['criteria'];
                $filePath = $targetDir . $fileName;
                if (file_exists($filePath)) {
                    $files[] = $fileName;
                }
            }

            echo json_encode(['criteria' => $files]);
        } else {
            echo json_encode(['criteria' => []]); // Return empty if no files exist
        }
    }
}

// Close the database connection
$conn->close();
?>
