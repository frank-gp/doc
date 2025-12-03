<?php
// Control Structures: Loop
// PHP supports control structures like if statements, loops (for, while, do-while), and switch statements.
// 2. Loops:


// a. for loop:
for ($i = 0; $i < 5; $i++) {
    // code to be executed in each iteration
}
?>



<!-- b. while loop: -->
<?php
$i = 0;

while ($i < 5) {
    // code to be executed in each iteration
    $i++;
}
?>

<!-- c. do-while loop: -->
<?php
$i = 0;

do {
    // code to be executed in each iteration
    $i++;
} while ($i < 5);
?>

<!-- d. foreach loop: -->
<?php
$array = [1, 2, 3, 4, 5];

foreach ($array as $value) {
    // code to be executed for each element in $array
}
?>
