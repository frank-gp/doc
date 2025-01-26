const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const session = require('express-session');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configure express-session
app.use(session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    // Check the user's credentials here
    const { username, password } = req.body;

    if (username === 'fgp555' && password === 'Electron5.pe') {
        req.session.user = username;
        res.redirect('/dashboard');
    } else {
        res.send('Login failed. Invalid credentials.');
    }
});

app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.render('dashboard', { user: req.session.user });
    } else {
        res.redirect('/');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
