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

// Define required fields from both Grant and Project forms
$requiredFields = [
    'title', 'name', 'faculty', 'department', 'email', 
    'phone', 'position', 'degree', 'university', 
    'year', 'field', 'Leave_Get', 'Leave_Date', 'Leave_Duration',
    'projectTitle', 'projectInvolved', 'outsidegrants', 'researchFacilities',
    'co_investigators', 'co_investigator_departmentUniversity', 'reviewer1Name', 
    'reviewer2Name', 'reviewer3Name', 'reviewer1Email', 'reviewer2Email', 
    'reviewer3Email', 'reviewer1Affiliation', 'reviewer2Affiliation', 
    'reviewer3Affiliation'
];

// Initialize array to collect missing fields
$missingFields = [];

foreach ($requiredFields as $field) {
    if (empty($_POST[$field])) {
        $missingFields[] = $field;
    }
}

// If there are missing required fields, return an error
if (!empty($missingFields)) {
    echo json_encode([
        "status" => "error",
        "message" => "Missing required fields: " . implode(", ", $missingFields)
    ]);
    exit();
}

// Sanitize and assign POST data to variables
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
$Leave_Duration = isset($_POST['Leave_Duration']) ? $conn->real_escape_string($_POST['duration']) : '';
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
$reviewer1Name = isset($_POST['reviewer1Name']) ? $conn->real_escape_string($_POST['reviewer1Name']) : '';
$reviewer2Name = isset($_POST['reviewer2Name']) ? $conn->real_escape_string($_POST['reviewer2Name']) : '';
$reviewer3Name = isset($_POST['reviewer3Name']) ? $conn->real_escape_string($_POST['reviewer3Name']) : '';
$reviewer1Email = isset($_POST['reviewer1Email']) ? $conn->real_escape_string($_POST['reviewer1Email']) : '';
$reviewer2Email = isset($_POST['reviewer2Email']) ? $conn->real_escape_string($_POST['reviewer2Email']) : '';
$reviewer3Email = isset($_POST['reviewer3Email']) ? $conn->real_escape_string($_POST['reviewer3Email']) : '';
$reviewer1Affiliation = isset($_POST['reviewer1Affiliation']) ? $conn->real_escape_string($_POST['reviewer1Affiliation']) : '';
$reviewer2Affiliation = isset($_POST['reviewer2Affiliation']) ? $conn->real_escape_string($_POST['reviewer2Affiliation']) : '';
$reviewer3Affiliation = isset($_POST['reviewer3Affiliation']) ? $conn->real_escape_string($_POST['reviewer3Affiliation']) : '';

// Construct SQL query to insert into the 'application' table
$sql = "INSERT INTO application (
    uid, title, name, faculty, department, email, phone, position, degree, university, year, field, Leave_Get,Leave_Date, Leave_Duration,
    co_investigators, co_investigator_departmentUniversity, foreign_collaborators, foreign_collaborator_departmentUniversity,
    reviewer1Name, reviewer2Name, reviewer3Name, reviewer1Email, reviewer2Email, reviewer3Email, 
    reviewer1Affiliation, reviewer2Affiliation, reviewer3Affiliation
) 
VALUES (
    '$user_id', '$title', '$name', '$faculty', '$department', '$email', '$phone', '$position', '$degree', '$university', '$year', '$field', '$Leave_Get','$Leave_Date', '$Leave_Duration',
    '$co_investigators', '$co_investigator_departmentUniversity', '$foreign_collaborators', '$foreign_collaborator_departmentUniversity',
    '$reviewer1Name', '$reviewer2Name', '$reviewer3Name', '$reviewer1Email', '$reviewer2Email', '$reviewer3Email', 
    '$reviewer1Affiliation', '$reviewer2Affiliation', '$reviewer3Affiliation'
)";

// Execute the SQL query for application table
if ($conn->query($sql) === TRUE) { 
    $app_ID = $conn->insert_id;

    $_SESSION['app_ID'] = $app_ID;

    // Insert into Project table
    $sql_project = "INSERT INTO project (
    uid, projectTitle, projectInvolved, publication1, publication2, publication3, outsidegrants, researchFacilities, app_ID
    ) VALUES (
     '$user_id','$projectTitle', '$projectInvolved', '$publication1', '$publication2', '$publication3', '$outsidegrants', '$researchFacilities','$app_ID'
    )";
 
    if (!$conn->query($sql_project)) {
     echo json_encode([
         "status" => "error",
         "message" => "Error inserting into Project: " . $conn->error
     ]);
     exit();
    }

    // Insert into prev_university_grants
    if (isset($_POST['fundingSource']) && is_array($_POST['fundingSource'])) {
        foreach ($_POST['fundingSource'] as $index => $fundingSource) {
            $durationperiod = $conn->real_escape_string($_POST['durationperiod'][$index]);
            $currency = $conn->real_escape_string($_POST['currency'][$index]);
            $amount = $conn->real_escape_string($_POST['amount'][$index]);

            $sql_funding = "INSERT INTO prev_university_grants (fundingSource, durationperiod, currency, amount, app_ID) VALUES ('$fundingSource', '$durationperiod', '$currency', '$amount', '$app_ID')";
            echo $sql_funding;
            if (!$conn->query($sql_funding)) {
                echo json_encode([
                    "status" => "error",
                    "message" => "Error inserting funding data: " . $conn->error
                ]);
                exit();
            }
        }
    }

    // Insert into other_grants
    if (isset($_POST['fundingOrganization']) && is_array($_POST['fundingOrganization'])) {
        foreach ($_POST['fundingOrganization'] as $index => $fundingOrganization) {
            $fundingAmount = $conn->real_escape_string($_POST['fundingAmount'][$index]);
            $currencyType = $conn->real_escape_string($_POST['currencyType'][$index]);

            $sql_other_grants = "INSERT INTO other_grants (fundingOrganization, fundingAmount, currencyType, app_ID) VALUES ('$fundingOrganization', '$fundingAmount', '$currencyType', '$app_ID')";
            echo json_encode([
                
                "message" => "INSERTING " . $sql_other_grants 
            ]);
            if (!$conn->query($sql_other_grants)) {
                echo json_encode([
                    "status" => "error",
                    "message" => "Error inserting other grants data: " . $conn->error
                ]);
                exit();
            }
        }
    }

    echo json_encode([
        "status" => "success",
        "message" => "Application and project data inserted successfully.",
        "app_ID" => $app_ID
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Error inserting into application: " . $conn->error
    ]);
}

// Close the database connection
$conn->close();

?>
