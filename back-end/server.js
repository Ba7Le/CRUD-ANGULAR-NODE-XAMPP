const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;
const secretKey = 'your_secret_key';
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'first_db',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Connected to database');
    }
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Check if username exists
    const query = 'SELECT * FROM users WHERE username = ?';
    connection.query(query, [username], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            res.json({ success: false, message: 'username already exists' });
        } else {
            // Hash the password
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) throw err;

                // Insert user into the database
                const insertQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
                connection.query(insertQuery, [username, hash], (err) => {
                    if (err) throw err;
                    res.json({ success: true, message: 'Registration successful' });
                });
            });
        }
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check username in the database
    const query = 'SELECT * FROM users WHERE username = ?';
    connection.query(query, [username], (err, results) => {
        if (err) throw err;

        if (results.length === 0) {
            res.json({ success: false, message: 'Invalid username or password' });
        } else {
            // Compare password hashes
            const user = results[0];
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;

                if (isMatch) {
                    // Generate a JWT token
                    const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
                    res.json({ success: true, message: 'Login successful', token });
                } else {
                    res.json({ success: false, message: 'Invalid username or password' });
                }
            });
        }
    });
});

// Protected route
app.get('/dashboard', verifyToken, (req, res) => {
    res.json({ success: true, message: 'Access granted to protected route' });
});

// Token verification middleware
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.json({ success: false, message: 'No token provided' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.json({ success: false, message: 'Invalid token' });
        }

        // Attach the decoded payload to the request object
        req.decoded = decoded;
        next();
    });
}


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});