<?php
// Enable CORS for cross-origin requests if necessary
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Start session if needed
session_start();

// Include the database connection
include("dbConnection.php");

// Get the application ID from the query parameters
$appId = isset($_GET['appId']) ? $_GET['appId'] : null;

if ($appId) {
    // Prepare the SQL query to fetch the project details based on app_ID
    

    $query = "SELECT  p.projectTitle, a.name , a.faculty  ,a.department 
        FROM project p
        JOIN application a ON p.app_ID = a.Id;
        

    $stmt = $conn->prepare($query);
    
    if ($stmt) {
        // Execute the query with the provided app_ID
        $stmt->bind_param("i", $appId); // "i" indicates integer type
        $stmt->execute();
        
        // Get the result
        $result = $stmt->get_result();
        
        if ($result->num_rows > 0) {
            // Fetch the project data as an associative array
            $project = $result->fetch_assoc();
            // Return the project data as JSON
            echo json_encode($project);
        } else {
            // No project found with the given app_ID
            echo json_encode(["error" => "No project found"]);
        }
        
        // Close the statement
        $stmt->close();
    } else {
        // Error preparing the SQL statement
        echo json_encode(["error" => "Failed to prepare statement"]);
    }
} else {
    // app_ID not provided in the request
    echo json_encode(["error" => "app_ID not provided"]);
}

// Close the database connection
$conn->close();
?>
