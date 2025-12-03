<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show Databases</title>
    <script>
        // Function to save input values in localStorage
        function saveInputs() {
            localStorage.setItem("servername", document.getElementById("servername").value);
            localStorage.setItem("username", document.getElementById("username").value);
            localStorage.setItem("password", document.getElementById("password").value);
            localStorage.setItem("dbname", document.getElementById("dbname").value);
        }

        // Function to load input values from localStorage
        function loadInputs() {
            document.getElementById("servername").value = localStorage.getItem("servername") || "localhost";
            document.getElementById("username").value = localStorage.getItem("username") || "root";
            document.getElementById("password").value = localStorage.getItem("password") || "";
            document.getElementById("dbname").value = localStorage.getItem("dbname") || "";
        }
    </script>
</head>

<body onload="loadInputs()">

    <form method="post" action="" onsubmit="saveInputs()">
        <label for="servername">Server Name:</label>
        <input type="text" id="servername" name="servername" required><br>

        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br>

        <label for="dbname">Database Name:</label>
        <input type="text" id="dbname" name="dbname"><br>

        <input type="submit" value="Show Databases">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $servername = $_POST["servername"];
        $username = $_POST["username"];
        $password = $_POST["password"];
        $dbname = isset($_POST["dbname"]) && !empty($_POST["dbname"]) ? $_POST["dbname"] : null;

        if ($dbname !== null) {
            $conn = new mysqli($servername, $username, $password, $dbname);
        } else {
            $conn = new mysqli($servername, $username, $password);
        }

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $query = "SHOW DATABASES";
        $result = $conn->query($query);
        echo "<fieldset>";
        echo "<legend>Databases on $servername</legend>";
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
