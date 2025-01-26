// Import the 'http' module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');
  
  // Write the response
  res.write('Hello, World!\n');
  
  // End the response
  res.end();
});

// Listen on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
