import express from "express";
import bodyParser from "body-parser";
import { createPool } from "mysql2/promise";
import cors from "cors";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Configure CORS for your API
app.use(
  cors({
    origin: "http://127.0.0.1:5500", // Replace with the origin of your web application
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization",
  })
);

// Parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a MySQL database connection
const db = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "newletter_db",
});

// API endpoint to display all data from the database
app.get("/your-api-endpoint", async (req, res) => {
  try {
    // Retrieve all data from the database
    const [rows] = await db.query("SELECT * FROM form_data");

    // Respond with the retrieved data
    res.json(rows);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Database error" });
  }
});

// API endpoint to handle form submissions
app.post("/your-api-endpoint", async (req, res) => {
  const { name, email } = req.body;

  try {
    // Insert the form data into the database
    const [results] = await db.query("INSERT INTO form_data (name, email) VALUES (?, ?)", [name, email]);

    // Handle the database response as needed
    console.log("Data inserted:", results);

    // Respond with a success message
    res.json({ message: "Data received and saved to the database" });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Database error" });
  }
});

app.delete("/delete", async (req, res) => {
  try {
      // Delete all records from the database
      await db.query("DELETE FROM form_data");
      res.json({ message: "All records deleted from the database" });
  } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Database error" });
  }
});


// Route to render the index.html file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
