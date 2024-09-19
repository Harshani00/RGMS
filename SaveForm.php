<?php

// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start the session
session_start();

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit();
}

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
$Id = isset($_POST['Id']) ? $conn->real_escape_string($_POST['Id']) : '';

// Get the posted form data
$title = isset($_POST['title']) ? $conn->real_escape_string($_POST['title']) : '';
$name = isset($_POST['name']) ? $conn->real_escape_string($_POST['name']) : '';
$faculty = isset($_POST['faculty']) ? $conn->real_escape_string($_POST['faculty']) : '';
$department = isset($_POST['department']) ? $conn->real_escape_string($_POST['department']) : '';
$email = isset($_POST['email']) ? $conn->real_escape_string($_POST['email']) : '';
$phone = isset($_POST['phone']) ? $conn->real_escape_string($_POST['phone']) : '';
$position = isset($_POST['position']) ? $conn->real_escape_string($_POST['position']) : '';
$degree = isset($_POST['degree']) ? $conn->real_escape_string($_POST['degree']) : '';
$university = isset($_POST['university']) ? $conn->real_escape_string($_POST['university']) : '';
$year = isset($_POST['year']) ? $conn->real_escape_string($_POST['year']) : '';
$field = isset($_POST['field']) ? $conn->real_escape_string($_POST['field']) : '';
$Leave_Get = isset($_POST['Leave_Get']) ? $conn->real_escape_string($_POST['Leave_Get']) : '';
$Leave_Date = isset($_POST['Leave_Date']) ? $conn->real_escape_string($_POST['Leave_Date']) : '';
$Leave_Duration = isset($_POST['Leave_Duration']) ? $conn->real_escape_string($_POST['Leave_Duration']) : '';
$projectTitle = isset($_POST['projectTitle']) ? $conn->real_escape_string($_POST['projectTitle']) : '';
$projectInvolved = isset($_POST['projectInvolved']) ? $conn->real_escape_string($_POST['projectInvolved']) : '';
$publication1 = isset($_POST['publication1']) ? $conn->real_escape_string($_POST['publication1']) : '';
$publication2 = isset($_POST['publication2']) ? $conn->real_escape_string($_POST['publication2']) : '';
$publication3 = isset($_POST['publication3']) ? $conn->real_escape_string($_POST['publication3']) : '';
$outsidegrants = isset($_POST['outsidegrants']) ? $conn->real_escape_string($_POST['outsidegrants']) : '';
$researchFacilities = isset($_POST['researchFacilities']) ? $conn->real_escape_string($_POST['researchFacilities']) : '';
$co_investigators = isset($_POST['co_investigators']) ? $conn->real_escape_string($_POST['co_investigators']) : '';
$co_investigator_departmentUniversity = isset($_POST['co_investigator_departmentUniversity']) ? $conn->real_escape_string($_POST['co_investigator_departmentUniversity']) : '';
$foreign_collaborators = isset($_POST['foreign_collaborators']) ? $conn->real_escape_string($_POST['foreign_collaborators']) : '';
$foreign_collaborator_departmentUniversity = isset($_POST['foreign_collaborator_departmentUniversity']) ? $conn->real_escape_string($_POST['foreign_collaborator_departmentUniversity']) : '';

// Insert form data into the application table
$sql1 = "INSERT INTO application (uid, title, name, faculty, department, email, phone, position, degree, university, year, field, Leave_Get, Leave_Date, Leave_Duration, co_investigators, co_investigator_departmentUniversity, foreign_collaborators, foreign_collaborator_departmentUniversity) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt1 = $conn->prepare($sql1);
$stmt1->bind_param("sssssssssssssssssss", $user_id, $title, $name, $faculty, $department, $email, $phone, $position, $degree, $university, $year, $field, $Leave_Get, $Leave_Date, $Leave_Duration, $co_investigators, $co_investigator_departmentUniversity, $foreign_collaborators, $foreign_collaborator_departmentUniversity);

// Execute application insert
if (!$stmt1->execute()) {
    echo json_encode([
        "status" => "error",
        "message" => "Error inserting into application: " . $stmt1->error
    ]);
    exit();
}

// Get the last inserted application ID
$app_ID = $conn->insert_id;

// Store app_ID in session only if it's not already set
if (!isset($_SESSION['Id'])) {
    $_SESSION['Id'] = $app_ID;
}

// Insert into the project table
$sql_project = "INSERT INTO project (uid, projectTitle, projectInvolved, publication1, publication2, publication3, outsidegrants, researchFacilities, app_ID) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt2 = $conn->prepare($sql_project);
$stmt2->bind_param("isssssssi", $user_id, $projectTitle, $projectInvolved, $publication1, $publication2, $publication3, $outsidegrants, $researchFacilities, $app_ID);

// Execute project insert
if (!$stmt2->execute()) {
    echo json_encode([
        "status" => "error",
        "message" => "Error inserting into Project: " . $stmt2->error
    ]);
    exit();
}

// Close statements and connection
$stmt1->close();
$stmt2->close();
$conn->close();

// Successful response
echo json_encode([
    "status" => "success",
    "message" => "Form data saved successfully"
]);

?>
