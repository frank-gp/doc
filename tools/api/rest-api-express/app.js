// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { itemsRouter } = require('./routes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/items', itemsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
