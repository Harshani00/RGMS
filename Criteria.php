<?php
// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Database connection
include("dbConnection.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Handle adding criteria
    $criteria = $_POST['criteria'];

    if (!empty($criteria)) {
        $stmt = $conn->prepare("INSERT INTO criteria (criteria) VALUES (?)");
        $stmt->bind_param("s", $criteria);

        if ($stmt->execute()) {
            $last_id = $conn->insert_id;
            echo json_encode(["C_Id" => $last_id, "criteria" => $criteria]);
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Criteria cannot be empty";
    }

} elseif ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Handle fetching criteria
    $sql = "SELECT * FROM criteria";
    $result = $conn->query($sql);

    $criteria = [];
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $criteria[] = $row;
        }
    }

    echo json_encode($criteria);

} elseif ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    // Handle deleting criteria
    parse_str(file_get_contents("php://input"), $_DELETE);
    $id = $_DELETE['C_Id'];

    if (!empty($id)) {
        $stmt = $conn->prepare("DELETE FROM criteria WHERE C_Id = ?");
        $stmt->bind_param("i", $id);

        if ($stmt->execute()) {
            echo json_encode(["success" => true]);
        } else {
            echo json_encode(["error" => $stmt->error]);
        }

        $stmt->close();
    } else {
        echo json_encode(["error" => "C_Id is required"]);
    }
}

$conn->close();
?>
