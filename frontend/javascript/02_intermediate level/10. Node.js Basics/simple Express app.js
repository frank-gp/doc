const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express app listening at http://localhost:${PORT}/`);
});
