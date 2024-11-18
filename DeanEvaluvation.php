<?php



header("Content-Type: application/json");

include("dbConnection.php");  // Ensure the correct database connection file is included

// Get the raw POST data (JSON input)
$data = json_decode(file_get_contents("php://input"));

// Check if the required fields are set
if (isset($data->app_ID) && isset($data->decision) && isset($data->remarks)) {
    // Get the values from the input
    $app_ID = $data->app_ID;
    $dean_approval = $data->decision;  // This corresponds to the 'decision' from the request
    $remarks = $data->remarks;        // This corresponds to the 'remarks' from the request

    // Begin transaction to ensure atomicity
    $conn->begin_transaction();

    try {
        // Update the 'dean_approval' table where the app_ID matches
        $query = "UPDATE dean_approval SET decision = ?, remarks = ? WHERE app_ID = ?";
        
        // Prepare the SQL query for dean_approval
        $stmt = $conn->prepare($query);
        
        // Bind parameters to the query
        $stmt->bind_param("ssi", $dean_approval, $remarks, $app_ID);  // 'ssi' means: string, string, integer

        // Execute the query for dean_approval and check for success
        if (!$stmt->execute()) {
            throw new Exception("Failed to update dean_approval table.");
        }

        // Update the 'application' table status where the Id matches
        $status_query = "UPDATE application SET status = ? WHERE Id = ?";
        
        // Prepare the SQL query for application
        $stmt = $conn->prepare($status_query);
        
        // Bind parameters to the query
        $stmt->bind_param("si", $dean_approval, $app_ID);  // 'si' means: string, integer

        // Execute the query for application status and check for success
        if (!$stmt->execute()) {
            throw new Exception("Failed to update application table status.");
        }

        // Commit the transaction if both queries are successful
        $conn->commit();

        // Return success response
        echo json_encode(["success" => true]);

    } catch (Exception $e) {
        // Rollback the transaction if an error occurs
        $conn->rollback();

        // Return error response
        echo json_encode(["success" => false, "error" => $e->getMessage()]);
    }

    // Close the prepared statement and database connection
    $stmt->close();
    $conn->close();
} else {
    // Return error if input is invalid or missing
    echo json_encode(["success" => false, "error" => "Invalid input."]);
}
?>