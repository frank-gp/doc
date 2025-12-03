<?php
// Operators
/* PHP supports a variety of operators, including arithmetic, comparison, logical, and assignment operators. */

// Arithmetic Operators
$a = 10;
$b = 3;

$sum = $a + $b;          // 13
$difference = $a - $b;    // 7
$product = $a * $b;       // 30
$quotient = $a / $b;      // 3.333...
$remainder = $a % $b;     // 1

// Assignment Operators
$x = 5;
$y = 10;

$x += $y;  // $x is now 15

// Comparison Operators
$a = 5;
$b = '5';

$equal = $a == $b;          // true (loose comparison)
$identical = $a === $b;     // false (strict comparison)

// Logical Operators
$x = true;
$y = false;

$andResult = $x and $y;    // false
$orResult = $x or $y;      // true
$xorResult = $x xor $y;    // true
$notResult = !$x;          // false

/* 
* = and
+ = or

1 * 1 = 1;
1 * 0 = 0;
0 * 0 = 0;

1 + 1 = 2; 
1 + 0 = 1;
0 + 0 = 0;

*/

// echo true and true;
// echo true and false;
// echo false and false;

// echo true or true;
// echo true or false;
// echo false or false;


// Increment/Decrement Operators
$a = 5;
$a++;  // $a is now 6
$a--;  // $a is now 5 again

// echo $a;

// String Operators concatenation
$str1 = "Hello";
$str2 = " World";

// echo $str1 . $str2 . "<br>";  // "Hello World"
// echo "$str1  $str2";  // "Hello World"




// Array Operators unionResult
$arr1 = ['a' => 1, 'b' => 2];
$arr2 = ['b' => 2, 'c' => 3];

print_r($arr1 + $arr2);  // ['a' => 1, 'b' => 2, 'c' => 3]
exit;

// Displaying Results
echo "Arithmetic Operators:\n";
// exit;
echo "Sum: $sum\n";
echo "Difference: $difference\n";
echo "Product: $product\n";
echo "Quotient: $quotient\n";
echo "Remainder: $remainder\n\n";

echo "Assignment Operators:\n";
echo "Result of x += y: $x\n\n";

echo "Comparison Operators:\n";
echo "Equal: ";
var_dump($equal);
echo "Identical: ";
var_dump($identical);
echo "\n";

echo "Logical Operators:\n";
echo "AND Result: ";
var_dump($andResult);
echo "OR Result: ";
var_dump($orResult);
echo "XOR Result: ";
var_dump($xorResult);
echo "NOT Result: ";
var_dump($notResult);
echo "\n";

echo "Increment/Decrement Operators:\n";
echo "Increment: $a\n\n";

echo "String Operators:\n";
echo "Concatenation Result: $concatenationResult\n\n";

echo "Array Operators:\n";
echo "Union Result:\n";
print_r($unionResult);
