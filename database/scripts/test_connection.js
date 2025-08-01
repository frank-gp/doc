// node --env-file=.env test_connection.js

require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Error al conectar a la base de datos:", err.message);
    process.exit(1);
  }
  console.log("✅ Conexión exitosa a la base de datos MySQL");

  connection.query("SELECT NOW() AS currentTime", (err, results) => {
    if (err) {
      console.error("❌ Error en la consulta:", err.message);
    } else {
      console.log("🕒 Hora actual desde el servidor:", results[0].currentTime);
    }
    connection.end();
  });
});
