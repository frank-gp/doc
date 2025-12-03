<style>
    body {
        background-color: #123;
        color: white;
    }
    iframe {
        border: 1px solid;
        color: white;
        background-color: moccasin;
        height: 85vh;
    }
    select {
        width: 100%;
    }
</style>

<?php
function getPhpFiles($directory) {
    $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($directory, RecursiveDirectoryIterator::SKIP_DOTS));
    $phpFiles = new RegexIterator($iterator, '/^.+\.php$/i', RecursiveRegexIterator::GET_MATCH);
    $files = [];

    foreach ($phpFiles as $file) {
        $files[] = $file[0];
    }

    return $files;
}

$files = getPhpFiles('.');

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP File Viewer</title>
</head>
<body>

<form>
    <!-- <label for="phpFiles">Select a PHP file:</label> -->
    <select name="phpFiles" id="phpFiles" onchange="updateIframe()">
        <?php foreach ($files as $file): ?>
            <option value="<?php echo $file; ?>"><?php echo $file; ?></option>
        <?php endforeach; ?>
    </select>
</form>

<iframe id="fileViewer" width="100%" height="400"></iframe>

<script>
    // Function to update the iframe and save the selected option in local storage
    function updateIframe() {
        var select = document.getElementById('phpFiles');
        var iframe = document.getElementById('fileViewer');
        var selectedFile = select.value;

        // Save the selected file in local storage
        localStorage.setItem('selectedFile', selectedFile);

        // Update the iframe source
        iframe.src = selectedFile;
    }

    // Function to retrieve the selected option from local storage on page load
    function retrieveSelectedFile() {
        var storedFile = localStorage.getItem('selectedFile');
        if (storedFile) {
            var select = document.getElementById('phpFiles');
            select.value = storedFile;

            // Update the iframe source
            document.getElementById('fileViewer').src = storedFile;
        }
    }

    // Call the function to retrieve the selected option on page load
    retrieveSelectedFile();
</script>

</body>
</html>
