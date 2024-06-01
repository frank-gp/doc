function exampleWithFinally(a, b) {
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
      console.error("Error:", error.message);
      return null;
    } finally {
      console.log("This block always runs, regardless of errors.");
    }
  }
  