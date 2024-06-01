// Function Declaration
function greet(name) {
    // The 'name' parameter represents the input to the function
    console.log("Hello, " + name + "!");
  }
  
  // Function Call
  greet("Alice"); // Output: Hello, Alice!
  
  // Scope
  let globalVar = "I'm global";
  
  function exampleScope() {
    // localVar is a variable declared with the 'let' keyword, making it block-scoped
    let localVar = "I'm local";
  
    // Accessing global variable from within the function
    console.log(globalVar);
    
    // Accessing local variable within the function
    console.log(localVar);
  }
  
  exampleScope();
  // Uncommenting the line below would result in an error because localVar is not defined outside the function
  // console.log(localVar);
  
  // Arrow Functions
  const add = (a, b) => a + b; // Arrow function for addition
  console.log(add(3, 5)); // Output: 8
  
  // Function Scope and Closures
  function outerFunction(outerParam) {
    // outerParam is a parameter of outerFunction
  
    function innerFunction(innerParam) {
      // innerParam is a parameter of innerFunction
      console.log(outerParam + innerParam);
    }
  
    return innerFunction;
  }
  
  const closureFunction = outerFunction(10); // closureFunction now "closes over" the outerParam with a value of 10
  closureFunction(5); // Output: 15
  
  // Hoisting
  hoistedFunction(); // Output: "This function was hoisted!"
  
  // Function declared after the call, but still gets hoisted
  function hoistedFunction() {
    console.log("This function was hoisted!");
  }
  