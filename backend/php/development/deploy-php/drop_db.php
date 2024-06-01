<?php

$protocol = (empty($_SERVER['HTTPS']) ? 'http' : 'https');
$host = $_SERVER['HTTP_HOST'];
$requestUri = $_SERVER['REQUEST_URI'];

$url = $protocol . "://" . $host . $requestUri;

if (substr($requestUri, -4) === '.php') {
    $urlFolder =  dirname($url) . "/";
} else {
    $urlFolder =  $url;
}

echo $urlFolder;
    
 ?>


<?php
$servername = "localhost";
$username = "root";
$password = "";
$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Drop database logic
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["dropDatabase"])) {
    $databaseToDrop = $_POST["dropDatabase"];
    $sql = "DROP DATABASE $databaseToDrop";
    
    if ($conn->query($sql) === TRUE) {
        echo "Database '$databaseToDrop' dropped successfully";
    } else {
        echo "Error dropping database: " . $conn->error;
    }
}

// Get the list of databases
$result = $conn->query("SHOW DATABASES");

if ($result->num_rows > 0) {
    echo "<table border='1'>";
    echo "<tr><th>Database</th><th>Action</th></tr>";

    while ($row = $result->fetch_assoc()) {
        $database = $row['Database'];
        echo "<tr><td>$database</td>";
        echo "<td><form method='post'>";
        echo "<input type='hidden' name='dropDatabase' value='$database'>";
        echo "<input type='submit' value='Drop'></form></td></tr>";
    }

    echo "</table>";
} else {
    echo "No databases found.";
}

$conn->close();
?>
