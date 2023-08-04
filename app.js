const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
require('dotenv').config();



const app = express();
const port = 3000;

// Replace with your PostgreSQL connection details
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
app.use(bodyParser.json());
app.use(express.static('public')); // This line serves static files from the 'public' folder



// Route to get a specific user by ID

// Route to get all users
app.get('/api/users', (req, res) => {
  pool.query('SELECT * FROM users', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result.rows);
    }
  });
});

// Route to create a new user
app.post('/api/users', (req, res) => {
  const { username, email, age } = req.body;
  pool.query(
    'INSERT INTO users (username, email, age) VALUES ($1, $2, $3) RETURNING *',
    [username, email, age],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(result.rows[0]);
      }
    }
  );
});



// Route to update a user by ID
app.put('/api/users/:id', (req, res) => {
  const id = req.params.id;
  const { username, email, age } = req.body;
  pool.query(
    'UPDATE users SET username = $1, email = $2, age = $3 WHERE id = $4 RETURNING *',
    [username, email, age, id],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else if (result.rows.length === 0) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.json(result.rows[0]);
      }
    }
  );
});

// Route to delete a user by ID
app.delete('/api/users/:id', (req, res) => {
  const id = req.params.id;
  pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else if (result.rows.length === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json({ message: 'User deleted successfully' });
    }
  });
});

app.use((req, res, next) => {
  console.log('Received request:', req.method, req.url, req.body);
  next();
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
