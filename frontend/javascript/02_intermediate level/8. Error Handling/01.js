function divideNumbers(a, b) {
    try {
      if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Both inputs must be numbers");
      }
  
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
  
      const result = a / b;
      return result;
    } catch (error) {
      // Handle the error
      console.error("Error:", error.message);
      return null; // Return a default value or handle accordingly
    }
  }
  
  // Example usage:
  console.log(divideNumbers(10, 2)); // Output: 5
  console.log(divideNumbers("abc", 2)); // Output: null (Error: Both inputs must be numbers)
  console.log(divideNumbers(8, 0)); // Output: null (Error: Cannot divide by zero)
  