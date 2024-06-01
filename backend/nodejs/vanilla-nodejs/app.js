const http = require('http');

// Sample data for the API
let data = [
  { id: 1, name: 'Item 1', description: 'This is the first item' },
  { id: 2, name: 'Item 2', description: 'This is the second item' },
  { id: 3, name: 'Item 3', description: 'This is the third item' }
];

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set response headers
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Handle routes
  if (req.method === 'GET' && req.url === '/api/items') {
    // If the route is /api/items and the method is GET, return the sample data
    res.statusCode = 200;
    res.end(JSON.stringify(data));
  } else if (req.method === 'POST' && req.url === '/api/add-item') {
    // Handle adding an item (you can modify this to add items to the data array)
    let requestBody = '';
    req.on('data', (chunk) => {
      requestBody += chunk;
    });

    req.on('end', () => {
      const newItem = JSON.parse(requestBody);
      // Generate a new unique ID for the item
      newItem.id = data.length + 1;
      data.push(newItem);
      res.statusCode = 200;
      res.end(JSON.stringify({ message: 'Item added successfully', data: newItem }));
    });
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

// Listen on a specific port
const port = 3000;
server.listen(port, () => {
  console.log(`Server for API without a framework in Node.js is listening on port ${port}`);
});
