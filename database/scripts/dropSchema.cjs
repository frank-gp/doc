// node --env-file=.env dropSchema.cjs

const { DataSource } = require("typeorm");

console.log("DB_PASSWORD", process.env.DB_PASSWORD);

// Configura la conexión a la base de datos
const dataSource = new DataSource({
  type: "mysql", // o 'mariadb'
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE,
  synchronize: true,
  dropSchema: true,
});

async function dropSchema() {
  try {
    await dataSource.initialize();
    console.log("✅ Conectado a la base de datos.");

    await dataSource.dropDatabase(); // 🔥 Borra todas las tablas
    console.log("🗑️ ¡Base de datos eliminada!");

    await dataSource.destroy();
    console.log("🔌 Conexión cerrada.");
  } catch (error) {
    console.error("❌ Error al eliminar la base de datos:", error);
  }
}

dropSchema();
