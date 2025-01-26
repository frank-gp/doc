const { DataSource } = require("typeorm");
const User = require("./user.entity"); // Importa la entidad correctamente

const dataSource = new DataSource({
  type: "mysql", // o 'mariadb'
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "my_db",
  synchronize: true, // Habilita la sincronización para que cree las tablas
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
