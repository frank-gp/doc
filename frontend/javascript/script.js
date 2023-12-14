// Definir el getter length2 en el prototipo de Array
Object.defineProperty(Array.prototype, 'length2', {
    get: function() {
      let count = 0;
  
      // Recorrer el array y contar cada elemento
      for (let i in this) {
        if (this.hasOwnProperty(i)) {
          count++;
        }
      }
  
      return count;
    }
  });
  
  // Ejemplo de uso
  let miArray = [1, 2, 3, 4, 5];
  let longitud = miArray.length2;
  
  console.log("La longitud del array es: " + longitud);
  