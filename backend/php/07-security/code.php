<?php
// Example of input validation and preventing SQL injection

// Function to validate user input
function sanitizeInput($input) {
    return htmlspecialchars(strip_tags(trim($input)), ENT_QUOTES, 'UTF-8');
}

// Assuming a form submission with user input
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate and sanitize user input
    $username = sanitizeInput($_POST['username']);
    $password = sanitizeInput($_POST['password']);

    // Use prepared statements to prevent SQL injection
    $dbHost = 'your_db_host';
    $dbName = 'your_db_name';
    $dbUser = 'your_db_user';
    $dbPass = 'your_db_password';

    $conn = new mysqli($dbHost, $dbUser, $dbPass, $dbName);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Using prepared statement to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if the user exists
    if ($result->num_rows > 0) {
        echo "Login successful!";
    } else {
        echo "Invalid username or password.";
    }

    $stmt->close();
    $conn->close();
}
?>
