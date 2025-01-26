// Importar el módulo 'events'
const EventEmitter = require("events");

class Emitter extends EventEmitter {}

// Crear una instancia de EventEmitter
const myE = new Emitter();

// Escuchar un evento
myE.on("foo", () => {
  console.log("An event occurred.");
});

// Emitir un evento
myE.emit("foo");
