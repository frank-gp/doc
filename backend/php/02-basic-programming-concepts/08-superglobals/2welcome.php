<!-- welcome.php -->
<?php
session_start();

// Check if the username is set in the session
if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];
    echo "Welcome, $username!";
} else {
    echo "User not logged in.";
}
?>
