const express = require("express");
const { Pool } = require("pg");

const app = express();

// Configurar la conexión a PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "172.20.0.2",
  database: "postgres",
  password: "admin",
  port: 5432, // Puerto predeterminado de PostgreSQL
});

pool
  .connect()
  .then(() => console.log("Conectado a PostgreSQL"))
  .catch((err) => console.error("Error de conexión", err));

// Ruta de prueba para obtener datos de la base de datos
app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()"); // Consulta de prueba
    res.json({ message: "Conexión exitosa", time: result.rows[0].now });
  } catch (error) {
    console.error("Error ejecutando la consulta", error);
    res.status(500).send("Error interno del servidor");
  }
});

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
