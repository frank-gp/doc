// node --env-file=.env user.synchronize.js

const { DataSource } = require("typeorm");
const User = require("./user.entity"); // Importa la entidad correctamente

const dataSource = new DataSource({
  type: "mysql", // o 'mariadb'
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE,
  synchronize: true,
  dropSchema: true,
  entities: [User], // Agrega la entidad aquí
});

async function syncDatabase() {
  try {
    await dataSource.initialize();
    console.log("✅ Conectado a la base de datos.");

    console.log("🔄 Sincronizando la base de datos...");
    await dataSource.synchronize(); // Crea la tabla si no existe
    console.log("✅ ¡Base de datos sincronizada!");

    await dataSource.destroy();
    console.log("🔌 Conexión cerrada.");
  } catch (error) {
    console.error("❌ Error al sincronizar la base de datos:", error);
  }
}

syncDatabase();
