<?php
// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start the session
session_start();

// Include the database connection
include("dbConnection.php");

// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    echo json_encode(["success" => false, "message" => "User not logged in"]);
    exit();
}

// Define upload directory and allowed file types
$targetDir = "D:/GrantData/Agreements/";
$allowedTypes = ['pdf'];

// Ensure the uploads directory exists
if (!is_dir($targetDir)) {
    mkdir($targetDir, 0755, true);
}

// Function to handle file upload
function uploadFile($file, $targetDir, $app_ID, $allowedTypes) {
    $fileType = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));

    // Validate file type
    if (!in_array($fileType, $allowedTypes)) {
        return ["error" => "Only " . implode(", ", $allowedTypes) . " files are allowed."];
    }

    // Define the new file name
    $newFileName = $app_ID . "_Agreement." . $fileType;
    $targetFilePath = $targetDir . $newFileName;

    // Attempt to upload the file
    if (move_uploaded_file($file["tmp_name"], $targetFilePath)) {
        chmod($targetFilePath, 0644); // Set permissions
        return ["success" => true, "path" => $targetFilePath];
    } else {
        return ["error" => "Failed to upload file."];
    }
}

// Handle POST request for file upload
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['grantId']) && isset($_FILES['file'])) {
        $app_ID = intval($_POST['grantId']);

        // Verify if the app_ID exists
        $checkAppID = $conn->prepare("SELECT * FROM agreement WHERE app_ID = ?");
        $checkAppID->bind_param("i", $app_ID);
        $checkAppID->execute();
        $result = $checkAppID->get_result();

        if ($result->num_rows > 0) {
            // app_ID exists, proceed with file upload
            $uploadResult = uploadFile($_FILES['file'], $targetDir, $app_ID, $allowedTypes);

            if (isset($uploadResult['success'])) {
                // Update the `file_path2` for the existing app_ID
                $updateQuery = $conn->prepare("UPDATE agreement SET file_path2 = ? WHERE app_ID = ?");
                $updateQuery->bind_param("si", $uploadResult['path'], $app_ID);

                if ($updateQuery->execute()) {
                    echo json_encode(["success" => true, "message" => "File uploaded successfully!", "file_path2" => $uploadResult['path']]);
                } else {
                    echo json_encode(["success" => false, "message" => "Failed to update file_path2."]);
                }
                $updateQuery->close();
            } else {
                echo json_encode(["success" => false, "message" => $uploadResult['error']]);
            }
        } else {
            echo json_encode(["success" => false, "message" => "Invalid app_ID, no record found in the agreement table."]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Missing grantId or file."]);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['grantId'])) {
        $grantId = intval($_GET['grantId']);
        $targetDir = "D:/GrantData/Agreements/";
        $fileName = $grantId . "_Agreement.pdf"; // Default to PDF for download

        // Construct the full path to the file
        $filePath = $targetDir . $fileName;

        // Check if the file exists
        if (file_exists($filePath)) {
            // Set headers for the file download
            header('Content-Type: application/pdf');
            header('Content-Disposition: attachment; filename="' . $fileName . '"');
            header('Content-Length: ' . filesize($filePath));

            // Output the file contents
            readfile($filePath);
            exit();
        } else {
            echo json_encode([
                "success" => false,
                "message" => "File not found."
            ]);
        }
    } else {
        // Handle fetching submitted grants
        $user_id = $_SESSION['user_id'];
        $sql = "SELECT p.pID, p.projectTitle, a.Status, a.Id, p.submittedDate,
        (SELECT COUNT(*) FROM agreement WHERE app_ID = p.app_ID) AS hasAgreement
 FROM project p
 JOIN application a ON p.app_ID = a.Id 
 WHERE p.uid = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

$submittedGrants = [];
while ($row = $result->fetch_assoc()) {
// Convert the status codes to human-readable strings
switch ($row['Status']) {
case 1:
             $row['Status'] = 'Submitted';
             break;
         case 5.1:
         case 5.2:
             $row['Status'] = 'Granted';
             break;
         case 3.1:
             $row['Status'] = 'Approved';
             break;
         case 3.2:
             $row['Status'] = 'Rejected';
             break;
         default:
             $row['Status'] = 'Save';
             break;
}
$row['hasAgreement'] = $row['hasAgreement'] > 0; // true if there is an agreement
$submittedGrants[] = $row;
}

header('Content-Type: application/json');
echo json_encode($submittedGrants);

        $stmt->close();
    }
}

$conn->close();
?>
