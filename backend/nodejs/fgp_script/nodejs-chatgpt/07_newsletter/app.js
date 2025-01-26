// app.js

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // You can use any available port

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., CSS and client-side JavaScript)
app.use(express.static('public'));

// Define a simple registration form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle form submissions
app.post('/subscribe', (req, res) => {
  const email = req.body.email;

  // Store the email in a database or a file, for example.
  // You can use a database like MongoDB, or simply write to a text file.
  // For demonstration purposes, we'll just log the email.
  console.log(`New subscriber: ${email}`);

  res.send('You are now subscribed to our newsletter!');
});

// Start the server
app.listen(port, () => {
  console.log(`Newsletter registration app is listening on port ${port}`);
});
