import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'contact_form_db'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { email, phone, message } = req.body;
  const query = 'INSERT INTO contacts (email, phone, message) VALUES (?, ?, ?)';

  db.query(query, [email, phone, message], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving the data.');
    } else {
      res.status(200).send('Data saved successfully.');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




