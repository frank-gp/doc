const express = require('express');
const path = require('path');

const app = express();
const puerto = 3001;

// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use('/public', express.static(path.join(__dirname, 'public')));

// Ruta principal que muestra un mensaje de bienvenida
app.get('/', (req, res) => {
  res.send('Bienvenido a mi servidor estático');
});

// Iniciar el servidor
app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});
