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
    'projectTitle', 'projectInvolved', 'outsidegrants', 'researchFacilities', 'reviewer1Name', 
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

$Leave_Get = isset($_POST['Leave_Get']) ? $_POST['Leave_Get'] : '';


$Leave_Date = isset($_POST['Leave_Date']) ? $conn->real_escape_string($_POST['Leave_Date']) : '';
$Leave_Duration = isset($_POST['Leave_Duration']) ? $conn->real_escape_string($_POST['Leave_Duration']) : '';
$projectTitle = isset($_POST['projectTitle']) ? $conn->real_escape_string($_POST['projectTitle']) : '';
$projectInvolved = isset($_POST['projectInvolved']) ? $conn->real_escape_string($_POST['projectInvolved']) : '';
$publication1 = isset($_POST['publication1']) ? $conn->real_escape_string($_POST['publication1']) : '';
$publication2 = isset($_POST['publication2']) ? $conn->real_escape_string($_POST['publication2']) : '';
$publication3 = isset($_POST['publication3']) ? $conn->real_escape_string($_POST['publication3']) : '';
$outsidegrants = isset($_POST['outsidegrants']) ? $conn->real_escape_string($_POST['outsidegrants']) : '';
$researchFacilities = isset($_POST['researchFacilities']) ? $conn->real_escape_string($_POST['researchFacilities']) : '';
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

// Convert 'yes' to true (1) and 'no' to false (0)
$Leave_Get = ($Leave_Get === 'yes') ? 1 : 0;

// Construct SQL query to insert into the 'application' table
$sql = "INSERT INTO application (
    uid, title, name, faculty, department, email, phone, position, degree, university, year, field, Leave_Get, Leave_Date, Leave_Duration,
    reviewer1Name, reviewer2Name, reviewer3Name, reviewer1Email, reviewer2Email, reviewer3Email, 
    reviewer1Affiliation, reviewer2Affiliation, reviewer3Affiliation
) 
VALUES (
    '$user_id', '$title', '$name', '$faculty', '$department', '$email', '$phone', '$position', '$degree', '$university', '$year', '$field', '$Leave_Get', '$Leave_Date', '$Leave_Duration',
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
     '$user_id', '$projectTitle', '$projectInvolved', '$publication1', '$publication2', '$publication3', '$outsidegrants', '$researchFacilities', '$app_ID'
    )";
 
    if (!$conn->query($sql_project)) {
        echo json_encode([
            "status" => "error",
            "message" => "Error inserting into Project: " . $conn->error
        ]);
        exit();
    }

    //Insert into supervisors table
  
   $foreign_collaborators = isset($_POST['foreign_collaborators']) ? $conn->real_escape_string($_POST['foreign_collaborators']) : '';
   $foreign_collaborator_departmentUniversity = isset($_POST['foreign_collaborator_departmentUniversity']) ? $conn->real_escape_string($_POST['foreign_collaborator_departmentUniversity']) : '';

   $sql_supervisors = "INSERT INTO supervisors (app_ID, foreign_collaborators, foreign_collaborator_departmentUniversity) VALUES ('$app_ID', '$foreign_collaborators', '$foreign_collaborator_departmentUniversity')";

   if (!$conn->query($sql_supervisors)) {
       echo json_encode([
           "status" => "error",
           "message" => "Error inserting into supervisors: " . $conn->error
       ]);
       exit();
   } 


    



// Prepare and execute the app_status insertion
$status = 1; // Status 1 for submitted
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

// Insert or update 'sent' column to 0 (No) in 'dean_approval' table
$stmt_dean = $conn->prepare("
    INSERT INTO dean_approval (app_ID, sent)
    VALUES (?, 0)
    ON DUPLICATE KEY UPDATE sent = 0
");
if (!$stmt_dean) {
    echo json_encode(['status' => 'error', 'message' => 'Failed to prepare dean approval statement: ' . $conn->error]);
    exit();
}
$stmt_dean->bind_param("s", $app_ID);

if (!$stmt_dean->execute()) {
    echo json_encode(['status' => 'error', 'message' => 'Error updating dean_approval: ' . $conn->error]);
    exit();
}

// Insert or update 'sent' column to 0 (No) in 'hod_approval' table
$stmt_hod = $conn->prepare("INSERT INTO hod_approval (app_ID, sent)VALUES (?, 0) ON DUPLICATE KEY UPDATE sent = 0
");
if (!$stmt_hod) {
    echo json_encode(['status' => 'error', 'message' => 'Failed to prepare HOD approval statement: ' . $conn->error]);
    exit();
}
$stmt_hod->bind_param("s", $app_ID);

if (!$stmt_hod->execute()) {
    echo json_encode(['status' => 'error', 'message' => 'Error updating hod_approval: ' . $conn->error]);
    exit();
}


// Final response after all operations
echo json_encode([
    "status" => "success",
    "message" => "Form submitted successfully",
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
//echo $_POST['grantRows']."<br>";
//$grantRows = json_decode($_POST['grantRows'], true); 
//$grantRowsText = json_encode($grantRows);
//echo $grantRows;
//print_r($grantRows);
//var_dump($grantRows);
//echo $grantRowsText;
?>
