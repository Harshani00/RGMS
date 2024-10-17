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

    
   // Check if the grant rows data is set and valid
// if (isset($_POST['grantRows']) && is_array($_POST['grantRows'])) {
//     foreach ($_POST['grantRows'] as $index => $grantRow) {
//         // Ensure each key exists before using it
//         $fundingSource = isset($grantRow['fundingSource']) ? $conn->real_escape_string($grantRow['fundingSource']) : '';
//         $durationperiod = isset($grantRow['durationperiod']) ? $conn->real_escape_string($grantRow['durationperiod']) : '';
//         $currency = isset($grantRow['currency']) ? $conn->real_escape_string($grantRow['currency']) : '';
//         $amount = isset($grantRow['amount']) ? $conn->real_escape_string($grantRow['amount']) : '';

//         // Insert query for prev_university_grants
//         $sql_funding = "INSERT INTO prev_university_grants (fundingSource, durationperiod, currency, amount, app_ID) 
//                         VALUES ('$fundingSource', '$durationperiod', '$currency', '$amount', '$app_ID')";

//         if (!$conn->query($sql_funding)) {
//             echo json_encode([
//                 "status" => "error",
//                 "message" => "Error inserting into prev_university_grants: " . $conn->error
//             ]);
//             exit();
//         }
//     }
// }

//Handle other grants
// $fundingOrganizations = isset($_POST['fundingOrganization']) ? $_POST['fundingOrganization'] : [];
// $fundingAmounts = isset($_POST['fundingAmount']) ? $_POST['fundingAmount'] : [];

// if (count($fundingOrganizations) > 0 && count($fundingAmounts) > 0) {
//     for ($i = 0; $i < count($fundingOrganizations); $i++) {
//         $fundingOrganization = $conn->real_escape_string($fundingOrganizations[$i]);
//         $fundingAmount = $conn->real_escape_string($fundingAmounts[$i]);

//         // Insert into other_grants table
//         $sql = "INSERT INTO other_grants (fundingOrganization, fundingAmount, app_ID) 
//                 VALUES ('$fundingOrganization', '$fundingAmount', '$app_ID')";

//         if (!$conn->query($sql)) {
//             echo json_encode([
//                 "status" => "error",
//                 "message" => "Error inserting into other_grants: " . $conn->error
//             ]);
//             exit();
//         }
//     }
// } 

// if (isset($_POST['fundingRows']) && is_array($_POST['fundingRows'])) {
//     foreach ($_POST['fundingRows'] as $fundingRow) {
//         $fundingOrganization = $fundingRow['fundingOrganization'];
//         $fundingAmount = $fundingRow['fundingAmount'];

//         // Insert each row into the database (assuming a funding table)
//         $sql = "INSERT INTO other_grants (fundingOrganization,fundingAmount,app_ID) VALUES ('$fundingOrganization', '$fundingAmount', '$app_ID')";
//         $result = mysqli_query($conn, $sql);
//         if (!$result) {
//             echo "Error inserting funding row: " . mysqli_error($conn);
//         }
//     }
// }
//Check if fundingRows is set and is an array
// if (isset($_POST['fundingRows']) && is_array($_POST['fundingRows'])) {
//     foreach ($_POST['fundingRows'] as $index => $fundingRow) {
//         // Get funding organization and amount from the current row
//         $fundingOrganization = isset($fundingRow['fundingOrganization']) ? $fundingRow['fundingOrganization'] : null;
//         $fundingAmount = isset($fundingRow['fundingAmount']) ? $fundingRow['fundingAmount'] : null;

//         // Only proceed if both values are present
//         if ($fundingOrganization && $fundingAmount) {
//             // Insert into database table other_grants
//             $sql = "INSERT INTO other_grants (fundingOrganization, fundingAmount, app_ID) 
//                     VALUES ('$fundingOrganization', '$fundingAmount', '$app_ID')";

//             // Execute the query and check for errors
//             if (mysqli_query($conn, $sql)) {
//                 echo "Funding row $index inserted successfully.";
//             } else {
//                 echo "Error inserting funding row $index: " . mysqli_error($conn);
//             }
//         }
//     }
// }

// // Decode JSON strings to arrays
// $fundingRows = isset($_POST['fundingRows']) ? json_decode($_POST['fundingRows'], true) : [];
// $grantRows = isset($_POST['grantRows']) ? json_decode($_POST['grantRows'], true) : [];

// if (is_array($fundingRows)) {
//     foreach ($fundingRows as $index => $fundingRow) {
//         // Get funding organization and amount from the current row
//         $fundingOrganization = isset($fundingRow['fundingOrganization']) ? $conn->real_escape_string($fundingRow['fundingOrganization']) : null;
//         $fundingAmount = isset($fundingRow['fundingAmount']) ? $conn->real_escape_string($fundingRow['fundingAmount']) : null;

//         // Only proceed if both values are present
//         if ($fundingOrganization && $fundingAmount) {
//             // Insert into database table other_grants
//             $sql = "INSERT INTO other_grants (fundingOrganization, fundingAmount, app_ID) 
//                     VALUES ('$fundingOrganization', '$fundingAmount', '$app_ID')";

//             if ($conn->query($sql)) {
//                 echo "Funding row $index inserted successfully.";
//             } else {
//                 echo "Error inserting funding row $index: " . $conn->error;
//             }
//         }
//     }
// }

// if (is_array($grantRows)) {
//     foreach ($grantRows as $index => $grantRow) {
//         // Get the necessary data from the current row
//         $fundingSource = isset($grantRow['fundingSource']) ? $conn->real_escape_string($grantRow['fundingSource']) : null;
//         $durationperiod = isset($grantRow['durationperiod']) ? $conn->real_escape_string($grantRow['durationperiod']) : null;
//         $currency = isset($grantRow['currency']) ? $conn->real_escape_string($grantRow['currency']) : null;
//         $amount = isset($grantRow['amount']) ? $conn->real_escape_string($grantRow['amount']) : null;

//         // Insert into database
//         if ($fundingSource && $durationperiod && $currency && $amount) {
//             $sql_funding = "INSERT INTO prev_university_grants (fundingSource, durationperiod, currency, amount, app_ID) 
//                             VALUES ('$fundingSource', '$durationperiod', '$currency', '$amount', '$app_ID')";

//             if ($conn->query($sql_funding)) {
//                 echo "Grant row $index inserted successfully.";
//             } else {
//                 echo "Error inserting grant row $index: " . $conn->error;
//             }
//         }
//     }
// }
// Decode JSON strings to arrays
// $fundingRows = isset($_POST['fundingRows']) ? json_decode($_POST['fundingRows'], true) : [];
// $grantRows = isset($_POST['grantRows']) ? json_decode($_POST['grantRows'], true) : [];

// if (is_array($fundingRows)) {
//     foreach ($fundingRows as $index => $fundingRow) {
//         $fundingOrganization = isset($fundingRow['fundingOrganization']) ? $conn->real_escape_string($fundingRow['fundingOrganization']) : null;
//         $fundingAmount = isset($fundingRow['fundingAmount']) ? $conn->real_escape_string($fundingRow['fundingAmount']) : null;

//         if ($fundingOrganization && $fundingAmount) {
//             $sql = "INSERT INTO other_grants (fundingOrganization, fundingAmount, app_ID) 
//                     VALUES ('$fundingOrganization', '$fundingAmount', '$app_ID')";

//             if (!$conn->query($sql)) {
//                 echo "Error inserting funding row $index: " . $conn->error;
//                 exit(); // Stop if there is an error with a specific funding row
//             }
//         }
//     }
// }

// if (is_array($grantRows)) {
    
//     foreach ($grantRows as $index => $grantRow) {
//         $fundingSource = isset($grantRow['fundingSource']) ? $conn->real_escape_string($grantRow['fundingSource']) : null;
//         $durationperiod = isset($grantRow['durationperiod']) ? $conn->real_escape_string($grantRow['durationperiod']) : null;
//         $currency = isset($grantRow['currency']) ? $conn->real_escape_string($grantRow['currency']) : null;
//         $amount = isset($grantRow['amount']) ? $conn->real_escape_string($grantRow['amount']) : null;

//         if ($fundingSource && $durationperiod && $currency && $amount) {
//             $sql_funding = "INSERT INTO prev_university_grants (fundingSource, durationperiod, currency, amount, app_ID) 
//                             VALUES ('$fundingSource', '$durationperiod', '$currency', '$amount', '$app_ID')";

//             if (!$conn->query($sql_funding)) {
//                 echo "Error inserting grant row $index: " . $conn->error;
//                 exit(); // Stop if there is an error with a specific grant row
//             }
//         }
//     }
// }
// Get the raw POST data

// Get the raw POST data
// $data = json_decode(file_get_contents('php://input'), true);

// // Check if 'fundingRows' and 'grantRows' are provided
// if (isset($data['fundingRows']) && isset($data['grantRows'])) {

//     $fundingRows = $data['fundingRows'];  // Get the funding rows from the decoded JSON data
//     $grantRows = $data['grantRows'];  // Get the grant rows from the decoded JSON data

//     // Start a transaction to ensure all rows are inserted together
//     $conn->begin_transaction();

//     // Prepare SQL for funding rows
//     $stmt_funding = $conn->prepare("INSERT INTO other_grants (fundingOrganization, fundingAmount, app_ID) VALUES (?, ?, ?)");
//     if (!$stmt_funding) {
//         echo json_encode(['error' => 'Failed to prepare funding statement: ' . $conn->error]);
//         exit();
//     }

//     // Insert funding rows
//    foreach ($fundingRows as $fundingRow) {
    // Ensure the values are not empty before binding them
    // $fundingOrganization = $fundingRow['fundingOrganization'];
    // $fundingAmount = $fundingRow['fundingAmount'];
    // $app_ID = $fundingRow['app_ID']; // Assuming app_ID is part of each row

    // Only bind and execute if none of the values are empty
    // if (!empty($fundingOrganization) && !empty($fundingAmount) && !empty($app_ID)) {
        // Bind the parameters (use 'sss' if all are strings, adjust as needed)
//         $stmt_funding->bind_param("sss", $fundingOrganization, $fundingAmount, $app_ID);
        
//         // Execute the statement and handle errors
//         if (!$stmt_funding->execute()) {
//             // Rollback the transaction if an error occurs
//             $conn->rollback();
//             echo json_encode(['error' => 'Error inserting funding row: ' . $conn->error]);
//             exit();
//         }
//     // }
// }


//     // Prepare SQL for grant rows
//     $stmt_grant = $conn->prepare("INSERT INTO prev_university_grants (fundingSource, durationperiod, currency, amount, app_ID) VALUES (?, ?, ?, ?, ?)");
//     if (!$stmt_grant) {
//         echo json_encode(['error' => 'Failed to prepare grant statement: ' . $conn->error]);
//         exit();
//     }

//     // Insert grant rows
//     foreach ($grantRows as $grantRow) {
        // Ensure the values are not empty before binding them
        // $fundingSource = $conn->real_escape_string($grantRow['fundingSource']);
        // $durationperiod = $conn->real_escape_string($grantRow['durationperiod']);
        // $currency = $conn->real_escape_string($grantRow['currency']);
        // $amount = $conn->real_escape_string($grantRow['amount']);
        // $app_ID = $conn->real_escape_string($grantRow['app_ID']); // Assuming app_ID is part of each row

//         if ($fundingSource && $durationperiod && $currency && $amount && $app_ID) {
//             $stmt_grant->bind_param("sssss", $fundingSource, $durationperiod, $currency, $amount, $app_ID);
//             if (!$stmt_grant->execute()) {
//                 $conn->rollback();
//                 echo json_encode(['error' => 'Error inserting grant row: ' . $conn->error]);
//                 exit();
//             }
//         }
//     }

//     // Commit the transaction after all rows are inserted
//     $conn->commit();

//     // Return success response
//     echo json_encode(['success' => 'Rows inserted successfully']);

//     // Close prepared statements
//     $stmt_funding->close();
//     $stmt_grant->close();

// } 


 // Insert into supervisors table
//    $co_investigators = isset($_POST['co_investigators']) ? $conn->real_escape_string($_POST['co_investigators']) : '';
//      $co_investigator_departmentUniversity = isset($_POST['co_investigator_departmentUniversity']) ? $conn->real_escape_string($_POST['co_investigator_departmentUniversity']) : '';
//      $foreign_collaborators = isset($_POST['foreign_collaborators']) ? $conn->real_escape_string($_POST['foreign_collaborators']) : '';
//      $foreign_collaborator_departmentUniversity = isset($_POST['foreign_collaborator_departmentUniversity']) ? $conn->real_escape_string($_POST['foreign_collaborator_departmentUniversity']) : '';
 
//      $sql_supervisors = "INSERT INTO supervisors (app_ID, co_investigators, co_investigator_departmentUniversity, foreign_collaborators, foreign_collaborator_departmentUniversity) VALUES ('$app_ID', '$co_investigators', '$co_investigator_departmentUniversity', '$foreign_collaborators', '$foreign_collaborator_departmentUniversity')";
 
//      if (!$conn->query($sql_supervisors)) {
//          echo json_encode([
//              "status" => "error",
//              "message" => "Error inserting into supervisors: " . $conn->error
//          ]);
//          exit();
//      } 

// $co_investigators = isset($_POST['co_investigators']) ? json_decode($_POST['co_investigators'], true) : [];
// $co_investigator_departmentUniversity = isset($_POST['co_investigator_departmentUniversity']) ? json_decode($_POST['co_investigator_departmentUniversity'], true) : [];
// $foreign_collaborators = isset($_POST['foreign_collaborators']) ? $conn->real_escape_string($_POST['foreign_collaborators']) : '';
// $foreign_collaborator_departmentUniversity = isset($_POST['foreign_collaborator_departmentUniversity']) ? $conn->real_escape_string($_POST['foreign_collaborator_departmentUniversity']) : '';

// // Check if co_investigators is an array before proceeding
// if (is_array($co_investigators) && is_array($co_investigator_departmentUniversity)) {
//     foreach ($co_investigators as $index => $investigator) {
//         $investigator_name = $conn->real_escape_string($investigator);
//         $investigator_department = isset($co_investigator_departmentUniversity[$index]) ? $conn->real_escape_string($co_investigator_departmentUniversity[$index]) : '';

//         // Insert into supervisors table for each co-investigator
//         $sql_supervisors = "INSERT INTO supervisors (app_ID, co_investigators, co_investigator_departmentUniversity, foreign_collaborators, foreign_collaborator_departmentUniversity) 
//                             VALUES ('$app_ID', '$investigator_name', '$investigator_department', '$foreign_collaborators', '$foreign_collaborator_departmentUniversity')";

//         if (!$conn->query($sql_supervisors)) {
//             echo json_encode([
//                 "status" => "error",
//                 "message" => "Error inserting into supervisors: " . $conn->error
//             ]);
//             exit();
//         }
//     }
// } 


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
