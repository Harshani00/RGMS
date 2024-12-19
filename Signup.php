<?php
// Enable CORS

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

session_start();
include("dbConnection.php");

$firstName = isset($_POST['firstName']) ? trim($_POST['firstName']) : '';
$lastName = isset($_POST['lastName']) ? trim($_POST['lastName']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$password = isset($_POST['password']) ? trim($_POST['password']) : '';
$confirmPassword = isset($_POST['confirmPassword']) ? trim($_POST['confirmPassword']) : '';

if (empty($firstName) || empty($lastName) || empty($email) || empty($password) || empty($confirmPassword)) {
    echo json_encode(["status" => false, "message" => "All fields are required."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => false, "message" => "Invalid email format."]);
    exit;
}

if ($password !== $confirmPassword) {
    echo json_encode(["status" => false, "message" => "Passwords do not match."]);
    exit;
}

$query = "SELECT email FROM sign_in WHERE email = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    echo json_encode(["status" => false, "message" => "Email is already registered."]);
    $stmt->close();
    $conn->close();
    exit;
}
$stmt->close();

$role = "Applicant";

$stmt = $conn->prepare("INSERT INTO sign_in (firstName, lastName, email, password,confirmPassword, role) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $firstName, $lastName, $email, $password, $confirmPassword, $role);

if ($stmt->execute()) {
    $_SESSION['user_id'] = $conn->insert_id;
    echo json_encode(["status" => true, "message" => "Welcome to the Research Grant Management System!"]);
} else {
    echo json_encode(["status" => false, "message" => "Error: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>

