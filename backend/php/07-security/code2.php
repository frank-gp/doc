<?php
// Sample input data
$userInput = $_POST['user_input'];

// Validate user input
if (filter_var($userInput, FILTER_VALIDATE_EMAIL)) {
    // Input is a valid email address
    $safeEmail = htmlspecialchars($userInput, ENT_QUOTES, 'UTF-8');

    // Connect to the database using prepared statements
    $servername = "localhost";
    $username = "your_username";
    $password = "your_password";
    $dbname = "your_database";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Use prepared statements to prevent SQL injection
    $stmt = $conn->prepare("INSERT INTO users (email) VALUES (?)");
    $stmt->bind_param("s", $safeEmail);

    if ($stmt->execute()) {
        echo "User added successfully.";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    // Invalid email address
    echo "Invalid email address.";
}
?>
