```sh

├── src/
│ ├── config/
│ │ └── database.js
│ ├── routes/
│ │ ├── user.routes.js
│ │ └── product.routes.js
│ ├── controllers/
│ │ ├── user.controller.js
│ │ └── product.controller.js
│ ├── services/
│ │ ├── user.service.js
│ │ └── product.service.js
│ ├── repositories/
│ │ ├── user.repository.js
│ │ └── product.repository.js
│ ├── dtos/
│ │ ├── user.dto.js
│ │ └── product.dto.js
│ ├── models/
│ │ ├── user.model.js
│ │ └── product.model.js
│ ├── middlewares/
│ │ └── auth.middleware.js
│ ├── app.js
│ └── server.js
├── .env.example
├── .gitignore
├── package.json
├── README.md

// Contenido ejemplo para algunos archivos:

// .gitignore
node_modules/
dist/
.env

// .env.example
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=app_db
JWT_SECRET=your_jwt_secret
PORT=3000

// src/config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
host: process.env.DB_HOST,
dialect: 'mariadb',
port: process.env.DB_PORT,
});

module.exports = sequelize;

// src/app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

module.exports = app;

// src/server.js
const app = require('./app');
const sequelize = require('./config/database');

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
}).catch(err => {
console.error('Unable to connect to the database:', err);
});
```
