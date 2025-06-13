# Documentación de Sequelize

## 1. Introducción

Sequelize es un ORM (Object-Relational Mapping) basado en promesas para Node.js que soporta PostgreSQL, MySQL, MariaDB, SQLite y Microsoft SQL Server. Cuenta con un sólido soporte para transacciones, relaciones, carga lazy y eager, replicación de lectura y mucho más.

### Características principales:

- Soporte para múltiples bases de datos
- Migraciones y seeders
- Validaciones robustas
- Asociaciones complejas
- Pool de conexiones
- Transacciones
- Hooks/Lifecycle events
- Consultas en SQL crudo

## 2. Instalación

### 2.1 Instalación básica

```bash
# Sequelize core
npm install sequelize

# CLI para migraciones y seeders
npm install --save-dev sequelize-cli

# Drivers de base de datos (elegir uno)
npm install pg pg-hstore          # PostgreSQL
npm install mysql2                # MySQL
npm install mariadb               # MariaDB
npm install sqlite3               # SQLite
npm install tedious               # Microsoft SQL Server
```

### 2.2 Inicialización del proyecto

```bash
# Inicializar estructura de Sequelize
npx sequelize-cli init
```

Esto crea la siguiente estructura:

```
├── config/
│   └── config.json
├── migrations/
├── models/
│   └── index.js
└── seeders/
```

## 3. Configuración

### 3.1 Configuración de base de datos (config/config.json)

```json
{
  "development": {
    "username": "root",
    "password": "password",
    "database": "myapp_development",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres",
    "logging": console.log
  },
  "test": {
    "username": "root",
    "password": "password",
    "database": "myapp_test",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres",
    "logging": false
  },
  "production": {
    "username": "root",
    "password": "password",
    "database": "myapp_production",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres",
    "logging": false,
    "pool": {
      "max": 5,
      "min": 0,
      "acquire": 30000,
      "idle": 10000
    }
  }
}
```

### 3.2 Configuración con variables de entorno

```javascript
// config/config.js
require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: console.log,
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
```

### 3.3 Conexión básica

```javascript
const { Sequelize } = require("sequelize");

// Opción 1: Pasar una cadena de conexión
const sequelize = new Sequelize("postgres://user:pass@example.com:5432/dbname");

// Opción 2: Pasar parámetros por separado
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "postgres",
});

// Probar la conexión
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida correctamente.");
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
}
```

## 4. Modelos

### 4.1 Definición básica de modelo

```javascript
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "User",
  {
    // Atributos del modelo
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 0,
        max: 120,
      },
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    // Opciones del modelo
    tableName: "users",
    timestamps: true,
    paranoid: true, // Soft delete
    underscored: true, // snake_case para columnas
  }
);
```

### 4.2 Tipos de datos

```javascript
const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING, // VARCHAR(255)
  description: DataTypes.TEXT, // TEXT
  price: DataTypes.DECIMAL(10, 2), // DECIMAL
  stock: DataTypes.INTEGER, // INTEGER
  isAvailable: DataTypes.BOOLEAN, // BOOLEAN
  rating: DataTypes.FLOAT, // FLOAT
  tags: DataTypes.JSON, // JSON (PostgreSQL, MySQL)
  metadata: DataTypes.JSONB, // JSONB (PostgreSQL)
  image: DataTypes.BLOB, // BLOB
  publishedAt: DataTypes.DATE, // DATETIME/TIMESTAMP
  category: DataTypes.ENUM("electronics", "clothing", "books"),
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
});
```

### 4.3 Validaciones

```javascript
const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
      notEmpty: true,
      len: [1, 255],
    },
  },
  age: {
    type: DataTypes.INTEGER,
    validate: {
      min: 0,
      max: 120,
      isInt: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    validate: {
      len: [8, 100],
      is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/i, // Al menos una minúscula, mayúscula y número
    },
  },
  website: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true,
    },
  },
  phone: {
    type: DataTypes.STRING,
    validate: {
      is: /^[\+]?[1-9][\d]{0,15}$/i,
    },
  },
});
```

### 4.4 Validaciones personalizadas

```javascript
const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: true,
      isUniqueUsername: async function (value) {
        const user = await User.findOne({ where: { username: value } });
        if (user) {
          throw new Error("El nombre de usuario ya existe");
        }
      },
    },
  },
  birthDate: {
    type: DataTypes.DATE,
    validate: {
      isDate: true,
      isBefore: new Date().toISOString(), // No puede ser fecha futura
      isAdult: function (value) {
        const age = new Date().getFullYear() - new Date(value).getFullYear();
        if (age < 18) {
          throw new Error("Debe ser mayor de edad");
        }
      },
    },
  },
});
```

## 5. Asociaciones (Relaciones)

### 5.1 One-to-One (Uno a Uno)

```javascript
// Usuario tiene un perfil
User.hasOne(Profile, {
  foreignKey: "userId",
  as: "profile",
});

Profile.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});
```

### 5.2 One-to-Many (Uno a Muchos)

```javascript
// Un usuario tiene muchos posts
User.hasMany(Post, {
  foreignKey: "authorId",
  as: "posts",
});

Post.belongsTo(User, {
  foreignKey: "authorId",
  as: "author",
});
```

### 5.3 Many-to-Many (Muchos a Muchos)

```javascript
// Usuarios y roles (muchos a muchos)
User.belongsToMany(Role, {
  through: "UserRoles",
  foreignKey: "userId",
  otherKey: "roleId",
  as: "roles",
});

Role.belongsToMany(User, {
  through: "UserRoles",
  foreignKey: "roleId",
  otherKey: "userId",
  as: "users",
});
```

### 5.4 Many-to-Many con atributos adicionales

```javascript
// Tabla intermedia con campos adicionales
const UserRole = sequelize.define("UserRole", {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Users",
      key: "id",
    },
  },
  roleId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Roles",
      key: "id",
    },
  },
  assignedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  assignedBy: DataTypes.STRING,
});

User.belongsToMany(Role, {
  through: UserRole,
  foreignKey: "userId",
  as: "roles",
});

Role.belongsToMany(User, {
  through: UserRole,
  foreignKey: "roleId",
  as: "users",
});
```

### 5.5 Self-associations (Auto-asociaciones)

```javascript
// Categorías con subcategorías
Category.hasMany(Category, {
  as: "children",
  foreignKey: "parentId",
});

Category.belongsTo(Category, {
  as: "parent",
  foreignKey: "parentId",
});
```

## 6. Consultas (Queries)

### 6.1 Operaciones CRUD básicas

```javascript
// CREATE
const user = await User.create({
  firstName: "Juan",
  lastName: "Pérez",
  email: "juan@example.com",
  age: 30,
});

// READ
const users = await User.findAll();
const user = await User.findByPk(1);
const user = await User.findOne({ where: { email: "juan@example.com" } });

// UPDATE
await User.update({ firstName: "Carlos" }, { where: { id: 1 } });

// DELETE
await User.destroy({ where: { id: 1 } });
```

### 6.2 Métodos de búsqueda

```javascript
// findAll - Buscar todos los registros
const users = await User.findAll({
  where: { isActive: true },
  order: [["createdAt", "DESC"]],
  limit: 10,
  offset: 20,
});

// findByPk - Buscar por clave primaria
const user = await User.findByPk(1);

// findOne - Buscar un registro
const user = await User.findOne({
  where: { email: "juan@example.com" },
});

// findOrCreate - Buscar o crear
const [user, created] = await User.findOrCreate({
  where: { email: "juan@example.com" },
  defaults: { firstName: "Juan", lastName: "Pérez" },
});

// findAndCountAll - Buscar y contar
const { count, rows } = await User.findAndCountAll({
  where: { isActive: true },
  limit: 10,
  offset: 0,
});
```

### 6.3 Operadores de consulta

```javascript
const { Op } = require("sequelize");

// Operadores de comparación
const users = await User.findAll({
  where: {
    age: {
      [Op.gte]: 18, // Mayor o igual
      [Op.lt]: 65, // Menor que
    },
    firstName: {
      [Op.like]: "%Juan%", // LIKE
    },
    email: {
      [Op.notNull]: true, // NOT NULL
    },
    id: {
      [Op.in]: [1, 2, 3, 4], // IN
    },
  },
});

// Operadores lógicos
const users = await User.findAll({
  where: {
    [Op.or]: [{ age: { [Op.lt]: 18 } }, { age: { [Op.gt]: 65 } }],
    [Op.and]: [{ isActive: true }, { email: { [Op.like]: "%@company.com" } }],
  },
});

// Operadores de rango
const users = await User.findAll({
  where: {
    createdAt: {
      [Op.between]: ["2024-01-01", "2024-12-31"],
    },
    age: {
      [Op.notBetween]: [13, 17],
    },
  },
});
```

### 6.4 Consultas con asociaciones

```javascript
// Include básico
const users = await User.findAll({
  include: [
    {
      model: Profile,
      as: "profile",
    },
    {
      model: Post,
      as: "posts",
    },
  ],
});

// Include con filtros
const users = await User.findAll({
  include: [
    {
      model: Post,
      as: "posts",
      where: { published: true },
      required: false, // LEFT JOIN en lugar de INNER JOIN
    },
  ],
});

// Include anidado
const users = await User.findAll({
  include: [
    {
      model: Post,
      as: "posts",
      include: [
        {
          model: Comment,
          as: "comments",
          include: [
            {
              model: User,
              as: "author",
            },
          ],
        },
      ],
    },
  ],
});
```

### 6.5 Agregaciones

```javascript
// Count
const userCount = await User.count();
const activeUserCount = await User.count({
  where: { isActive: true },
});

// Sum, Max, Min, Average
const stats = await User.findAll({
  attributes: [
    [sequelize.fn("COUNT", sequelize.col("id")), "totalUsers"],
    [sequelize.fn("AVG", sequelize.col("age")), "averageAge"],
    [sequelize.fn("MAX", sequelize.col("age")), "maxAge"],
    [sequelize.fn("MIN", sequelize.col("age")), "minAge"],
  ],
});

// Group By
const ageGroups = await User.findAll({
  attributes: ["age", [sequelize.fn("COUNT", sequelize.col("id")), "count"]],
  group: ["age"],
  order: [["age", "ASC"]],
});
```

### 6.6 Consultas en SQL crudo

```javascript
// Query básico
const users = await sequelize.query("SELECT * FROM users WHERE age > :age", {
  replacements: { age: 18 },
  type: QueryTypes.SELECT,
});

// Query con modelo
const users = await sequelize.query("SELECT * FROM users WHERE age > ?", {
  replacements: [18],
  model: User,
  mapToModel: true,
});
```

## 7. Migraciones

### 7.1 Crear migración

```bash
# Crear una migración
npx sequelize-cli migration:generate --name create-users-table
```

### 7.2 Ejemplo de migración

```javascript
// migrations/20240101000000-create-users-table.js
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      age: {
        type: Sequelize.INTEGER,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    // Añadir índices
    await queryInterface.addIndex("Users", ["email"]);
    await queryInterface.addIndex("Users", ["firstName", "lastName"]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
```

### 7.3 Tipos de migraciones

```javascript
// Añadir columna
await queryInterface.addColumn("Users", "phoneNumber", {
  type: Sequelize.STRING,
  allowNull: true,
});

// Modificar columna
await queryInterface.changeColumn("Users", "age", {
  type: Sequelize.INTEGER,
  allowNull: false,
});

// Eliminar columna
await queryInterface.removeColumn("Users", "phoneNumber");

// Añadir índice
await queryInterface.addIndex("Users", ["email"], {
  unique: true,
  name: "users_email_unique",
});

// Eliminar índice
await queryInterface.removeIndex("Users", "users_email_unique");

// Crear tabla de asociación
await queryInterface.createTable("UserRoles", {
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: "Users",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  roleId: {
    type: Sequelize.INTEGER,
    references: {
      model: "Roles",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
});
```

### 7.4 Ejecutar migraciones

```bash
# Ejecutar migraciones pendientes
npx sequelize-cli db:migrate

# Deshacer la última migración
npx sequelize-cli db:migrate:undo

# Deshacer todas las migraciones
npx sequelize-cli db:migrate:undo:all

# Ver estado de migraciones
npx sequelize-cli db:migrate:status
```

## 8. Seeders

### 8.1 Crear seeder

```bash
npx sequelize-cli seed:generate --name demo-users
```

### 8.2 Ejemplo de seeder

```javascript
// seeders/20240101000000-demo-users.js
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        age: 30,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane@example.com",
        age: 25,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
```

### 8.3 Ejecutar seeders

```bash
# Ejecutar todos los seeders
npx sequelize-cli db:seed:all

# Ejecutar un seeder específico
npx sequelize-cli db:seed --seed 20240101000000-demo-users.js

# Deshacer todos los seeders
npx sequelize-cli db:seed:undo:all

# Deshacer seeder específico
npx sequelize-cli db:seed:undo --seed 20240101000000-demo-users.js
```

## 9. Transacciones

### 9.1 Transacciones automáticas

```javascript
// Sequelize maneja automáticamente la transacción
try {
  const result = await sequelize.transaction(async (t) => {
    const user = await User.create(
      {
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
      },
      { transaction: t }
    );

    const profile = await Profile.create(
      {
        bio: "Software Developer",
        userId: user.id,
      },
      { transaction: t }
    );

    return { user, profile };
  });

  console.log("Transacción completada:", result);
} catch (error) {
  console.error("Error en la transacción:", error);
}
```

### 9.2 Transacciones manuales

```javascript
const t = await sequelize.transaction();

try {
  const user = await User.create(
    {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
    },
    { transaction: t }
  );

  const profile = await Profile.create(
    {
      bio: "Software Developer",
      userId: user.id,
    },
    { transaction: t }
  );

  await t.commit();
  console.log("Transacción completada");
} catch (error) {
  await t.rollback();
  console.error("Error, transacción revertida:", error);
}
```

### 9.3 Niveles de aislamiento

```javascript
const { Transaction } = require("sequelize");

const result = await sequelize.transaction(
  {
    isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE,
  },
  async (t) => {
    // Operaciones de la transacción
  }
);
```

## 10. Hooks (Lifecycle Events)

### 10.1 Hooks de instancia

```javascript
const User = sequelize.define("User", {
  firstName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});

// Before hooks
User.beforeValidate((user, options) => {
  user.email = user.email.toLowerCase();
});

User.beforeCreate(async (user, options) => {
  // Hash password antes de crear
  const bcrypt = require("bcrypt");
  user.password = await bcrypt.hash(user.password, 10);
});

User.beforeUpdate(async (user, options) => {
  if (user.changed("password")) {
    const bcrypt = require("bcrypt");
    user.password = await bcrypt.hash(user.password, 10);
  }
});

// After hooks
User.afterCreate((user, options) => {
  console.log("Usuario creado:", user.email);
});

User.afterUpdate((user, options) => {
  console.log("Usuario actualizado:", user.email);
});
```

### 10.2 Hooks globales

```javascript
// Hook para todos los modelos
sequelize.addHook("beforeCreate", (instance, options) => {
  console.log("Creando instancia de:", instance.constructor.name);
});

sequelize.addHook("afterConnect", (connection) => {
  console.log("Conexión establecida");
});
```

### 10.3 Hooks de validación

```javascript
User.beforeValidate((user, options) => {
  // Limpiar y formatear datos
  if (user.email) {
    user.email = user.email.trim().toLowerCase();
  }
  if (user.firstName) {
    user.firstName = user.firstName.trim();
  }
});

User.afterValidate((user, options) => {
  // Validaciones adicionales después de las validaciones del modelo
  if (user.age && user.age < 0) {
    throw new Error("La edad no puede ser negativa");
  }
});
```

## 11. Scopes

### 11.1 Scopes predefinidos

```javascript
const User = sequelize.define(
  "User",
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    age: DataTypes.INTEGER,
  },
  {
    scopes: {
      // Scope por defecto
      defaultScope: {
        attributes: { exclude: ["password"] },
        where: { isActive: true },
      },

      // Scopes personalizados
      adults: {
        where: { age: { [Op.gte]: 18 } },
      },

      active: {
        where: { isActive: true },
      },

      withEmail: {
        where: { email: { [Op.not]: null } },
      },

      // Scope con parámetros
      olderThan: (age) => ({
        where: { age: { [Op.gt]: age } },
      }),
    },
  }
);

// Uso de scopes
const adults = await User.scope("adults").findAll();
const activeAdults = await User.scope(["active", "adults"]).findAll();
const over30 = await User.scope({ method: ["olderThan", 30] }).findAll();

// Sin scope por defecto
const allUsers = await User.unscoped().findAll();
```

## 12. Configuración avanzada

### 12.1 Pool de conexiones

```javascript
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5, // Máximo número de conexiones
    min: 0, // Mínimo número de conexiones
    acquire: 30000, // Tiempo máximo para obtener conexión
    idle: 10000, // Tiempo máximo que una conexión puede estar inactiva
  },
});
```

### 12.2 Logging personalizado

```javascript
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "postgres",
  logging: (msg) => {
    // Log personalizado
    console.log(`[${new Date().toISOString()}] ${msg}`);
  },

  // O desactivar logging
  logging: false,

  // Solo logs de error
  logging: console.error,

  // Logging con winston
  logging: (msg) => logger.info(msg),
});
```

### 12.3 Timezone y formateo

```javascript
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "postgres",
  timezone: "-05:00", // Timezone específico

  dialectOptions: {
    dateStrings: true,
    typeCast: true,
  },

  define: {
    underscored: true, // snake_case para columnas
    freezeTableName: true, // No pluralizar nombres de tabla
    timestamps: true, // createdAt y updatedAt
    paranoid: true, // Soft delete (deletedAt)
  },
});
```

## 13. Validaciones avanzadas

### 13.1 Validaciones a nivel de modelo

```javascript
const User = sequelize.define(
  "User",
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    confirmPassword: {
      type: DataTypes.VIRTUAL, // No se guarda en BD
      allowNull: false,
    },
  },
  {
    validate: {
      // Validación que involucra múltiples campos
      passwordsMatch() {
        if (this.password !== this.confirmPassword) {
          throw new Error("Las contraseñas no coinciden");
        }
      },

      bothNamesOrNone() {
        if ((this.firstName && !this.lastName) || (!this.firstName && this.lastName)) {
          throw new Error("Debe proporcionar ambos nombres o ninguno");
        }
      },
    },
  }
);
```

### 13.2 Validaciones asíncronas

```javascript
const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    validate: {
      async isUniqueEmail(value) {
        const user = await User.findOne({ where: { email: value } });
        if (user && user.id !== this.id) {
          throw new Error("El email ya está en uso");
        }
      },
    },
  },
});
```

## 14. Performance y optimización

### 14.1 Índices

```javascript
// En la definición del modelo
const User = sequelize.define(
  "User",
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  {
    indexes: [
      // Índice único
      {
        unique: true,
        fields: ["email"],
      },
      // Índice compuesto
      {
        fields: ["firstName", "lastName"],
      },
      // Índice parcial
      {
        fields: ["email"],
        where: { isActive: true },
      },
    ],
  }
);
```

### 14.2 Eager loading optimizado

```javascript
// Incluir solo campos necesarios
const users = await User.findAll({
  attributes: ["id", "firstName", "email"],
  include: [
    {
      model: Profile,
      as: "profile",
      attributes: ["bio", "avatar"],
    },
  ],
});

// Separar consultas para evitar cartesian product
const users = await User.findAll({
  include: [
    {
      model: Post,
      as: "posts",
      separate: true, // Consulta separada
      limit: 5,
    },
  ],
});
```

### 14
