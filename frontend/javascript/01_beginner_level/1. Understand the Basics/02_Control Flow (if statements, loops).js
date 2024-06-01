// If Statements
let isRaining = true;

// If-Else Statement
if (isRaining) {
  // This block executes if 'isRaining' is true
  console.log("Remember to take an umbrella!");
} else {
  // This block executes if 'isRaining' is false
  console.log("No need for an umbrella today.");
}

// Switch Statement
let dayOfWeek = "Monday";

// Switch statement based on the value of 'dayOfWeek'
switch (dayOfWeek) {
  case "Monday":
    console.log("It's the start of the week!");
    break;
  case "Friday":
    console.log("TGIF!");
    break;
  default:
    console.log("It's a regular day.");
}

// Loops
// For Loop
for (let i = 0; i < 5; i++) {
  // Iterates five times, printing a message in each iteration
  console.log("Iteration " + (i + 1));
}

// While Loop
let count = 0;
// While loop that iterates while 'count' is less than 3
while (count < 3) {
  console.log("Count: " + count);
  count++;
}

// Do-While Loop
let num = 5;
// Do-while loop ensures that the loop body is executed at least once
do {
  console.log("Number: " + num);
  num--;
} while (num > 0);
