<?php
// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS, GET');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json; charset=UTF-8');

// Start session
session_start();

// Include the database connection
include("dbConnection.php");

// Ensure user_id is available in session
if (!isset($_SESSION['user_id'])) {
    echo json_encode([
        "status" => "error",
        "message" => "User not logged in."
    ]);
    exit();
}

// Retrieve user_id from session
$user_id = $conn->real_escape_string($_SESSION['user_id']);

// Define target directory and allowed file types
$targetDir = "D:/GrantData/RequestAgreemnet_Director/"; // Directory where files will be uploaded
$allowedTypes = ['pdf', 'doc', 'docx', 'xls', 'xlsx'];

// Ensure the uploads directory exists
if (!is_dir($targetDir)) {
    mkdir($targetDir, 0755, true);
}

// Function to handle file upload
function uploadFile($file, $targetDir, $allowedTypes, $app_ID) {
    $fileType = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION)); // Get file extension

    // Validate file type
    if (!in_array($fileType, $allowedTypes)) {
        return "Error: Only " . implode(", ", $allowedTypes) . " files are allowed.";
    }

    // Rename the file to `app_ID_Agreement.ext`
    $targetFilePath = $targetDir . $app_ID . "_Agreement." . $fileType;

    // Attempt to move the uploaded file
    if (move_uploaded_file($file["tmp_name"], $targetFilePath)) {
        chmod($targetFilePath, 0644); // Set permissions if necessary
        return $targetFilePath;
    } else {
        return "Error: Unable to upload the file.";
    }
}


// Initialize response array
$response = [
    'status' => 'error',
    'message' => 'No file uploaded.'
];

// Check the request method
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['app_ID']) && isset($_FILES['uploadedFile'])) {
        $app_ID = $conn->real_escape_string($_POST['app_ID']);
        
        // Check if the app_ID exists in the application table
        $checkAppID = $conn->prepare("SELECT Id FROM application WHERE Id = ?");
        $checkAppID->bind_param("i", $app_ID);
        $checkAppID->execute();
        $checkAppIDResult = $checkAppID->get_result();

        if ($checkAppIDResult->num_rows > 0) {
            // app_ID exists, proceed with file upload
            $fileUploadResult = uploadFile($_FILES['uploadedFile'], $targetDir, $allowedTypes, $app_ID);

            if (!str_contains($fileUploadResult, 'Error')) {
                // File uploaded successfully, now insert the app_ID and file path into the agreement table
                $stmt = $conn->prepare("INSERT INTO agreement (app_ID, file_path1, status) VALUES (?, ?, ?)");

                if ($stmt) {
                    // Insert the app_ID, file path, and status
                    $status = 1; // Assuming the status is 1 after file upload
                    $stmt->bind_param("isi", $app_ID, $fileUploadResult, $status);

                    if ($stmt->execute()) {
                        $response = [
                            'status' => 'success',
                            'message' => 'File uploaded and app_ID saved to agreement table.',
                            'file_path1' => $fileUploadResult
                        ];
                    } else {
                        $response = [
                            'status' => 'error',
                            'message' => 'Failed to insert data into agreement table.'
                        ];
                    }
                    $stmt->close();
                } else {
                    $response = [
                        'status' => 'error',
                        'message' => 'Failed to prepare the SQL query for insertion into agreement table.'
                    ];
                }
            } else {
                $response = [
                    'status' => 'error',
                    'message' => $fileUploadResult
                ];
            }
        } else {
            $response = [
                'status' => 'error',
                'message' => 'Invalid app_ID (' . $app_ID . '), no matching record found in application table.'
            ];
        }
    } else {
        $response = [
            'status' => 'error',
            'message' => 'No file received or application ID missing.'
        ];
    }

    echo json_encode($response);
}
 elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Fetching application data (already implemented)
    $sql = "
        SELECT a.Id, a.email, p.projectTitle, p.submittedDate, a.Status ,p.app_ID
        FROM application a
        JOIN project p ON a.Id = p.app_ID
        WHERE ROUND(a.status, 1) = 5.1
    ";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $applications = [];
        while ($row = $result->fetch_assoc()) {
            $applications[] = $row;
        }
        echo json_encode($applications);
    } else {
        echo json_encode([]);
    }
}

?>
