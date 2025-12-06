/* 
npm init -y
npm install express mysql2

curl http://localhost:3000/users

 */

// crud-api.js
const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
app.use(express.json());

// Configuración MySQL
const dbConfig = {
  host: "database-1.c5agq48gmlo5.us-east-2.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "my_master_password",
  database: "test_db",
};

// Middleware para conectar a la DB
async function getConnection(req, res, next) {
  try {
    req.db = await mysql.createConnection(dbConfig);
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Crear tabla si no existe al inicio
(async () => {
  const conn = await mysql.createConnection(dbConfig);
  await conn.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100) UNIQUE
    )
  `);
  await conn.end();
  console.log("Tabla 'users' lista.");
})();

// Routes

// Create
app.post("/users", getConnection, async (req, res) => {
  const { name, email } = req.body;
  try {
    const [result] = await req.db.execute("INSERT INTO users (name, email) VALUES (?, ?)", [name, email]);
    res.json({ id: result.insertId, name, email });
  } catch (err) {
    res.status(400).json({ error: err.message });
  } finally {
    await req.db.end();
  }
});

// Read all
app.get("/users", getConnection, async (req, res) => {
  try {
    const [rows] = await req.db.execute("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    await req.db.end();
  }
});

// Read one
app.get("/users/:id", getConnection, async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await req.db.execute("SELECT * FROM users WHERE id = ?", [id]);
    if (rows.length === 0) return res.status(404).json({ error: "User not found" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    await req.db.end();
  }
});

// Update
app.put("/users/:id", getConnection, async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const [result] = await req.db.execute("UPDATE users SET name = ?, email = ? WHERE id = ?", [name, email, id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: "User not found" });
    res.json({ id, name, email });
  } catch (err) {
    res.status(400).json({ error: err.message });
  } finally {
    await req.db.end();
  }
});

// Delete
app.delete("/users/:id", getConnection, async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await req.db.execute("DELETE FROM users WHERE id = ?", [id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    await req.db.end();
  }
});

// Iniciar servidor
app.listen(3000, () => {
  console.log(`API escuchando en http://localhost:3000`);
});
