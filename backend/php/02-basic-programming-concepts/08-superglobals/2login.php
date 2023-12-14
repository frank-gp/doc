<!-- login.php -->
<?php
session_start();

// Assume that the user is authenticated, and you get the username from a login form
$user_authenticated = true;
if ($user_authenticated) {
    $_SESSION['username'] = 'John';
    header('Location: 08-2welcome.php'); // Redirect to the welcome page after successful login
    exit();
} else {
    echo "Authentication failed. Please try again.";
}
?>


<!-- login.php -->
<?php
// session_start();

// // Simulating user input (you would usually get this from a login form)
// $input_username = isset($_POST['username']) ? $_POST['username'] : '';
// $input_password = isset($_POST['password']) ? $_POST['password'] : '';

// // Hardcoded credentials for testing
// $correct_username = 'admin';
// $correct_password = 'admin';

// if ($input_username === $correct_username && $input_password === $correct_password) {
//     // Authentication successful
//     $_SESSION['username'] = $input_username;
//     header('Location: welcome.php');
//     exit();
// } else {
//     // Authentication failed
//     echo "Invalid username or password. Please try again.";
// }
?>
