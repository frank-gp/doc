const { DataSource } = require("typeorm");
const path = require("path");
const fs = require("fs");

// Función para cargar entidades dinámicamente
const loadEntities = () => {
  //   const entitiesPath = path.join(__dirname, "/../entities"); // Ruta de la carpeta de entidades
  const entitiesPath = path.join(__dirname); // Ruta de la carpeta de entidades
  return fs
    .readdirSync(entitiesPath) // Lee los archivos en la carpeta
    .filter((file) => file.endsWith(".js") || file.endsWith(".ts")) // Filtra solo los archivos .js y .ts
    .map((file) => require(path.join(entitiesPath, file))); // Importa cada entidad
};

const dataSource = new DataSource({
  type: "mysql", // o 'mariadb'
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "my_db",
  synchronize: true, // ⚠️ Solo en desarrollo
  entities: loadEntities(), // Carga las entidades dinámicamente
});

async function syncDatabase() {
  try {
    await dataSource.initialize();
    console.log("✅ Conectado a la base de datos.");
    
    await dataSource.dropDatabase(); // 🔥 Borra todas las tablas
    console.log('🗑️ ¡Base de datos eliminada!');

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
