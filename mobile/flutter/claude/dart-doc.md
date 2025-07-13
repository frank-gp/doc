# Documentación de Dart - Lenguaje de Google

## Introducción

Dart es un lenguaje de programación desarrollado por Google, optimizado para crear aplicaciones rápidas en cualquier plataforma. Es el lenguaje principal para el desarrollo con Flutter y también se usa para desarrollo web y de servidor.

## Características Principales

- **Tipado estático opcional**: Puedes usar tipos o dejar que Dart los infiera
- **Null safety**: Protección contra errores de referencia nula
- **Compilación JIT y AOT**: Desarrollo rápido y ejecución eficiente
- **Multiplataforma**: Web, móvil, desktop y servidor
- **Garbage collection**: Gestión automática de memoria

## Instalación

### Usando Flutter SDK (Recomendado)

```bash
# Instala Flutter que incluye Dart
flutter --version
```

### Instalación independiente

```bash
# En macOS con Homebrew
brew tap dart-lang/dart
brew install dart

# En Windows con Chocolatey
choco install dart-sdk

# En Linux
sudo apt-get update
sudo apt-get install apt-transport-https
sudo sh -c 'wget -qO- https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -'
sudo sh -c 'wget -qO- https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list > /etc/apt/sources.list.d/dart_stable.list'
sudo apt-get update
sudo apt-get install dart
```

## Sintaxis Básica

### Variables y Tipos

```dart
// Declaración de variables
var nombre = 'Juan';  // Tipo inferido (String)
String apellido = 'Pérez';  // Tipo explícito
int edad = 25;
double altura = 1.75;
bool esEstudiante = true;

// Variables finales e inmutables
final fechaNacimiento = DateTime.now();  // Solo asignación única
const pi = 3.14159;  // Constante en tiempo de compilación

// Null safety
String? nombreOpcional;  // Puede ser null
String nombreObligatorio = 'Valor';  // No puede ser null
```

### Colecciones

```dart
// Listas
List<int> numeros = [1, 2, 3, 4, 5];
var frutas = ['manzana', 'banana', 'naranja'];

// Sets
Set<String> colores = {'rojo', 'verde', 'azul'};
var numerosUnicos = <int>{1, 2, 3};

// Maps
Map<String, int> edades = {
  'Ana': 25,
  'Luis': 30,
  'María': 28
};
var capitales = <String, String>{
  'España': 'Madrid',
  'Francia': 'París'
};
```

### Operadores

```dart
// Aritméticos
int suma = 5 + 3;
int resta = 10 - 4;
int multiplicacion = 6 * 7;
double division = 15 / 4;
int divisionEntera = 15 ~/ 4;
int modulo = 15 % 4;

// Comparación
bool esIgual = 5 == 5;
bool esDiferente = 5 != 3;
bool esMayor = 10 > 5;
bool esMenorIgual = 5 <= 10;

// Lógicos
bool y = true && false;
bool o = true || false;
bool no = !true;

// Asignación
int a = 5;
a += 3;  // a = a + 3
a *= 2;  // a = a * 2

// Null-aware
String? nombre;
String nombreFinal = nombre ?? 'Sin nombre';
nombre ??= 'Valor por defecto';
```

## Funciones

### Declaración básica

```dart
// Función simple
String saludar(String nombre) {
  return 'Hola, $nombre!';
}

// Función con arrow syntax
String saludarCorto(String nombre) => 'Hola, $nombre!';

// Función con parámetros opcionales
String saludarCompleto(String nombre, [String? apellido]) {
  return apellido != null ? 'Hola, $nombre $apellido!' : 'Hola, $nombre!';
}

// Función con parámetros nombrados
String crearMensaje({required String nombre, int edad = 0}) {
  return 'Nombre: $nombre, Edad: $edad';
}

// Función de orden superior
List<int> filtrarNumeros(List<int> numeros, bool Function(int) condicion) {
  return numeros.where(condicion).toList();
}
```

### Funciones anónimas y lambda

```dart
// Función anónima
var multiplicar = (int a, int b) => a * b;

// Usando funciones como parámetros
var numeros = [1, 2, 3, 4, 5];
var cuadrados = numeros.map((n) => n * n).toList();
var pares = numeros.where((n) => n % 2 == 0).toList();
```

## Programación Orientada a Objetos

### Clases básicas

```dart
class Persona {
  String nombre;
  int edad;

  // Constructor
  Persona(this.nombre, this.edad);

  // Constructor nombrado
  Persona.sinEdad(this.nombre) : edad = 0;

  // Método
  void presentarse() {
    print('Hola, soy $nombre y tengo $edad años');
  }

  // Getter
  String get info => 'Nombre: $nombre, Edad: $edad';

  // Setter
  set nuevaEdad(int edad) {
    if (edad >= 0) {
      this.edad = edad;
    }
  }
}

// Uso
var persona = Persona('Ana', 25);
persona.presentarse();
print(persona.info);
persona.nuevaEdad = 26;
```

### Herencia

```dart
class Animal {
  String nombre;

  Animal(this.nombre);

  void hacerSonido() {
    print('$nombre hace un sonido');
  }
}

class Perro extends Animal {
  String raza;

  Perro(String nombre, this.raza) : super(nombre);

  @override
  void hacerSonido() {
    print('$nombre ladra');
  }

  void moverCola() {
    print('$nombre mueve la cola');
  }
}
```

### Interfaces y Mixins

```dart
// Clase abstracta
abstract class Vehiculo {
  void acelerar();
  void frenar();
}

// Mixin
mixin Volador {
  void volar() {
    print('Volando...');
  }
}

// Implementación
class Coche implements Vehiculo {
  @override
  void acelerar() {
    print('El coche acelera');
  }

  @override
  void frenar() {
    print('El coche frena');
  }
}

class Avion extends Vehiculo with Volador {
  @override
  void acelerar() {
    print('El avión acelera');
  }

  @override
  void frenar() {
    print('El avión frena');
  }
}
```

## Control de Flujo

### Condicionales

```dart
// if-else
int edad = 20;
if (edad >= 18) {
  print('Es mayor de edad');
} else if (edad >= 13) {
  print('Es adolescente');
} else {
  print('Es menor de edad');
}

// Switch
String dia = 'lunes';
switch (dia) {
  case 'lunes':
  case 'martes':
    print('Inicio de semana');
    break;
  case 'viernes':
    print('Fin de semana cerca');
    break;
  default:
    print('Día normal');
}

// Operador ternario
String mensaje = edad >= 18 ? 'Adulto' : 'Menor';
```

### Bucles

```dart
// For loop
for (int i = 0; i < 5; i++) {
  print('Iteración $i');
}

// For-in loop
var nombres = ['Ana', 'Luis', 'María'];
for (var nombre in nombres) {
  print('Hola, $nombre');
}

// While loop
int contador = 0;
while (contador < 5) {
  print('Contador: $contador');
  contador++;
}

// Do-while loop
int numero = 0;
do {
  print('Número: $numero');
  numero++;
} while (numero < 3);
```

## Manejo de Errores

```dart
// Try-catch básico
try {
  int resultado = 10 ~/ 0;
  print(resultado);
} catch (e) {
  print('Error: $e');
}

// Try-catch específico
try {
  var lista = [1, 2, 3];
  print(lista[10]);
} on RangeError {
  print('Índice fuera de rango');
} catch (e) {
  print('Error inesperado: $e');
} finally {
  print('Siempre se ejecuta');
}

// Lanzar excepciones
void validarEdad(int edad) {
  if (edad < 0) {
    throw ArgumentError('La edad no puede ser negativa');
  }
}
```

## Programación Asíncrona

### Futures

```dart
// Future básico
Future<String> obtenerDatos() async {
  await Future.delayed(Duration(seconds: 2));
  return 'Datos obtenidos';
}

// Uso con async/await
void main() async {
  print('Iniciando...');
  String datos = await obtenerDatos();
  print(datos);
}

// Manejo de errores async
Future<void> operacionAsincrona() async {
  try {
    String resultado = await obtenerDatos();
    print(resultado);
  } catch (e) {
    print('Error: $e');
  }
}
```

### Streams

```dart
// Stream básico
Stream<int> contadorStream() async* {
  for (int i = 1; i <= 5; i++) {
    await Future.delayed(Duration(seconds: 1));
    yield i;
  }
}

// Escuchar un stream
void escucharStream() async {
  await for (int valor in contadorStream()) {
    print('Valor: $valor');
  }
}

// Stream con múltiples valores
Stream<String> mensajesStream() async* {
  yield 'Primer mensaje';
  await Future.delayed(Duration(seconds: 1));
  yield 'Segundo mensaje';
  await Future.delayed(Duration(seconds: 1));
  yield 'Tercer mensaje';
}
```

## Generics

```dart
// Clase genérica
class Caja<T> {
  T contenido;

  Caja(this.contenido);

  T obtenerContenido() => contenido;
}

// Función genérica
T primero<T>(List<T> lista) {
  return lista.first;
}

// Uso
var cajaString = Caja<String>('Hola');
var cajaInt = Caja<int>(42);

String primerNombre = primero(['Ana', 'Luis', 'María']);
int primerNumero = primero([1, 2, 3]);
```

## Extensiones

```dart
// Extensión para String
extension StringExtensions on String {
  String get capitalizado {
    return '${this[0].toUpperCase()}${this.substring(1)}';
  }

  bool get esEmail {
    return this.contains('@') && this.contains('.');
  }
}

// Extensión para List
extension ListExtensions<T> on List<T> {
  T? get segundoElemento {
    return this.length > 1 ? this[1] : null;
  }
}

// Uso
String nombre = 'juan';
print(nombre.capitalizado);  // 'Juan'

String email = 'test@example.com';
print(email.esEmail);  // true

List<int> numeros = [1, 2, 3];
print(numeros.segundoElemento);  // 2
```

## Utilidades Comunes

### Trabajo con Strings

```dart
String texto = 'Hola Mundo';

// Interpolación
String nombre = 'Ana';
int edad = 25;
String mensaje = 'Hola, soy $nombre y tengo $edad años';

// Métodos útiles
print(texto.toLowerCase());  // 'hola mundo'
print(texto.toUpperCase());  // 'HOLA MUNDO'
print(texto.contains('Mundo'));  // true
print(texto.startsWith('Hola'));  // true
print(texto.split(' '));  // ['Hola', 'Mundo']
```

### Trabajo con Listas

```dart
List<int> numeros = [1, 2, 3, 4, 5];

// Métodos útiles
numeros.add(6);
numeros.remove(3);
numeros.insert(0, 0);

// Funciones de orden superior
var cuadrados = numeros.map((n) => n * n).toList();
var pares = numeros.where((n) => n % 2 == 0).toList();
var suma = numeros.reduce((a, b) => a + b);
```

### Fechas y Tiempo

```dart
// Crear fechas
DateTime ahora = DateTime.now();
DateTime fecha = DateTime(2024, 1, 15);
DateTime fechaUtc = DateTime.utc(2024, 1, 15);

// Formatear fechas
String fechaString = fecha.toString();
String fechaFormateada = '${fecha.day}/${fecha.month}/${fecha.year}';

// Operaciones con fechas
DateTime mañana = ahora.add(Duration(days: 1));
DateTime ayer = ahora.subtract(Duration(days: 1));
bool esDespues = fecha.isAfter(ayer);
```

## Packages y Dependencias

### pubspec.yaml

```yaml
name: mi_proyecto
description: Mi proyecto en Dart
version: 1.0.0

environment:
  sdk: ">=2.17.0 <4.0.0"

dependencies:
  http: ^0.13.5
  json_annotation: ^4.8.1

dev_dependencies:
  test: ^1.21.0
  json_serializable: ^6.6.2
```

### Uso de packages

```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

// Realizar petición HTTP
Future<Map<String, dynamic>> obtenerUsuario(int id) async {
  final response = await http.get(
    Uri.parse('https://jsonplaceholder.typicode.com/users/$id'),
  );

  if (response.statusCode == 200) {
    return json.decode(response.body);
  } else {
    throw Exception('Error al obtener usuario');
  }
}
```

## Ejemplo Práctico: Aplicación de Tareas

```dart
class Tarea {
  String titulo;
  String descripcion;
  bool completada;
  DateTime fechaCreacion;

  Tarea({
    required this.titulo,
    required this.descripcion,
    this.completada = false,
  }) : fechaCreacion = DateTime.now();

  void marcarCompleta() {
    completada = true;
  }

  @override
  String toString() {
    String estado = completada ? '✓' : '✗';
    return '$estado $titulo - $descripcion';
  }
}

class GestorTareas {
  List<Tarea> _tareas = [];

  void agregarTarea(String titulo, String descripcion) {
    _tareas.add(Tarea(titulo: titulo, descripcion: descripcion));
  }

  void completarTarea(int indice) {
    if (indice >= 0 && indice < _tareas.length) {
      _tareas[indice].marcarCompleta();
    }
  }

  List<Tarea> get tareasCompletas {
    return _tareas.where((tarea) => tarea.completada).toList();
  }

  List<Tarea> get tareasPendientes {
    return _tareas.where((tarea) => !tarea.completada).toList();
  }

  void mostrarTareas() {
    print('=== TAREAS ===');
    for (int i = 0; i < _tareas.length; i++) {
      print('$i. ${_tareas[i]}');
    }
  }
}

// Uso
void main() {
  var gestor = GestorTareas();

  gestor.agregarTarea('Estudiar Dart', 'Aprender sintaxis básica');
  gestor.agregarTarea('Crear proyecto', 'Desarrollar aplicación de ejemplo');

  gestor.mostrarTareas();

  gestor.completarTarea(0);

  print('\nTareas completadas: ${gestor.tareasCompletas.length}');
  print('Tareas pendientes: ${gestor.tareasPendientes.length}');
}
```

## Recursos Adicionales

### Documentación Oficial

- [Dart.dev](https://dart.dev) - Sitio oficial
- [API Reference](https://api.dart.dev) - Documentación de la API
- [Language Tour](https://dart.dev/guides/language/language-tour) - Tour del lenguaje

### Herramientas de Desarrollo

- **DartPad**: Editor online para probar código
- **Visual Studio Code**: Con extensión de Dart
- **Android Studio**: Con plugin de Dart/Flutter
- **IntelliJ IDEA**: Con plugin de Dart

### Comandos Útiles

```bash
# Crear nuevo proyecto
dart create mi_proyecto

# Ejecutar programa
dart run

# Ejecutar tests
dart test

# Obtener dependencias
dart pub get

# Actualizar dependencias
dart pub upgrade

# Analizar código
dart analyze
```

Esta documentación cubre los aspectos fundamentales de Dart. El lenguaje es muy versátil y se usa principalmente con Flutter para desarrollo móvil, pero también es excelente para desarrollo web y de servidor.
