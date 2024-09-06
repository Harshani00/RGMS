<?php

// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

//Start the session to access session variables
session_start(); 

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit();
}

// Database connection details
include("dbConnection.php");


// Define required fields from both Grant and Project forms
$requiredFields = [
    'title', 'name', 'faculty', 'department', 'email', 
    'phone', 'position', 'degree', 'university', 
    'year', 'field', 'start_date', 'duration',
    'projectTitle', 'projectInvolved', 'outsidegrants', 'researchFacilities','co_investigators','co_investigator_departmentUniversity','reviewer1Name','reviewer2Name','reviewer3Name','reviewer1Email','reviewer2Email','reviewer3Email','reviewer1Affiliation','reviewer2Affiliation','reviewer3Affiliation'
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
    echo "Error: Missing required fields: " . implode(", ", $missingFields);
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
$start_date = isset($_POST['start_date']) ? $conn->real_escape_string($_POST['start_date']) : '';
$duration = isset($_POST['duration']) ? $conn->real_escape_string($_POST['duration']) : '';
$projectTitle = isset($_POST['projectTitle']) ? $conn->real_escape_string($_POST['projectTitle']) : '';
$fundingSource = isset($_POST['fundingSource']) ? $conn->real_escape_string($_POST['fundingSource']) : '';
$durationperiod = isset($_POST['durationperiod']) ? $conn->real_escape_string($_POST['durationperiod']) : '';
$currency = isset($_POST['currency']) ? $conn->real_escape_string($_POST['currency']) : '';
$amount = isset($_POST['amount']) ? $conn->real_escape_string($_POST['amount']) : '';
$projectInvolved = isset($_POST['projectInvolved']) ? $conn->real_escape_string($_POST['projectInvolved']) : '';
$publication1 = isset($_POST['publication1']) ? $conn->real_escape_string($_POST['publication1']) : '';
$publication2 = isset($_POST['publication2']) ? $conn->real_escape_string($_POST['publication2']) : '';
$publication3 = isset($_POST['publication3']) ? $conn->real_escape_string($_POST['publication3']) : '';
$outsidegrants = isset($_POST['outsidegrants']) ? $conn->real_escape_string($_POST['outsidegrants']) : '';
$fundingOrganization = isset($_POST['fundingOrganization']) ? $conn->real_escape_string($_POST['fundingOrganization']) : '';
$fundingAmount = isset($_POST['fundingAmount']) ? $conn->real_escape_string($_POST['fundingAmount']) : '';
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





// Set the target directory for uploads
$targetDir = "D:/GrantData/Applications/";
$filePaths = [
    'projectProposal' => '',
    'projectBudget' => '',
    'projectCV' => '',
    'coInvestigatorsCVs' => ''
];
$allowedTypes = array('pdf', 'doc', 'docx', 'xls', 'xlsx'); // Allowed file types

// Ensure the uploads directory exists
if (!file_exists($targetDir)) {
    mkdir($targetDir, 0755, true);
}

foreach ($filePaths as $fileKey => &$filePath) {
    if (isset($_FILES[$fileKey]) && $_FILES[$fileKey]['error'] == UPLOAD_ERR_OK) {
        $targetFile = $targetDir . basename($_FILES[$fileKey]['name']);
        if (move_uploaded_file($_FILES[$fileKey]['tmp_name'], $targetFile)) {
            $filePath = $targetFile; // Save the file path
        } else {
            echo "Error uploading file: " . $_FILES[$fileKey]['name'];
            exit();
        }
    }
}

// Construct SQL query
$sql = "INSERT INTO application (
    title, name, faculty, department, email, phone, position, degree, university, year, field, start_date, duration,
    projectTitle, fundingSource, durationperiod, currency, amount, projectInvolved,
    publication1, publication2, publication3, outsidegrants, fundingOrganization, fundingAmount, researchFacilities,
    co_investigators, co_investigator_departmentUniversity, foreign_collaborators, foreign_collaborator_departmentUniversity,
    projectProposal, projectBudget, projectCV, coInvestigatorsCVs, 
    reviewer1Name, reviewer2Name, reviewer3Name, reviewer1Email, reviewer2Email, reviewer3Email, 
    reviewer1Affiliation, reviewer2Affiliation, reviewer3Affiliation
) 
VALUES (
    '$title', '$name', '$faculty', '$department', '$email', '$phone', '$position', '$degree', '$university', '$year', '$field', '$start_date', '$duration',
    '$projectTitle', '$fundingSource', '$durationperiod', '$currency', '$amount', '$projectInvolved',
    '$publication1', '$publication2', '$publication3', '$outsidegrants', '$fundingOrganization', '$fundingAmount', '$researchFacilities',
    '$co_investigators', '$co_investigator_departmentUniversity', '$foreign_collaborators', '$foreign_collaborator_departmentUniversity',
    '{$filePaths['projectProposal']}', '{$filePaths['projectBudget']}', '{$filePaths['projectCV']}', '{$filePaths['coInvestigatorsCVs']}',
    '$reviewer1Name', '$reviewer2Name', '$reviewer3Name', '$reviewer1Email', '$reviewer2Email', '$reviewer3Email', 
    '$reviewer1Affiliation', '$reviewer2Affiliation', '$reviewer3Affiliation'
)";

// Execute SQL query
if ($conn->query($sql) === TRUE) {
    echo "Form submitted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();
?>
