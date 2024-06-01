const express = require("express");
const app = express();

app.use(express.static("."));
// Define a route for the /data endpoint
app.get("/data", (req, res) => {
  // Extract the access_token from the query parameters
  const access_token = req.query.access_token;

  // Check if the access_token exists
  if (!access_token) {
    return res.status(400).json({ error: "Access token is missing" });
  }

  // You can perform further validation or processing with the access_token here

  // Dummy data for demonstration
  const data = { message: "Hello, this is your data!" };

  // Send the data as JSON response
  res.json(data);
});

// Start the server
const port = 3000; // You can choose any available port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
