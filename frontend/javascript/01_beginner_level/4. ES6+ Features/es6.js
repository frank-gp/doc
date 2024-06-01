// 1. Let and Const
let variableLet = "Mutable variable";
const constantVar = "Immutable variable";

// 2. Arrow Functions
const add = (a, b) => a + b;

// 3. Template Literals
const name = "John";
const greeting = `Hello, ${name}!`;

// 4. Destructuring Assignment
const person = { firstName: "John", lastName: "Doe" };
const { firstName, lastName } = person;

// 5. Default Parameters
const greet = (name = "Guest") => `Hello, ${name}!`;

// 6. Rest Parameters
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

// 7. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// 8. Object Shorthand
const age = 30;
const user = { name, age };

// 9. Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = "Fetched data";
      resolve(data);
    }, 2000);
  });
};

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// 10. Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const personObject = new Person("Alice", 25);
personObject.sayHello();
