<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

include('dbconnection.php');

// Check if there's a download request with the app_ID and reportType
if (isset($_GET['app_ID']) && isset($_GET['reportType'])) {
    $app_ID = $_GET['app_ID'];
    $reportType = $_GET['reportType'];

    // Define the directory where the progress reports are stored
    $targetDir = "D:/GrantData/ProgressReport/";

    // Check report type and determine file name with the new format
    $fileName = "";
    if ($reportType == "mid") {
        $fileName = $app_ID . "_ProgressReport(Mid-year).pdf"; // Example file name for Mid
    } elseif ($reportType == "end") {
        $fileName = $app_ID . "_ProgressReport(End-year).pdf"; // Example file name for End
    } elseif ($reportType == "final") {
        $fileName = $app_ID . "_ProgressReport(Final).pdf"; // Example file name for Final
    }

    // Full file path
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
    // If no download request, fetch applications with status 5.1 and related project and user email details
    $sql = "SELECT 
                a.Id,
                a.name,
                a.Status,
                a.email AS userEmail,
                p.projectTitle,
                a.submittedDate,
                p.startDate ,
                p.app_ID
            FROM application a
            JOIN project p ON a.Id = p.app_ID
            WHERE ROUND(a.Status, 1) = 5.1"; // Missing closing quote fixed here

    $result = $conn->query($sql);

    $applications = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $applications[] = $row;
        }
    }

    echo json_encode($applications);
}

$conn->close();
?>
