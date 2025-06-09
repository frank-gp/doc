// controllers.js
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

function getItems(req, res) {
  // Get all items
  res.status(200).json(items);
}

function getItemById(req, res) {
  // Get item by ID
  const itemId = parseInt(req.params.id);
  const item = items.find(item => item.id === itemId);

  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).send('Item not found');
  }
}

function createItem(req, res) {
  // Create a new item
  const newItem = req.body;
  newItem.id = items.length + 1;
  items.push(newItem);

  res.status(201).json(newItem);
}

function updateItem(req, res) {
  // Update item by ID
  const itemId = parseInt(req.params.id);
  const itemIndex = items.findIndex(item => item.id === itemId);

  if (itemIndex !== -1) {
    const updatedItem = req.body;
    items[itemIndex] = { ...items[itemIndex], ...updatedItem };

    res.status(200).json(items[itemIndex]);
  } else {
    res.status(404).send('Item not found');
  }
}

function deleteItem(req, res) {
  // Delete item by ID
  const itemId = parseInt(req.params.id);
  const itemIndex = items.findIndex(item => item.id === itemId);

  if (itemIndex !== -1) {
    const deletedItem = items.splice(itemIndex, 1);

    res.status(200).json(deletedItem);
  } else {
    res.status(404).send('Item not found');
  }
}

module.exports = { getItems, getItemById, createItem, updateItem, deleteItem };
