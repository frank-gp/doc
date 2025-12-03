<!-- include Statement: -->
<?php
// The include statement includes and evaluates the specified file. If the file is not found, a warning will be issued, but the script will continue to execute.
// include 'filename.php';
?>

<!-- require Statement: -->
<?php
// The require statement is similar to include, but it is more critical. If the specified file is not found, a fatal error will occur, and the script will terminate.
// require 'filename.php';
?>

<!-- index.php -->
<?php
include 'optional.php';
require 'important.php';

require 'header.php';
?>

<!-- Rest of the content for the main page -->

<?php
require 'footer.php';
?>

