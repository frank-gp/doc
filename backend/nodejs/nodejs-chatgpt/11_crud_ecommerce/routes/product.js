const express = require('express');
const router = express.Router();
const db = require('../models/productModel');

// Create a product
router.post('/', (req, res) => {
  const { name, description, price, quantity } = req.body;
  const query = `INSERT INTO products (name, description, price, quantity) VALUES (?, ?, ?, ?)`;
  db.query(query, [name, description, price, quantity], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(201).json({ message: 'Product added' });
    }
  });
});

// Read all products
router.get('/', (req, res) => {
  const query = 'SELECT * FROM products';
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(200).json(result);
    }
  });
});

// Update a product
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { name, description, price, quantity } = req.body;
  const query = `UPDATE products SET name=?, description=?, price=?, quantity=? WHERE id=?`;
  db.query(query, [name, description, price, quantity, id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(200).json({ message: 'Product updated' });
    }
  });
});

// Delete a product
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM products WHERE id=?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(200).json({ message: 'Product deleted' });
    }
  });
});

module.exports = router;
