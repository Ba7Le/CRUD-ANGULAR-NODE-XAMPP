const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

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

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// GET all items
app.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', (error, results) => {
        if (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ error: 'Error fetching users' });
        } else {
            res.status(200).json(results);
        }
    });
});
// POST a new item
app.post('/users', (req, res) => {
    console.log('====req', req.body)
    const { username, password, role } = req.body;
    connection.query(
        'INSERT INTO users (username, password, role) VALUES (?, ?, ?)',
        [username, password, role],
        (error, results) => {
            if (error) {
                console.error('Error creating user:', error);
                res.status(500).json({ error: 'Error creating item' });
            } else {
                res.status(201).json({ message: 'user created successfully' });
            }
        }
    );
});

// GET a specific item
app.get('/items/:id', (req, res) => {
    const itemId = req.params.id;
    connection.query(
        'SELECT * FROM items WHERE id = ?',
        [itemId],
        (error, results) => {
            if (error) {
                console.error('Error fetching item:', error);
                res.status(500).json({ error: 'Error fetching item' });
            } else if (results.length === 0) {
                res.status(404).json({ message: 'Item not found' });
            } else {
                res.status(200).json(results[0]);
            }
        }
    );
});

app.delete('/users/:id', (req, res) => {
    const itemId = req.params.id;
    console.log("==== id user", req.params.id)
    connection.query(
        'DELETE FROM users WHERE id = ?',
        [itemId],
        (error, results) => {
            if (error) {
                console.error('Error deleting user:', error);
                res.status(500).json({ error: 'Error deleting user' });
            } else if (results.affectedRows === 0) {
                res.status(404).json({ message: 'user not found' });
            } else {
                res.status(200).json({ message: 'user deleted successfully' });
            }
        }
    );
});

// PUT (update) an existing item
app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const { username, password, role } = req.body;
    connection.query(
        'UPDATE users SET username = ?, password = ?, role = ? WHERE id = ?',
        [username, password, role, id],
        (error, results) => {
            if (error) {
                console.error('Error updating item:', error);
                res.status(500).json({ error: 'Error updating item' });
            } else if (results.affectedRows === 0) {
                res.status(404).json({ message: 'Item not found' });
            } else {
                res.status(200).json({ message: 'Item updated successfully' });
            }
        }
    );
});

app.listen(3000, () => {
    console.log('Server HungDaiHiep started on port 3000');
});