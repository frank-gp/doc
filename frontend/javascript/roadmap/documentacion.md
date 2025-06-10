# Documentación Completa de JavaScript

## Tabla de Contenido
1. [Introducción](#introducción)
2. [Fundamentos Básicos](#fundamentos-básicos)
3. [Variables y Tipos de Datos](#variables-y-tipos-de-datos)
4. [Operadores](#operadores)
5. [Estructuras de Control](#estructuras-de-control)
6. [Funciones](#funciones)
7. [Objetos y Arrays](#objetos-y-arrays)
8. [Programación Orientada a Objetos](#programación-orientada-a-objetos)
9. [Manejo de Errores](#manejo-de-errores)
10. [Programación Asíncrona](#programación-asíncrona)
11. [Módulos](#módulos)
12. [DOM y APIs del Navegador](#dom-y-apis-del-navegador)
13. [Características Modernas (ES6+)](#características-modernas-es6)
14. [Mejores Prácticas](#mejores-prácticas)

---

## Introducción

JavaScript es un lenguaje de programación interpretado, dinámico y de alto nivel. Originalmente creado para agregar interactividad a páginas web, ahora se usa en servidores (Node.js), aplicaciones móviles, desktop y más.

### Características principales:
- **Interpretado**: No necesita compilación
- **Dinámico**: Los tipos se determinan en tiempo de ejecución
- **Orientado a objetos**: Basado en prototipos
- **Funcional**: Las funciones son ciudadanos de primera clase
- **Débilmente tipado**: Conversiones automáticas de tipo

---

## Fundamentos Básicos

### Inclusión de JavaScript

```html
<!-- Inline -->
<script>
  console.log("Hola mundo");
</script>

<!-- Archivo externo -->
<script src="script.js"></script>

<!-- Módulo ES6 -->
<script type="module" src="app.js"></script>
```

### Comentarios

```javascript
// Comentario de una línea

/*
  Comentario
  de múltiples
  líneas
*/

/**
 * JSDoc - Documentación
 * @param {string} nombre - El nombre del usuario
 * @returns {string} Saludo personalizado
 */
```

### Console y Debugging

```javascript
console.log("Mensaje normal");
console.warn("Advertencia");
console.error("Error");
console.info("Información");
console.table([{nombre: "Juan", edad: 25}]);
console.group("Grupo");
console.groupEnd();
console.time("timer");
console.timeEnd("timer");
```

---

## Variables y Tipos de Datos

### Declaración de Variables

```javascript
// var (función scope, hoisting)
var nombre = "Juan";

// let (block scope, no hoisting)
let edad = 25;

// const (block scope, inmutable referencia)
const PI = 3.14159;
```

### Tipos Primitivos

```javascript
// Number
let entero = 42;
let decimal = 3.14;
let exponente = 2e3; // 2000
let binario = 0b1010; // 10
let octal = 0o12; // 10
let hexadecimal = 0xFF; // 255

// String
let simple = 'Hola';
let doble = "Mundo";
let template = `Hola ${nombre}`;
let multilinea = `
  Línea 1
  Línea 2
`;

// Boolean
let verdadero = true;
let falso = false;

// Undefined
let indefinido;
let explicitamente = undefined;

// Null
let nulo = null;

// Symbol (ES6)
let simbolo = Symbol("descripción");
let simboloGlobal = Symbol.for("clave");

// BigInt (ES2020)
let numeroGrande = 123456789012345678901234567890n;
let otraForma = BigInt("123456789012345678901234567890");
```

### Tipos de Referencia

```javascript
// Object
let persona = {
  nombre: "Ana",
  edad: 30
};

// Array
let numeros = [1, 2, 3, 4, 5];
let mixto = [1, "texto", true, null];

// Function
function saludar() {
  return "Hola";
}

// Date
let fecha = new Date();
let fechaEspecifica = new Date("2023-12-25");

// RegExp
let patron = /[a-z]+/gi;
let regexp = new RegExp("[a-z]+", "gi");
```

### Verificación de Tipos

```javascript
typeof 42;              // "number"
typeof "texto";         // "string"
typeof true;            // "boolean"
typeof undefined;       // "undefined"
typeof null;            // "object" (error conocido)
typeof {};              // "object"
typeof [];              // "object"
typeof function(){};    // "function"

// Verificaciones más precisas
Array.isArray([]);                    // true
Object.prototype.toString.call([]);   // "[object Array]"
Number.isInteger(42);                 // true
Number.isNaN(NaN);                   // true
```

---

## Operadores

### Operadores Aritméticos

```javascript
let a = 10, b = 3;

console.log(a + b);  // 13 - Suma
console.log(a - b);  // 7  - Resta
console.log(a * b);  // 30 - Multiplicación
console.log(a / b);  // 3.333... - División
console.log(a % b);  // 1  - Módulo
console.log(a ** b); // 1000 - Exponenciación (ES2016)

// Operadores de incremento/decremento
let x = 5;
console.log(++x); // 6 (pre-incremento)
console.log(x++); // 6 (post-incremento, x ahora es 7)
console.log(--x); // 6 (pre-decremento)
console.log(x--); // 6 (post-decremento, x ahora es 5)
```

### Operadores de Asignación

```javascript
let x = 10;
x += 5;   // x = x + 5
x -= 3;   // x = x - 3
x *= 2;   // x = x * 2
x /= 4;   // x = x / 4
x %= 3;   // x = x % 3
x **= 2;  // x = x ** 2
```

### Operadores de Comparación

```javascript
let a = 5, b = "5";

// Igualdad (con conversión de tipo)
console.log(a == b);   // true
console.log(a != b);   // false

// Igualdad estricta (sin conversión)
console.log(a === b);  // false
console.log(a !== b);  // true

// Comparación
console.log(a > 3);    // true
console.log(a < 10);   // true
console.log(a >= 5);   // true
console.log(a <= 5);   // true
```

### Operadores Lógicos

```javascript
let a = true, b = false;

console.log(a && b);  // false - AND lógico
console.log(a || b);  // true  - OR lógico
console.log(!a);      // false - NOT lógico

// Evaluación de cortocircuito
console.log(false && "no se evalúa"); // false
console.log(true || "no se evalúa");  // true
```

### Operadores Especiales

```javascript
// Operador ternario
let edad = 18;
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";

// Operador de coalescencia nula (ES2020)
let nombre = null;
let nombrePorDefecto = nombre ?? "Sin nombre";

// Operadores de encadenamiento opcional (ES2020)
let usuario = { perfil: { nombre: "Juan" } };
console.log(usuario?.perfil?.nombre); // "Juan"
console.log(usuario?.trabajo?.empresa); // undefined

// Operador de eliminación
let obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj); // { b: 2 }

// Operador instanceof
console.log([] instanceof Array);  // true
console.log({} instanceof Object); // true

// Operador in
let obj2 = { a: 1 };
console.log("a" in obj2);  // true
console.log("b" in obj2);  // false
```

---

## Estructuras de Control

### Condicionales

```javascript
// if...else
let edad = 20;
if (edad >= 18) {
  console.log("Mayor de edad");
} else if (edad >= 13) {
  console.log("Adolescente");
} else {
  console.log("Niño");
}

// switch
let dia = "lunes";
switch (dia) {
  case "lunes":
  case "martes":
    console.log("Inicio de semana");
    break;
  case "miércoles":
    console.log("Mitad de semana");
    break;
  case "viernes":
    console.log("¡TGIF!");
    break;
  default:
    console.log("Otro día");
}
```

### Bucles

```javascript
// for tradicional
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while
let contador = 0;
while (contador < 3) {
  console.log(contador);
  contador++;
}

// do...while
let num = 0;
do {
  console.log(num);
  num++;
} while (num < 3);

// for...in (para objetos)
let persona = { nombre: "Ana", edad: 25 };
for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);
}

// for...of (para iterables)
let array = [1, 2, 3, 4, 5];
for (let valor of array) {
  console.log(valor);
}

// Control de flujo
for (let i = 0; i < 10; i++) {
  if (i === 3) continue; // Salta a la siguiente iteración
  if (i === 8) break;    // Sale del bucle
  console.log(i);
}
```

### Manejo de Excepciones Básico

```javascript
try {
  let resultado = 10 / 0;
  console.log(resultado);
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Esto siempre se ejecuta");
}
```

---

## Funciones

### Declaración y Expresión

```javascript
// Declaración de función (hoisting)
function sumar(a, b) {
  return a + b;
}

// Expresión de función
const restar = function(a, b) {
  return a - b;
};

// Función flecha (ES6)
const multiplicar = (a, b) => a * b;

// Función flecha con cuerpo
const dividir = (a, b) => {
  if (b === 0) throw new Error("División por cero");
  return a / b;
};

// Función de una sola línea
const cuadrado = x => x * x;
```

### Parámetros

```javascript
// Parámetros por defecto (ES6)
function saludar(nombre = "Mundo") {
  return `Hola, ${nombre}!`;
}

// Parámetros rest (ES6)
function sumarTodos(...numeros) {
  return numeros.reduce((suma, num) => suma + num, 0);
}

// Desestructuración de parámetros
function crearPersona({nombre, edad, ciudad = "No especificada"}) {
  return { nombre, edad, ciudad };
}

// Llamada con spread operator
let nums = [1, 2, 3, 4, 5];
console.log(sumarTodos(...nums));
```

### Scope y Closures

```javascript
// Scope global
var global = "Soy global";

function exterior() {
  // Scope de función
  let exteriorVar = "Soy exterior";
  
  function interior() {
    // Closure: acceso a variables del scope exterior
    let interiorVar = "Soy interior";
    console.log(global);      // Accesible
    console.log(exteriorVar); // Accesible
    console.log(interiorVar); // Accesible
  }
  
  return interior;
}

let clausura = exterior();
clausura(); // Mantiene acceso a exteriorVar

// Ejemplo práctico de closure
function contador() {
  let count = 0;
  return function() {
    return ++count;
  };
}

let cont1 = contador();
let cont2 = contador();
console.log(cont1()); // 1
console.log(cont1()); // 2
console.log(cont2()); // 1 (independiente)
```

### Funciones de Orden Superior

```javascript
// Función que recibe otra función
function operacion(a, b, callback) {
  return callback(a, b);
}

// Función que retorna otra función
function multiplicador(factor) {
  return function(numero) {
    return numero * factor;
  };
}

const porDos = multiplicador(2);
console.log(porDos(5)); // 10

// Métodos de array como funciones de orden superior
let numeros = [1, 2, 3, 4, 5];

// map: transforma cada elemento
let cuadrados = numeros.map(x => x * x);

// filter: filtra elementos
let pares = numeros.filter(x => x % 2 === 0);

// reduce: reduce a un solo valor
let suma = numeros.reduce((acc, x) => acc + x, 0);

// forEach: ejecuta función para cada elemento
numeros.forEach(x => console.log(x));

// find: encuentra el primer elemento que cumple condición
let primerPar = numeros.find(x => x % 2 === 0);

// some: verifica si algún elemento cumple condición
let hayPares = numeros.some(x => x % 2 === 0);

// every: verifica si todos los elementos cumplen condición
let todosPositivos = numeros.every(x => x > 0);
```

### Funciones Inmediatamente Invocadas (IIFE)

```javascript
// IIFE tradicional
(function() {
  let variable = "No contamino el scope global";
  console.log(variable);
})();

// IIFE con parámetros
(function(nombre) {
  console.log(`Hola, ${nombre}`);
})("Mundo");

// IIFE con arrow function
(() => {
  console.log("IIFE con arrow function");
})();
```

---

## Objetos y Arrays

### Objetos

```javascript
// Creación de objetos
let obj1 = {}; // Objeto literal vacío
let obj2 = new Object(); // Constructor Object

// Objeto con propiedades
let persona = {
  nombre: "Ana",
  edad: 30,
  activo: true,
  
  // Método
  saludar: function() {
    return `Hola, soy ${this.nombre}`;
  },
  
  // Método con sintaxis corta (ES6)
  despedir() {
    return "Adiós";
  },
  
  // Propiedad computada (ES6)
  [`prop_${Math.random()}`]: "valor dinámico"
};

// Acceso a propiedades
console.log(persona.nombre);        // Notación punto
console.log(persona["edad"]);       // Notación corchetes
console.log(persona.saludar());     // Llamada a método

// Modificación
persona.edad = 31;
persona["ciudad"] = "Madrid";
delete persona.activo;

// Métodos útiles de Object
console.log(Object.keys(persona));        // Array de claves
console.log(Object.values(persona));      // Array de valores
console.log(Object.entries(persona));     // Array de [clave, valor]

// Verificaciones
console.log("nombre" in persona);          // true
console.log(persona.hasOwnProperty("edad")); // true
```

### Desestructuración de Objetos

```javascript
let persona = {
  nombre: "Carlos",
  edad: 25,
  ciudad: "Barcelona",
  trabajo: {
    empresa: "TechCorp",
    puesto: "Desarrollador"
  }
};

// Desestructuración básica
let {nombre, edad} = persona;

// Con alias
let {nombre: nombreCompleto, edad: años} = persona;

// Con valores por defecto
let {nombre, telefono = "No disponible"} = persona;

// Desestructuración anidada
let {trabajo: {empresa, puesto}} = persona;

// En parámetros de función
function presentar({nombre, edad, ciudad = "No especificada"}) {
  return `${nombre}, ${edad} años, de ${ciudad}`;
}
```

### Arrays

```javascript
// Creación de arrays
let arr1 = []; // Array literal vacío
let arr2 = new Array(); // Constructor Array
let arr3 = Array.of(1, 2, 3); // Array.of (ES6)
let arr4 = Array.from("hello"); // ['h','e','l','l','o']

// Array con elementos
let frutas = ["manzana", "banana", "naranja"];
let numeros = [1, 2, 3, 4, 5];
let mixto = [1, "texto", true, {a: 1}, [1, 2]];

// Propiedades y métodos básicos
console.log(frutas.length);        // 3
console.log(frutas[0]);           // "manzana"
console.log(frutas[frutas.length - 1]); // "naranja"

// Modificación
frutas[1] = "pera";               // Cambiar elemento
frutas.push("uva");               // Agregar al final
frutas.unshift("kiwi");           // Agregar al inicio
let ultimo = frutas.pop();        // Quitar del final
let primero = frutas.shift();     // Quitar del inicio

// Métodos de búsqueda
console.log(frutas.indexOf("naranja"));     // Índice o -1
console.log(frutas.includes("manzana"));    // true/false
console.log(frutas.find(f => f.length > 5)); // Primer elemento que cumple
console.log(frutas.findIndex(f => f === "pera")); // Índice del elemento

// Métodos de transformación
let frutasMayusculas = frutas.map(f => f.toUpperCase());
let frutasLargas = frutas.filter(f => f.length > 5);
let totalCaracteres = frutas.reduce((total, f) => total + f.length, 0);

// Métodos de ordenamiento
let numerosDesordenados = [3, 1, 4, 1, 5, 9];
numerosDesordenados.sort((a, b) => a - b); // Orden ascendente
numerosDesordenados.reverse(); // Invierte el array

// Métodos de unión y división
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let unidos = array1.concat(array2);        // [1,2,3,4,5,6]
let unidosSpread = [...array1, ...array2]; // ES6 spread

let texto = frutas.join(", ");             // "manzana, pera, naranja"
let palabras = "hola mundo".split(" ");    // ["hola", "mundo"]

// Métodos de verificación
let todosPositivos = numeros.every(n => n > 0);  // true/false
let algunosPares = numeros.some(n => n % 2 === 0); // true/false
```

### Desestructuración de Arrays

```javascript
let numeros = [1, 2, 3, 4, 5];

// Desestructuración básica
let [primero, segundo] = numeros; // primero=1, segundo=2

// Saltar elementos
let [a, , c] = numeros; // a=1, c=3

// Con valores por defecto
let [x, y, z = 0] = [1, 2]; // x=1, y=2, z=0

// Rest operator
let [head, ...tail] = numeros; // head=1, tail=[2,3,4,5]

// Intercambio de variables
let var1 = "a", var2 = "b";
[var1, var2] = [var2, var1]; // var1="b", var2="a"
```

---

## Programación Orientada a Objetos

### Prototipos

```javascript
// Función constructora
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// Agregar método al prototipo
Persona.prototype.saludar = function() {
  return `Hola, soy ${this.nombre}`;
};

Persona.prototype.cumpleanos = function() {
  this.edad++;
  return `Ahora tengo ${this.edad} años`;
};

// Crear instancias
let persona1 = new Persona("Ana", 25);
let persona2 = new Persona("Luis", 30);

console.log(persona1.saludar()); // "Hola, soy Ana"
console.log(persona2.cumpleanos()); // "Ahora tengo 31 años"

// Verificar prototipo
console.log(persona1 instanceof Persona); // true
console.log(persona1.__proto__ === Persona.prototype); // true
```

### Clases (ES6)

```javascript
// Definición de clase
class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }
  
  // Método de instancia
  hablar() {
    return `${this.nombre} hace un sonido`;
  }
  
  // Método estático
  static crearPerro(nombre) {
    return new Animal(nombre, "perro");
  }
  
  // Getter
  get informacion() {
    return `${this.nombre} es un ${this.tipo}`;
  }
  
  // Setter
  set nuevoNombre(nombre) {
    this.nombre = nombre;
  }
}

// Herencia
class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre, "perro"); // Llamar al constructor padre
    this.raza = raza;
  }
  
  // Sobrescribir método
  hablar() {
    return `${this.nombre} ladra: ¡Guau!`;
  }
  
  // Método específico
  buscar() {
    return `${this.nombre} está buscando la pelota`;
  }
}

// Uso
let miPerro = new Perro("Rex", "Labrador");
console.log(miPerro.hablar()); // "Rex ladra: ¡Guau!"
console.log(miPerro.informacion); // "Rex es un perro"
console.log(miPerro.buscar()); // "Rex está buscando la pelota"

// Método estático
let otroPerro = Animal.crearPerro("Buddy");
```

### Propiedades Privadas (ES2022)

```javascript
class CuentaBancaria {
  // Campos privados
  #saldo = 0;
  #numeroCuenta;
  
  constructor(numeroCuenta) {
    this.#numeroCuenta = numeroCuenta;
  }
  
  // Método privado
  #validarMonto(monto) {
    return monto > 0 && typeof monto === 'number';
  }
  
  // Métodos públicos
  depositar(monto) {
    if (this.#validarMonto(monto)) {
      this.#saldo += monto;
      return `Depositado: $${monto}`;
    }
    throw new Error("Monto inválido");
  }
  
  retirar(monto) {
    if (this.#validarMonto(monto) && monto <= this.#saldo) {
      this.#saldo -= monto;
      return `Retirado: $${monto}`;
    }
    throw new Error("Monto inválido o insuficiente");
  }
  
  get saldo() {
    return this.#saldo;
  }
}

let cuenta = new CuentaBancaria("12345");
cuenta.depositar(100);
console.log(cuenta.saldo); // 100
// console.log(cuenta.#saldo); // Error: Private field
```

### Mixins y Composición

```javascript
// Mixin
const Volador = {
  volar() {
    return `${this.nombre} está volando`;
  },
  
  aterrizar() {
    return `${this.nombre} ha aterizado`;
  }
};

const Nadador = {
  nadar() {
    return `${this.nombre} está nadando`;
  }
};

// Clase que usa mixins
class Pato extends Animal {
  constructor(nombre) {
    super(nombre, "pato");
  }
}

// Aplicar mixins
Object.assign(Pato.prototype, Volador, Nadador);

let pato = new Pato("Donald");
console.log(pato.volar()); // "Donald está volando"
console.log(pato.nadar()); // "Donald está nadando"
```

---

## Manejo de Errores

### Try-Catch-Finally

```javascript
function dividir(a, b) {
  try {
    if (b === 0) {
      throw new Error("División por cero no permitida");
    }
    return a / b;
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  } finally {
    console.log("Operación de división completada");
  }
}

// Captura de diferentes tipos de error
try {
  JSON.parse("json inválido");
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("Error de sintaxis JSON");
  } else if (error instanceof ReferenceError) {
    console.log("Error de referencia");
  } else {
    console.log("Error desconocido:", error);
  }
}
```

### Tipos de Error

```javascript
// Error genérico
throw new Error("Algo salió mal");

// Tipos específicos
throw new SyntaxError("Error de sintaxis");
throw new ReferenceError("Variable no definida");
throw new TypeError("Tipo incorrecto");
throw new RangeError("Valor fuera de rango");

// Error personalizado
class ErrorPersonalizado extends Error {
  constructor(mensaje, codigo) {
    super(mensaje);
    this.name = "ErrorPersonalizado";
    this.codigo = codigo;
  }
}

try {
  throw new ErrorPersonalizado("Error específico", 500);
} catch (error) {
  console.log(error.name);    // "ErrorPersonalizado"
  console.log(error.message); // "Error específico"
  console.log(error.codigo);  // 500
}
```

### Manejo de Errores Asíncronos

```javascript
// Con Promises
function operacionAsincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.5;
      if (exito) {
        resolve("Operación exitosa");
      } else {
        reject(new Error("Operación fallida"));
      }
    }, 1000);
  });
}

// Manejo con .catch()
operacionAsincrona()
  .then(resultado => console.log(resultado))
  .catch(error => console.error("Error:", error.message));

// Manejo con async/await
async function manejarOperacion() {
  try {
    const resultado = await operacionAsincrona();
    console.log(resultado);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
```

---

## Programación Asíncrona

### Callbacks

```javascript
// Callback básico
function obtenerDatos(callback) {
  setTimeout(() => {
    const datos = { id: 1, nombre: "Usuario" };
    callback(null, datos); // (error, resultado)
  }, 1000);
}

obtenerDatos((error, datos) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Datos:", datos);
  }
});

// Callback Hell (problema)
obtenerUsuario(id, (error, usuario) => {
  if (!error) {
    obtenerPedidos(usuario.id, (error, pedidos) => {
      if (!error) {
        obtenerDetalles(pedidos[0].id, (error, detalles) => {
          if (!error) {
            console.log(detalles);
          }
        });
      }
    });
  }
});
```

### Promises

```javascript
// Crear una Promise
function crearPromesa() {
  return new Promise((resolve, reject) => {
    const exito = Math.random() > 0.5;
    
    setTimeout(() => {
      if (exito) {
        resolve("¡Éxito!");
      } else {
        reject(new Error("¡Error!"));
      }
    }, 1000);
  });
}

// Usar Promise
crearPromesa()
  .then(resultado => {
    console.log(resultado);
    return "Procesado"; // Se puede encadenar
  })
  .then(nuevoResultado => {
    console.log(nuevoResultado);
  })
  .catch(error => {
    console.error("Error:", error.message);
  })
  .finally(() => {
    console.log("Operación completada");
  });

// Promise.all - Esperar múltiples promesas
Promise.all([
  crearPromesa(),
  crearPromesa(),
  crearPromesa()
])
.then(resultados => {
  console.log("Todos completados:", resultados);
})
.catch(error => {
  console.log("Al menos uno falló:", error);
});

// Promise.allSettled - Obtener todos los resultados
Promise.allSettled([
  Promise.resolve("Éxito"),
  Promise.reject("Error"),
  Promise.resolve("Otro éxito")
])
.