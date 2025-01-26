const express = require('express');
const path = require('path'); // Import the path module

const app = express();


// Define a route that handles a GET request
app.get('/contacto', (req, res) => {
  // Use res.sendFile() to send the HTML file in response
  const filePath = path.join(__dirname, 'pages/contacto.html');
  res.sendFile(filePath);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
