import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

// Create MySQL connection
const db = mysql.createConnection({
    host: "127.0.0.1", // Use the correct host address
    port: 3307, // Specify the port separately
    user: "root",
    password: "",
    database: "crud"
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1); // Exit process with failure
    }
    console.log('Connected to the MySQL database.');
});

const app = express();

// Middleware setup
app.use(cors()); // CORS middleware should be used before defining routes

// Define routes
app.get('/', (req, res) => {
    const sql = "SELECT * FROM student"; // SQL query to select all students
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: "Error inside server" });
        }
        return res.json(result); // Send the result as JSON
    });
});

// Start server
app.listen(8080, () => {
    console.log('Server running on port 8080');
});
