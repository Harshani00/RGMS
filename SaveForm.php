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
$reviewer1Name = isset($_POST['reviewer1Name']) ? $conn->real_escape_string($_POST['reviewer1Name']) : '';
$reviewer2Name = isset($_POST['reviewer2Name']) ? $conn->real_escape_string($_POST['reviewer2Name']) : '';
$reviewer3Name = isset($_POST['reviewer3Name']) ? $conn->real_escape_string($_POST['reviewer3Name']) : '';
$reviewer1Email = isset($_POST['reviewer1Email']) ? $conn->real_escape_string($_POST['reviewer1Email']) : '';
$reviewer2Email = isset($_POST['reviewer2Email']) ? $conn->real_escape_string($_POST['reviewer2Email']) : '';
$reviewer3Email = isset($_POST['reviewer3Email']) ? $conn->real_escape_string($_POST['reviewer3Email']) : '';
$reviewer1Affiliation = isset($_POST['reviewer1Affiliation']) ? $conn->real_escape_string($_POST['reviewer1Affiliation']) : '';
$reviewer2Affiliation = isset($_POST['reviewer2Affiliation']) ? $conn->real_escape_string($_POST['reviewer2Affiliation']) : '';
$reviewer3Affiliation = isset($_POST['reviewer3Affiliation']) ? $conn->real_escape_string($_POST['reviewer3Affiliation']) : '';

// Insert form data into the application table
$sql1 = "INSERT INTO application (uid, title, name, faculty, department, email, phone, position, degree, university, year, field, Leave_Get, Leave_Date, Leave_Duration, co_investigators, co_investigator_departmentUniversity, foreign_collaborators, foreign_collaborator_departmentUniversity,reviewer1Name,reviewer2Name,reviewer3Name,reviewer1Email,reviewer2Email,reviewer3Email,reviewer1Affiliation,reviewer2Affiliation,reviewer3Affiliation) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt1 = $conn->prepare($sql1);
$stmt1->bind_param("ssssssssssssssssssssssssssss", $user_id, $title, $name, $faculty, $department, $email, $phone, $position, $degree, $university, $year, $field, $Leave_Get, $Leave_Date, $Leave_Duration, $co_investigators, $co_investigator_departmentUniversity, $foreign_collaborators, $foreign_collaborator_departmentUniversity,$reviewer1Name,$reviewer2Name,$reviewer3Name,$reviewer1Email,$reviewer2Email,$reviewer3Email,$reviewer1Affiliation,$reviewer2Affiliation,$reviewer3Affiliation);

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
if (!isset($_SESSION['app_ID'])) {
    $_SESSION['app_ID'] = $app_ID;
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

// Insert into prev_university_grants using a prepared statement
if (isset($_POST['fundingSource']) && is_array($_POST['fundingSource'])) {
    $sql_funding = "INSERT INTO prev_university_grants (fundingSource, durationperiod, currency, amount, app_ID) VALUES (?, ?, ?, ?, ?)";
    $stmt_funding = $conn->prepare($sql_funding);

    foreach ($_POST['fundingSource'] as $index => $fundingSource) {
        $durationperiod = $conn->real_escape_string($_POST['durationperiod'][$index]);
        $currency = $conn->real_escape_string($_POST['currency'][$index]);
        $amount = $conn->real_escape_string($_POST['amount'][$index]);

        $stmt_funding->bind_param("ssssi", $fundingSource, $durationperiod, $currency, $amount, $app_ID);
        if (!$stmt_funding->execute()) {
            echo json_encode([
                "status" => "error",
                "message" => "Error inserting funding data: " . $stmt_funding->error
            ]);
            exit();
        }
    }
    $stmt_funding->close();
}

// Insert into other_grants using a prepared statement
if (isset($_POST['fundingOrganization']) && is_array($_POST['fundingOrganization'])) {
    $sql_other_grants = "INSERT INTO other_grants (fundingOrganization, fundingAmount ,app_ID) VALUES (?, ?, ?)";
    $stmt_other_grants = $conn->prepare($sql_other_grants);

    foreach ($_POST['fundingOrganization'] as $index => $fundingOrganization) {
        $fundingAmount = $conn->real_escape_string($_POST['fundingAmount'][$index]);
        $currencyType = $conn->real_escape_string($_POST['currencyType'][$index]);

        $stmt_other_grants->bind_param("sssi", $fundingOrganization, $fundingAmount, $app_ID);
        if (!$stmt_other_grants->execute()) {
            echo json_encode([
                "status" => "error",
                "message" => "Error inserting other grants data: " . $stmt_other_grants->error
            ]);
            exit();
        }
    }
    $stmt_other_grants->close();
}
 // Prepare and execute the app_status insertion
 $status = 0; // Status 1 for submitted
 $sql_status = "INSERT INTO app_status (app_ID, status, date) VALUES (?, ?, NOW()) ON DUPLICATE KEY UPDATE status = ?, date = NOW()";

 if ($stmt = $conn->prepare($sql_status)) {
     $stmt->bind_param("iii", $app_ID, $status, $status);
     
     if (!$stmt->execute()) {
         echo json_encode([
             "status" => "error",
             "message" => "Error updating status"
         ]);
         exit();
     }
     $stmt->close();
 } else {
     echo json_encode([
         "status" => "error",
         "message" => "Error preparing status statement"
     ]);
     exit();
 }

 // Now retrieve the status and update the application table
$sql_update_application = "UPDATE application SET Status = ? WHERE Id = ?";
if ($stmt = $conn->prepare($sql_update_application)) {
    $stmt->bind_param("ii", $status, $app_ID); // Bind the correct variables
    
    if (!$stmt->execute()) {
        echo json_encode([
            "status" => "error",
            "message" => "Error updating application status"
        ]);
        exit();
    }
    $stmt->close();
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Error preparing application update statement"
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