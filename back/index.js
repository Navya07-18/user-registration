const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Navya@0707', // update if you have a password
  database: 'internship_db1',
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected.');
});

app.post('/register', (req, res) => {
  const { fullName, email, mobile, dob } = req.body;
  const sql = 'INSERT INTO users (fullName, email, mobile, dob) VALUES (?, ?, ?, ?)';
  db.query(sql, [fullName, email, mobile, dob], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('User registered successfully.');
  });
});

app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
