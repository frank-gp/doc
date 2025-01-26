const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

// Configure EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Configure MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'blog_db',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database as ID ' + db.threadId);
});

// Configure middleware to parse JSON data in POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route for creating a new blog post
app.post('/create-post', (req, res) => {
  const { title, content } = req.body;

  // Insert the post data into the database
  const query = 'INSERT INTO posts (title, content) VALUES (?, ?)';
  db.query(query, [title, content], (err, results) => {
    if (err) {
      console.error('Error creating a new post: ' + err);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      res.redirect('/'); // Redirect to the home page
    }
  });
});

// Define a route to display all blog posts
app.get('/', (req, res) => {
  // Retrieve all posts from the database
  db.query('SELECT * FROM posts', (err, results) => {
    if (err) {
      console.error('Error fetching posts: ' + err);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      res.render('post', { posts: results }); // Render the EJS template with the posts data
    }
  });
});

// Start the Express server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
