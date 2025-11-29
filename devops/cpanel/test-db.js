const mysql = require("mysql2");

// Configuración de conexión (usando el túnel en el puerto local 5522)
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 5522,
  user: "etramztr_tutorial_db_user",
  password: "etramztr_tutorial_db_user_password",
  database: "etramztr_tutorial_db_name",
});

// Conectar y probar
connection.connect((err) => {
  if (err) {
    return console.error("Error conectando a la DB:", err.message);
  }
  console.log("Conectado a la base de datos!");

  // Ejecutar una consulta de prueba
  connection.query("SELECT version() AS version", (err, results) => {
    if (err) throw err;
    console.log("Versión del servidor:", results[0].version);

    // Cerrar la conexión
    connection.end();
  });
});
