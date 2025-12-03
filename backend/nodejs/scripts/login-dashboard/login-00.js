const users = [
  { user: "frank", password: "admin" },
  { user: "john", password: "password123" },
];

function login(username, password) {
  // Check if there's a user with the provided username and password
  const user = users.find((u) => u.user === username && u.password === password);

  if (user) {
    console.log("Login successful!");
  } else {
    console.log("Invalid username or password. Please try again.");
  }
}

// Example usage
login("frank", "admin"); // Should print "Login successful!"
login("frank", "wrongpassword"); // Should print "Invalid username or password. Please try again."
login("nonexistentuser", "password123"); // Should print "Invalid username or password. Please try again."
