<?php
// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start the session to access session variables
session_start(); 

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit();
}

// Database connection details
include("dbConnection.php");

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO project (projectTitle, fundingSource, durationperiod, currency, amount, projectInvolved, publication1, publication2, publication3, fundingOrganization, fundingAmount, researchFacilities) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

$stmt->bind_param("ssssdsdssdsd", $projectTitle, $fundingSource, $durationperiod, $currency, $amount, $projectInvolved, $publication1, $publication2, $publication3, $fundingOrganization, $fundingAmount, $researchFacilities);

// Retrieve form data
$projectTitle = $_POST['projectTitle'];
$fundingSource = $_POST['grantRow0_fundingSource']; // Adjust for dynamic rows as needed
$durationperiod = $_POST['grantRow0_durationperiod']; // Adjust for dynamic rows as needed
$currency = $_POST['grantRow0_currency']; // Adjust for dynamic rows as needed
$amount = $_POST['grantRow0_amount']; // Adjust for dynamic rows as needed
$projectInvolved = $_POST['projectInvolved'];
$publication1 = $_POST['publication1'];
$publication2 = $_POST['publication2'];
$publication3 = $_POST['publication3'];
$fundingOrganization = $_POST['fundingRow0_fundingOrganization']; // Adjust for dynamic rows as needed
$fundingAmount = $_POST['fundingRow0_fundingAmount']; // Adjust for dynamic rows as needed
$researchFacilities = $_POST['researchFacilities'];

// Execute the statement
if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
