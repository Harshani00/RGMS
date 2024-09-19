<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['Id'])) {
    echo json_encode([
        "status" => "error",
        "message" => "No application Id found."
    ]);
    exit();
}

echo json_encode([
    "Id" => $_SESSION['Id']
]);
?>
