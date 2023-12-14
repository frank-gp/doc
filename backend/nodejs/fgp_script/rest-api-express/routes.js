// routes.js
const express = require('express');
const { getItems, getItemById, createItem, updateItem, deleteItem } = require('./controllers');

const itemsRouter = express.Router();

// Routes
itemsRouter.get('/', getItems);
itemsRouter.get('/:id', getItemById);
itemsRouter.post('/', createItem);
itemsRouter.put('/:id', updateItem);
itemsRouter.delete('/:id', deleteItem);

module.exports = { itemsRouter };
