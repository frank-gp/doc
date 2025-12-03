// Import the http module
const http = require('http');

// Configure the HTTP server to respond with "Hello, World!" to all requests
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

// Listen on port 3000 and IP address 127.0.0.1
const port = 3000;
const host = '127.0.0.1';

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
