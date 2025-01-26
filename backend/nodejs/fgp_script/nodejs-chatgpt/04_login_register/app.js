const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const session = require('express-session');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users_db'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
        if (err) {
            console.error('MySQL error:', err);
            res.send('Login failed. Please try again.');
            return;
        }

        if (results.length > 0) {
            req.session.user = username;
            res.redirect('/dashboard');
        } else {
            res.send('Login failed. Invalid credentials.');
        }
    });
});

app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.render('dashboard', { user: req.session.user });
    } else {
        res.redirect('/');
    }
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Check if the username already exists
    db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err) {
            console.error('MySQL error:', err);
            res.send('Registration failed. Please try again.');
            return;
        }

        if (results.length > 0) {
            res.send('Registration failed. Username already exists.');
        } else {
            // If the username doesn't exist, insert the new user into the database
            db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err) => {
                if (err) {
                    console.error('MySQL error:', err);
                    res.send('Registration failed. Please try again.');
                } else {
                    res.redirect('/');
                }
            });
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
