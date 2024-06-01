<?php

// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "api_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set headers to allow cross-origin resource sharing (CORS)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Check the HTTP method
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Retrieve data
        $id = isset($_GET['id']) ? $_GET['id'] : null;
        get_users($conn, $id);
        break;
    case 'POST':
        // Create new record
        create_user($conn);
        break;
    case 'PUT':
        // Update record
        update_user($conn);
        break;
    case 'DELETE':
        // Delete record
        $id = isset($_GET['id']) ? $_GET['id'] : null;
        delete_user($conn, $id);
        break;
    default:
        // Invalid request
        http_response_code(405);
        echo json_encode(array("message" => "Method not allowed."));
}

// Close the database connection
$conn->close();

// Function to get users
function get_users($conn, $id = null) {
    $sql = "SELECT * FROM users" . ($id ? " WHERE id = $id" : "");
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $users = array();
        while ($row = $result->fetch_assoc()) {
            $users[] = $row;
        }
        echo json_encode($users);
    } else {
        http_response_code(404);
        echo json_encode(array("message" => "No users found."));
    }
}

// Function to create a user
function create_user($conn) {
    $data = json_decode(file_get_contents("php://input"));

    if ($data->name && $data->email) {
        $name = $data->name;
        $email = $data->email;

        $sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";
        if ($conn->query($sql) === TRUE) {
            http_response_code(201);
            echo json_encode(array("message" => "User created successfully."));
        } else {
            http_response_code(500);
            echo json_encode(array("message" => "Error creating user: " . $conn->error));
        }
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "Invalid input data."));
    }
}

// Function to update a user
function update_user($conn) {
    $data = json_decode(file_get_contents("php://input"));

    if ($data->id && $data->name && $data->email) {
        $id = $data->id;
        $name = $data->name;
        $email = $data->email;

        $sql = "UPDATE users SET name = '$name', email = '$email' WHERE id = $id";
        if ($conn->query($sql) === TRUE) {
            http_response_code(200);
            echo json_encode(array("message" => "User updated successfully."));
        } else {
            http_response_code(500);
            echo json_encode(array("message" => "Error updating user: " . $conn->error));
        }
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "Invalid input data."));
    }
}

// Function to delete a user
function delete_user($conn, $id) {
    if ($id) {
        $sql = "DELETE FROM users WHERE id = $id";
        if ($conn->query($sql) === TRUE) {
            http_response_code(200);
            echo json_encode(array("message" => "User deleted successfully."));
        } else {
            http_response_code(500);
            echo json_encode(array("message" => "Error deleting user: " . $conn->error));
        }
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "Invalid input data."));
    }
}
?>
