const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;
const secretKey = 'yourSecretKey'; // Change this to a strong, secret key

app.use(bodyParser.json());

app.use(express.static("."))

// Sample in-memory data
let books = [
  { id: 1, title: 'Book 1' },
  { id: 2, title: 'Book 2' },
];

// Middleware to verify the token
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    req.user = user;
    next();
  });
};

// Login route to generate a token
app.post('/api/login', (req, res) => {
  // You should validate the user's credentials here
  // For simplicity, let's assume the user is valid
  const user = { username: 'exampleUser' };

  const token = jwt.sign(user, secretKey, { expiresIn: '1h' });

  res.json({ token });
});

// Protected routes using the authenticateToken middleware
app.get('/api/books', authenticateToken, (req, res) => {
  res.json(books);
});

app.post('/api/books', authenticateToken, (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

// Other routes...

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
