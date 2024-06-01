const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Create a simple in-memory array to store tasks
const tasks = [];

app.get('/', (req, res) => {
  res.render('index', { tasks });
});

app.post('/addTask', (req, res) => {
  const { task } = req.body;
  tasks.push(task);
  res.redirect('/');
});

app.get('/deleteTask/:index', (req, res) => {
  const { index } = req.params;
  tasks.splice(index, 1);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
