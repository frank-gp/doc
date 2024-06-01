const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Define your routes here
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/post/:id', (req, res) => {
    const postId = req.params.id;
    // Fetch and display the blog post with the specified ID
    res.render('post', { postId });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
