const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const port = 3000;

// Set up EJS as the template engine
app.set('view engine', 'ejs');

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for session management
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

// Sample user data (in-memory for demonstration purposes)
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.user) {
    return next();
  }
  res.redirect('/');
};

// Render the login form
app.get('/', (req, res) => {
  res.render('login');
});

// Handle login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if user credentials are valid
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    // Store user information in the session
    req.session.user = user;
    res.redirect('/dashboard');
  } else {
    res.send('Invalid username or password');
  }
});

// Render the dashboard page
app.get('/dashboard', isAuthenticated, (req, res) => {
  const user = req.session.user;
  res.render('dashboard', { user });
});

// Handle logout
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
