// devops\aws\RDS\test-db-rds.js
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "database-1.c5agq48gmlo5.us-east-2.rds.amazonaws.com",
  port: 3306,
  database: "test_db",
  user: "admin",
  password: "my_master_password",
});

connection.connect((err) => {
  if (err) {
    return console.error("Error conectando a la DB:", err.message);
  }
  console.log("Conectado a la base de datos!");

  connection.query("SELECT version() AS version", (err, results) => {
    if (err) throw err;
    console.log("Versión del servidor:", results[0].version);
    connection.end();
  });
});

/* 
  database: "aws_rds_tutorial_db_name",
  user: "aws_rds_tutorial_db_user",
  password: "aws_rds_tutorial_db_user_password", 
*/
