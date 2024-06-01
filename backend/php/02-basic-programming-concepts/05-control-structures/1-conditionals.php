<?php
// Control Structures
// PHP supports control structures like if statements, loops (for, while, do-while), and switch statements.

// 1. Conditional Statements:
$condition = true;

if ($condition) {
    // code to be executed if the condition is true
} else {
    // code to be executed if the condition is false
}
?>


<!-- b. else-if statement: -->
<?php
$condition1 = false;
$condition2 = true;

if ($condition1) {
    // code to be executed if condition1 is true
} elseif ($condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if none of the conditions are true
}
?>


<!-- c. switch statement: -->
<?php
$value = 2;

switch ($value) {
    case 1:
        // code to be executed if $value is 1
        break;

    case 2:
        // code to be executed if $value is 2
        break;

    default:
        // code to be executed if $value doesn't match any case
}
?>
