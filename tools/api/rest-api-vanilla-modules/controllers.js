// controllers.js

let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];
  
  function getItems(req, res) {
    // Get all items
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(items));
  }
  
  function getItemById(req, res) {
    // Get item by ID
    const itemId = parseInt(req.url.split('/')[2]);
    const item = items.find(item => item.id === itemId);
  
    if (item) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(item));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Item not found');
    }
  }
  
  function createItem(req, res) {
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
  }
  
  function updateItem(req, res) {
    // Update item by ID
    const itemId = parseInt(req.url.split('/')[2]);
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
  }
  
  function deleteItem(req, res) {
    // Delete item by ID
    const itemId = parseInt(req.url.split('/')[2]);
    const itemIndex = items.findIndex(item => item.id === itemId);
  
    if (itemIndex !== -1) {
      const deletedItem = items.splice(itemIndex, 1);
  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(deletedItem));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Item not found');
    }
  }
  
  module.exports = { getItems, getItemById, createItem, updateItem, deleteItem };
  