// node --env-file=.env schema_run.js

require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { DataSource } = require("typeorm");

const sqlFilePath = path.resolve(__dirname, "schema.sql");

const dataSource = new DataSource({
  type: "mysql", // o 'mariadb'
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "3306"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE,
  synchronize: true,
  dropSchema: true,
});

async function loadAndRunSQL() {
  try {
    await dataSource.initialize();
    console.log("✅ Conectado a la base de datos.");

    const queryRunner = dataSource.createQueryRunner();
    const rawSQL = fs.readFileSync(sqlFilePath, "utf8");

    const statements = rawSQL
      .split(";")
      .map((stmt) => (typeof stmt === "string" ? stmt.trim() : ""))
      .filter((stmt) => stmt.length > 0);

    for (const statement of statements) {
      console.log(`➡️ Ejecutando: ${statement.substring(0, 60)}...`);
      await queryRunner.query(statement);
    }

    console.log("✅ Todas las sentencias SQL fueron ejecutadas.");
    await queryRunner.release();
    await dataSource.destroy();
    console.log("🔌 Conexión cerrada.");
  } catch (error) {
    console.error("❌ Error al ejecutar el archivo SQL:", error);
  }
}

loadAndRunSQL();
