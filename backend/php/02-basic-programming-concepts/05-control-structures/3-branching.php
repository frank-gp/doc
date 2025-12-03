<?php
// Control Structures: Loop
// PHP supports control structures like if statements, loops (for, while, do-while), and switch statements.
// 3. Branching Statements:

// a. break statement:
for ($i = 0; $i < 5; $i++) {
    if ($i == 3) {
        break; // exit the loop when $i is 3
    }
    // code to be executed in each iteration
}
?>


<!-- b. continue statement: -->
<?php
for ($i = 0; $i < 5; $i++) {
    if ($i == 2) {
        continue; // skip the rest of the code in the current iteration when $i is 2
    }
    // code to be executed in each iteration (except when $i is 2)
}
?>
