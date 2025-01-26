const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


const items = [];

// Create a new item
app.post('/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
});

// Get all items
app.get('/items', (req, res) => {
    res.json(items);
});

// Get a specific item by ID
app.get('/items/:id', (req, res) => {
    const id = req.params.id;
    const item = items[id];
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

// Update an item by ID
app.put('/items/:id', (req, res) => {
    const id = req.params.id;
    const updatedItem = req.body;
    items[id] = updatedItem;
    res.json(updatedItem);
});

// Delete an item by ID
app.delete('/items/:id', (req, res) => {
    const id = req.params.id;
    items.splice(id, 1);
    res.sendStatus(204);
});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
