const express = require('express');
const app1 = express();
const app2 = express();

// Configuración del primer servidor
app1.get('/', (req, res) => {
  res.send('Servidor 1: ¡Hola desde el servidor 1!');
});

app1.listen(3000, () => {
  console.log('Servidor 1 escuchando en el puerto 3000');
});

// Configuración del segundo servidor
app2.get('/', (req, res) => {
  res.send('Servidor 2: ¡Hola desde el servidor 2!');
});

app2.listen(4000, () => {
  console.log('Servidor 2 escuchando en el puerto 4000');
});
