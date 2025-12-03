<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if file was uploaded without errors
    if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
        $file_name = $_FILES['file']['name'];
        $file_path = 'uploads/' . $file_name; // Specify the directory where you want to store the uploaded file

        // Move the uploaded file to the specified directory
        if (move_uploaded_file($_FILES['file']['tmp_name'], $file_path)) {
            echo "File uploaded successfully. File name: $file_name";
        } else {
            echo "Error uploading file.";
        }
    } else {
        echo "No file uploaded or an error occurred during upload.";
    }
}
?>
