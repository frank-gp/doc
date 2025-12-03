<?php
$x = 10;
$y = 20;

function sum() {
    $GLOBALS['result'] = $GLOBALS['x'] + $GLOBALS['y'];
}

sum();
echo $result; // Outputs 30
?>


<?php
echo $_SERVER['SERVER_NAME'];  // Outputs the server name
echo $_SERVER['PHP_SELF'];    // Outputs the current script's filename
echo $_SERVER['REQUEST_METHOD'];  // Outputs the request method (GET, POST, etc.)
?>


<?php
$username = $_GET['username'];
echo "Hello, $username!";
// Assuming the URL is something like: 
// http://example.com/script.php?username=John
// http://localhost:88/?username=John
// Outputs: Hello, John!
?>

<?php
// $password = $_POST['password'];
// Assuming a form with method="post" and an input named "password"
?>


<?php
$user = $_REQUEST['username'];
echo $user;
// Can contain data from $_GET, $_POST, or $_COOKIE
// http://localhost:88/?username=John
?>

<?php
session_start();
$_SESSION['username'] = 'John';
// Accessible on other pages after starting the session
?>


<?php
// $user = $_COOKIE['user'];
// Assuming a cookie named "user" has been set
// Set a cookie named "user" with the value "John" that expires in 1 hour (3600 seconds)
setcookie("user", "JohnCookie", time() + 3600, "/");

// Check if the "user" cookie is set
if (isset($_COOKIE['user'])) {
    $username = $_COOKIE['user'];
    echo "Welcome back, $username!";
} else {
    echo "Welcome, guest!";
}
?>


<?php
// $file_name = $_FILES['file']['name'];
// Assuming a file upload input named "file" in a form
?>

