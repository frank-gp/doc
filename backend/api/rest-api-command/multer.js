const express = require('express');
const multer = require('multer');

const app = express();

// Configurar multer para manejar la carga de archivos
const upload = multer({ dest: 'uploads/' }); // La carpeta 'uploads' debe existir

// Ruta para manejar la carga de archivos
app.post('/archivo', upload.single('archivo'), (req, res) => {
  console.log('Archivo recibido:', req.file);
  res.send('Archivo recibido correctamente.');
});

// Puerto en el que se ejecutará el servidor
const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
