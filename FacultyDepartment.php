<?php
// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

header('Content-Type: application/json');

include 'dbconnection.php'; // Include your database connection

// Create an associative array to hold the data
$response = array();

try {
    // Handle GET request to fetch faculties
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $facultySql = "SELECT fid, faculty FROM faculty_list";
        $facultyResult = $conn->query($facultySql);

        if ($facultyResult === false) {
            throw new Exception("Error fetching faculties");
        }

        $response['faculties'] = array();
        while ($row = $facultyResult->fetch_assoc()) {
            // Store fid and faculty name in the response
            $response['faculties'][] = array('fid' => $row['fid'], 'faculty' => $row['faculty']);
        }
    }

    // Handle POST request to fetch departments by faculty ID
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents("php://input"), true); // Decode JSON body
        if (isset($data['fid'])) {
            $facultyId = $data['fid'];

            // Prepared statement to fetch departments where faculty matches fid
            $departmentSql = "SELECT did, department FROM department_list WHERE faculty = ?";
            $stmt = $conn->prepare($departmentSql);
            $stmt->bind_param("i", $facultyId);
            $stmt->execute();
            $departmentResult = $stmt->get_result();

            if ($departmentResult === false) {
                throw new Exception("Error fetching departments");
            }

            $response['departments'] = array();
            while ($row = $departmentResult->fetch_assoc()) {
                // Store department id and department name in the response
                $response['departments'][] = array('did' => $row['did'], 'department' => $row['department']);
            }

            // Close the prepared statement
            $stmt->close();
        }
    }

    // Output the JSON-encoded response
    echo json_encode($response);
} catch (Exception $e) {
    // Handle any errors
    echo json_encode(array('error' => $e->getMessage()));
}

?>
