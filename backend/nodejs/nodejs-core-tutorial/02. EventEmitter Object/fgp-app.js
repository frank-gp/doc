// Importar el módulo 'events'
const EventEmitter = require('events');

// Crear una instancia de EventEmitter
const miEmitter = new EventEmitter();

// Escuchar un evento
miEmitter.on('miEvento', (parametro) => {
  console.log('Evento miEvento:', parametro);
});

// Emitir un evento
miEmitter.emit('miEvento', 'Información adicional');
