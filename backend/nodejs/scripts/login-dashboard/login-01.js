const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Set up EJS as the template engine
app.set('view engine', 'ejs');

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Sample user data (in-memory for demonstration purposes)
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

// Render the login form
app.get('/', (req, res) => {
  res.render('login');
});

// Handle form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if user credentials are valid
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    res.send(`Welcome, ${username}!`);
  } else {
    res.send('Invalid username or password');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
