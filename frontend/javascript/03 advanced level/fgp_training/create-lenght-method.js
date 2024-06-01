// https://chat.openai.com/share/0c873041-c01c-460d-a7e3-4e0d95e5980c

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
  

//   ==========  ==========

// Extender el prototipo de Array con el método length2
Array.prototype.length2 = function () {
    let count = 0;
  
    // Recorrer el array y contar cada elemento
    for (let i in this) {
      if (this.hasOwnProperty(i)) {
        count++;
      }
    }
  
    return count;
  };
  
  // Ejemplo de uso
  let miArray2 = [1, 2, 3, 4, 5];
  let longitud2 = miArray2.length2();
  
  console.log("La longitud del array es: " + longitud2);
  

//   ==========  ==========

// Definir tu propio método length2
function length2(miArray) {
    let count = 0;
  
    // Recorrer el array y contar cada elemento
    for (let i in miArray) {
      if (miArray.hasOwnProperty(i)) {
        count++;
      }
    }
  
    return count;
  }
  
  // Ejemplo de uso
  let miArray3 = [1, 2, 3, 4, 5];
  let longitud3 = length2(miArray3);
  
  console.log("La longitud3 del array es: " + longitud3);
  