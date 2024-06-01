const express = require("express");
const app = express();

// Custom logging middleware
function customLogger(req, res, next) {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
}

// Use the custom logging middleware in the application
app.use(customLogger);

// Example route handler
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
