const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "fgp_db_container",
  database: "postgres_db",
  password: "admin",
  
  port: 5432, // default PostgreSQL port
});

const dropSchema = async (schema) => {
  try {
    await pool.query(`DROP SCHEMA IF EXISTS ${schema} CASCADE`);
    await pool.query(`CREATE SCHEMA ${schema}`);
    console.log(`Esquema ${schema} eliminado y recreado`);

    // Crear tabla users
    const createUsersTableQuery = `
      CREATE TABLE ${schema}.users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL
      )
    `;
    await pool.query(createUsersTableQuery);
    console.log("Tabla users creada");

    // Insertar usuario de demostración
    const insertDemoUserQuery = `
      INSERT INTO ${schema}.users (name, email, password)
      VALUES ('Demo User', 'demo@example.com', 'password123')
    `;
    await pool.query(insertDemoUserQuery);
    console.log("Usuario de demostración insertado");
  } catch (err) {
    console.error(`Error al eliminar el esquema ${schema}:`, err);
  }
};

// Ejemplo de uso
(async () => {
  await dropSchema("public");
  // Otras operaciones, como insertar datos o crear tablas
})();

app.get("/reset-schema", async (req, res) => {
  try {
    await dropSchema("public");
    res.send("Esquema reiniciado");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error del servidor");
  }
});

app.get("/", (req, res) => {
  res.send("Hello World! 1234567890");
});

// Example route to get data from the database
app.get("/data", async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "public".users');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Example route to insert data into the database
app.post("/data", async (req, res) => {
  console.log("post");
  try {
    const { name, email, password } = req.body;
    const result = await pool.query('INSERT INTO "public".users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, password]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
