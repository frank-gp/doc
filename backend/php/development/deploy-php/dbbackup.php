<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show Databases</title>
</head>

<body>

    <form method="post" action="">
        <label for="servername">Server Name:</label>
        <input type="text" id="servername" name="servername" value="localhost" required><br>

        <label for="username">Username:</label>
        <input type="text" id="username" name="username" value="root" required><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br>

        <input type="submit" value="Show Databases">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $servername = $_POST["servername"];
        $username = $_POST["username"];
        $password = $_POST["password"];

        $conn = new mysqli($servername, $username, $password);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $query = "SHOW DATABASES";
        $result = $conn->query($query);
        echo "<fieldset>";
        echo "<legend>asdf</legend>";
        if ($result) {
            echo "<table border='1'>";
            echo "<tr><th>Database Name</th></tr>";

            while ($row = $result->fetch_assoc()) {
                echo "<tr><td>" . $row['Database'] . "</td></tr>";
            }

            echo "</table>";

            $result->free();
        } else {
            echo "Error: " . $conn->error;
        }
        echo "</fieldset>";

        $conn->close();
    }
    ?>

</body>

</html>
