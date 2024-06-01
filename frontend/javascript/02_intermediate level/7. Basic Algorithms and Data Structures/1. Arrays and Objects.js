// Arrays
const numbers = [5, 2, 8, 1, 7];

// Accessing elements
console.log("First element:", numbers[0]);
console.log("Array length:", numbers.length);

// Modifying elements
numbers[1] = 10;
numbers.push(4); // Add an element to the end
numbers.pop();  // Remove the last element

// Objects
const person = {
  name: "John",
  age: 25,
  isStudent: false
};

// Accessing properties
console.log("Person's name:", person.name);
console.log("Person's age:", person["age"]);

// Modifying properties
person.age = 26;
person.city = "New York"; // Add a new property

// Iterating through arrays
for (const num of numbers) {
  console.log(num);
}

// Iterating through objects
for (const key in person) {
  console.log(key + ": " + person[key]);
}
