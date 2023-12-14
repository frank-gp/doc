<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload Example</title>
</head>
<body>
    <form action="08-1upload.php" method="post" enctype="multipart/form-data">
        <label for="file">Select a file:</label>
        <input type="file" name="file" id="file">
        <button type="submit" name="submit">Upload</button>
    </form>
</body>
</html>
