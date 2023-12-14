<?php
// $host = "localhost";
// $username = "root";
// $password = "";
// $database = "newsletter";

$host = "sql200.infinityfree.com";
$username = "epiz_23787079";
$password = "rm1vOHQmEwg";
$database = "epiz_23787079_newsletter";

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Create connection
    $conn = new mysqli($host, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get email from the form
    $email = $_POST['email'];

    // Insert email into the database
    $sql = "INSERT INTO subscribers (email) VALUES ('$email')";

    if ($conn->query($sql) === TRUE) {
        echo "Thank you for subscribing!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}

// Delete subscriber if delete button is clicked
if (isset($_GET['delete_id'])) {
    $conn = new mysqli($host, $username, $password, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $deleteId = $_GET['delete_id'];

    $deleteQuery = "DELETE FROM subscribers WHERE id = $deleteId";

    if ($conn->query($deleteQuery) === TRUE) {
        echo "Subscriber deleted successfully!";
    } else {
        echo "Error deleting subscriber: " . $conn->error;
    }

    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Newsletter Subscription</title>
</head>
<body>

<h2>Subscribe to our Newsletter</h2>
<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
    <label for="email">Email:</label>
    <input type="email" name="email" required value="user@mail.com">
    <button type="submit">Subscribe</button>
</form>

<hr>

<h2>Subscribers List</h2>

<?php
// Display all subscribers
$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM subscribers";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<ul>";
    while ($row = $result->fetch_assoc()) {
        echo "<li>" . $row["email"] . " 
        <a href=\"?delete_id=" . $row["id"] . "\">Delete</a></li>";
    }
    echo "</ul>";
} else {
    echo "No subscribers yet.";
}

$conn->close();
?>

</body>
</html>
