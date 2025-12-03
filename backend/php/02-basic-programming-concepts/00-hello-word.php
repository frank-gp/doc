<!-- comment in html -->

<p>hello html</p>
<br>

<?= 'hello PHP' . "<br>" ?>

<p>This will also be ignored by PHP and displayed by the browser.</p>

<?php 
echo 'hello echo <br>'; 
print 'hello echo\''; 

// comment in php

/* comments 
   multi 
   line 
*/

exit; // or die();

?>

<?php echo 'We omitted the last closing tag';
echo 'This is a test'; // This is a one-line c++ style comment
