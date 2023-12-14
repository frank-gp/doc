const http = require('http');
const url = require('url');
const qs = require('querystring');

// Sample data (in-memory storage)
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // Handle CORS (Cross-Origin Resource Sharing)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Routing
  if (req.method === 'GET' && parsedUrl.pathname === '/items') {
    // Get all items
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(items));
  } else if (req.method === 'GET' && parsedUrl.pathname === '/items/:id') {
    // Get item by ID
    const itemId = parseInt(parsedUrl.pathname.split('/')[2]);
    const item = items.find(item => item.id === itemId);

    if (item) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(item));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Item not found');
    }
  } else if (req.method === 'POST' && parsedUrl.pathname === '/items') {
    // Create a new item
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const newItem = JSON.parse(body);
      newItem.id = items.length + 1;
      items.push(newItem);

      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newItem));
    });
  } else if (req.method === 'PUT' && parsedUrl.pathname === '/items/:id') {
    // Update item by ID
    const itemId = parseInt(parsedUrl.pathname.split('/')[2]);
    const itemIndex = items.findIndex(item => item.id === itemId);

    if (itemIndex !== -1) {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });

      req.on('end', () => {
        const updatedItem = JSON.parse(body);
        items[itemIndex] = { ...items[itemIndex], ...updatedItem };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(items[itemIndex]));
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Item not found');
    }
  } else if (req.method === 'DELETE' && parsedUrl.pathname === '/items/:id') {
    // Delete item by ID
    const itemId = parseInt(parsedUrl.pathname.split('/')[2]);
    const itemIndex = items.findIndex(item => item.id === itemId);

    if (itemIndex !== -1) {
      const deletedItem = items.splice(itemIndex, 1);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(deletedItem));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Item not found');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
