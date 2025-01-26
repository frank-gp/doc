const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'fgpooswu_nodejs',
  password: '1234!@#$asdfASDF',
  database: 'fgpooswu_nodejs',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (e.g., CSS, client-side JavaScript)
app.use(express.static('public'));

app.get('/', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) throw err;
    res.render('index.ejs', { tasks: results });
  });
});

app.post('/addTask', (req, res) => {
  const task = req.body.task;
  if (task) {
    const insertQuery = 'INSERT INTO tasks (task) VALUES (?)';
    db.query(insertQuery, [task], (err, result) => {
      if (err) throw err;
      res.redirect('/');
    });
  } else {
    res.redirect('/');
  }
});

app.post('/completeTask', (req, res) => {
  const taskId = req.body.id;
  if (taskId) {
    const updateQuery = 'UPDATE tasks SET completed = true WHERE id = ?';
    db.query(updateQuery, [taskId], (err, result) => {
      if (err) throw err;
      res.redirect('/');
    });
  } else {
    res.redirect('/');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
