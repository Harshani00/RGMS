<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Include database connection
include('dbconnection.php');

// Get data from the POST request
$data = json_decode(file_get_contents('php://input'), true);
$appId = $data['appId'];
$status = $data['status']; // '5.1' for granted, '5.2' for denied
$startDate = isset($data['startDate']) ? $data['startDate'] : null;
$period = isset($data['period']) ? $data['period'] : null;

// Begin transaction
$conn->begin_transaction();

try {
    // Update the application status in the application table
    $sqlUpdateApplication = "UPDATE application SET Status = ? WHERE Id = ?";
    $stmt = $conn->prepare($sqlUpdateApplication);
    $stmt->bind_param("si", $status, $appId);
    $stmt->execute();

    // Check if the update was successful
    if ($stmt->affected_rows <= 0) {
        throw new Exception("Failed to update application status.");
    }

    // If the status is granted, save the start date and period in the project table
    if ($status === '5.1') {
        $sqlUpdateProjectDetails = "UPDATE project SET startDate = ?, period = ? WHERE app_ID = ?";
        $stmt2 = $conn->prepare($sqlUpdateProjectDetails);
        $stmt2->bind_param("ssi", $startDate, $period, $appId);
        $stmt2->execute();

        if ($stmt2->affected_rows <= 0) {
            throw new Exception("Failed to update project details.");
        }
    }

    // Update the app_status table
    $sqlUpdateAppStatus = "UPDATE app_status SET status = ? WHERE app_ID = ?";
    $stmt3 = $conn->prepare($sqlUpdateAppStatus);
    $stmt3->bind_param("si", $status, $appId);
    $stmt3->execute();

    if ($stmt3->affected_rows <= 0) {
        throw new Exception("Failed to update app_status.");
    }

    // Commit the transaction
    $conn->commit();

    // Send a success response
    echo json_encode(['message' => 'Status updated successfully']);
} catch (Exception $e) {
    // Rollback the transaction in case of error
    $conn->rollback();
    echo json_encode(['message' => 'Failed to update status: ' . $e->getMessage()]);
} finally {
    // Close connections
    if (isset($stmt)) $stmt->close();
    if (isset($stmt2)) $stmt2->close();
    if (isset($stmt3)) $stmt3->close();
    $conn->close();
}
?>
