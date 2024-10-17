<?php
// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

header('Content-Type: application/json');

include 'dbconnection.php'; // Include  database connection

// Create an associative array to hold the data
$response = array();

try {
    // Fetch faculties
    $facultySql = "SELECT faculty FROM faculty_list";
    $facultyResult = $conn->query($facultySql);

    if ($facultyResult === false) {
        throw new Exception("Error fetching faculties");
    }

    $response['faculties'] = array();
    while ($row = $facultyResult->fetch_assoc()) {
        $response['faculties'][] = $row['faculty'];
    }

    // Fetch departments
    $departmentSql = "SELECT department FROM department_list";
    $departmentResult = $conn->query($departmentSql);

    if ($departmentResult === false) {
        throw new Exception("Error fetching departments");
    }

    $response['departments'] = array();
    while ($row = $departmentResult->fetch_assoc()) {
        $response['departments'][] = $row['department'];
    }

    // Output the JSON-encoded response
    echo json_encode($response);
} catch (Exception $e) {
    // Handle any errors
    echo json_encode(array('error' => $e->getMessage()));
}
?>
