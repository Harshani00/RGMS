<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

include("dbConnection.php");  // Ensure the correct database connection file is included

// Get the raw POST data (JSON input)
$data = json_decode(file_get_contents("php://input"));

// Check if the required fields are set
if (isset($data->app_ID) && isset($data->decision) && isset($data->remarks)) {
    // Get the values from the input
    $app_ID = $data->app_ID;
    $hod_approval = $data->decision;  // This corresponds to the 'decision' from the request
    $remarks = $data->remarks;        // This corresponds to the 'remarks' from the request

    // Update the 'hod_approval' table where the app_ID matches
    $query = "UPDATE hod_approval SET decision = ?, remarks = ? WHERE app_ID = ?";
    
    // Prepare the SQL query
    $stmt = $conn->prepare($query);
    
    // Bind parameters to the query
    $stmt->bind_param("ssi", $hod_approval, $remarks, $app_ID);  // 'ssi' means: string, string, integer

    // Execute the query and check for success
    if ($stmt->execute()) {
        echo json_encode(["success" => true]);  // Return success response
    } else {
        // Return error if something goes wrong
        echo json_encode(["success" => false, "error" => "Database update failed."]);
    }

    // Close the prepared statement and database connection
    $stmt->close();
    $conn->close();
} else {
    // Return error if input is invalid or missing
    echo json_encode(["success" => false, "error" => "Invalid input."]);
}

?>