# Documentación de Python 🐍

## Tabla de Contenidos
1. [Variables y Tipos de Datos](#variables-y-tipos-de-datos)
2. [Operadores](#operadores)
3. [Estructuras de Control](#estructuras-de-control)
4. [Estructuras de Datos](#estructuras-de-datos)
5. [Funciones](#funciones)
6. [Clases y Objetos](#clases-y-objetos)
7. [Manejo de Archivos](#manejo-de-archivos)
8. [Manejo de Excepciones](#manejo-de-excepciones)
9. [Módulos y Paquetes](#módulos-y-paquetes)
10. [Bibliotecas Útiles](#bibliotecas-útiles)

---

## Variables y Tipos de Datos

### Declaración de Variables
```python
# Variables básicas
nombre = "Juan"
edad = 25
altura = 1.75
es_estudiante = True
```

### Tipos de Datos Básicos

#### Strings (Cadenas)
```python
# Declaración
texto = "Hola mundo"
texto_multilinea = """Esta es
una cadena
multilínea"""

# Métodos útiles
texto.upper()           # "HOLA MUNDO"
texto.lower()           # "hola mundo"
texto.replace("o", "0") # "H0la mund0"
texto.split(" ")        # ["Hola", "mundo"]
len(texto)              # 10

# Formateo
nombre = "Ana"
edad = 30
mensaje = f"Mi nombre es {nombre} y tengo {edad} años"
```

#### Números
```python
# Enteros
numero_entero = 10
numero_negativo = -5

# Flotantes
numero_decimal = 3.14
notacion_cientifica = 1e6  # 1000000.0

# Operaciones matemáticas
import math
math.sqrt(16)    # 4.0
math.pi          # 3.141592653589793
math.ceil(4.3)   # 5
math.floor(4.7)  # 4
```

#### Booleanos
```python
verdadero = True
falso = False

# Valores que evalúan a False
bool(0)         # False
bool("")        # False
bool([])        # False
bool(None)      # False

# Valores que evalúan a True
bool(1)         # True
bool("texto")   # True
bool([1, 2])    # True
```

---

## Operadores

### Operadores Aritméticos
```python
a, b = 10, 3

a + b    # 13 (suma)
a - b    # 7  (resta)
a * b    # 30 (multiplicación)
a / b    # 3.333... (división)
a // b   # 3  (división entera)
a % b    # 1  (módulo)
a ** b   # 1000 (potencia)
```

### Operadores de Comparación
```python
a, b = 5, 10

a == b   # False (igual)
a != b   # True  (diferente)
a < b    # True  (menor que)
a > b    # False (mayor que)
a <= b   # True  (menor o igual)
a >= b   # False (mayor o igual)
```

### Operadores Lógicos
```python
a, b = True, False

a and b  # False
a or b   # True
not a    # False
```

---

## Estructuras de Control

### Condicionales
```python
edad = 18

# If simple
if edad >= 18:
    print("Eres mayor de edad")

# If-else
if edad >= 18:
    print("Eres mayor de edad")
else:
    print("Eres menor de edad")

# If-elif-else
if edad < 13:
    print("Niño")
elif edad < 18:
    print("Adolescente")
else:
    print("Adulto")

# Operador ternario
estado = "mayor" if edad >= 18 else "menor"
```

### Bucles For
```python
# Iterar sobre una secuencia
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# Iterar sobre una lista
frutas = ["manzana", "banana", "naranja"]
for fruta in frutas:
    print(fruta)

# Enumerate (obtener índice y valor)
for indice, fruta in enumerate(frutas):
    print(f"{indice}: {fruta}")

# Range con parámetros
for i in range(2, 10, 2):  # inicio, fin, paso
    print(i)  # 2, 4, 6, 8
```

### Bucles While
```python
contador = 0
while contador < 5:
    print(contador)
    contador += 1

# While con else
numero = 1
while numero <= 3:
    print(numero)
    numero += 1
else:
    print("Bucle terminado")
```

### Control de Flujo
```python
# Break
for i in range(10):
    if i == 5:
        break
    print(i)  # 0, 1, 2, 3, 4

# Continue
for i in range(5):
    if i == 2:
        continue
    print(i)  # 0, 1, 3, 4

# Pass (placeholder)
for i in range(3):
    pass  # No hace nada, útil para código futuro
```

---

## Estructuras de Datos

### Listas
```python
# Creación
numeros = [1, 2, 3, 4, 5]
mixta = [1, "texto", 3.14, True]
vacia = []
userMock = [{"id": 1, "name": "Frank GP"}]

# Acceso
print(numeros[0])   # 1 (primer elemento)
print(numeros[-1])  # 5 (último elemento)
print(numeros[1:3]) # [2, 3] (slice)

# Métodos útiles
numeros.append(6)        # Agregar al final
numeros.insert(0, 0)     # Insertar en posición
numeros.remove(3)        # Eliminar valor específico
ultimo = numeros.pop()   # Eliminar y retornar último
numeros.extend([7, 8])   # Extender con otra lista
numeros.sort()           # Ordenar
numeros.reverse()        # Invertir

# List comprehensions
cuadrados = [x**2 for x in range(5)]  # [0, 1, 4, 9, 16]
pares = [x for x in range(10) if x % 2 == 0]  # [0, 2, 4, 6, 8]

# Funciones
item = next(iter(numeros))  # Obtener el primer elemento
user = next((u for u in userMock if u["id"] == 1), None)
```

### Tuplas
```python
# Creación (inmutables)
coordenadas = (10, 20)
colores = ("rojo", "verde", "azul")
tupla_vacia = ()
un_elemento = (42,)  # Nota la coma

# Acceso
print(coordenadas[0])  # 10
x, y = coordenadas     # Desempaquetado

# Métodos
print(colores.count("rojo"))  # 1
print(colores.index("verde")) # 1
```

### Diccionarios
```python
# Creación
persona = {
    "nombre": "Ana",
    "edad": 30,
    "ciudad": "Madrid"
}

# Acceso
print(persona["nombre"])           # "Ana"
print(persona.get("edad"))         # 30
print(persona.get("telefono", "")) # "" (valor por defecto)

# Modificación
persona["edad"] = 31
persona["telefono"] = "123-456-789"

# Métodos útiles
persona.keys()    # Claves
persona.values()  # Valores
persona.items()   # Pares clave-valor

# Iteración
for clave, valor in persona.items():
    print(f"{clave}: {valor}")

# Dictionary comprehension
cuadrados = {x: x**2 for x in range(5)}  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
```

### Sets
```python
# Creación (elementos únicos)
numeros = {1, 2, 3, 4, 5}
conjunto_vacio = set()

# Operaciones
numeros.add(6)      # Agregar elemento
numeros.remove(3)   # Eliminar elemento
numeros.discard(10) # Eliminar sin error si no existe

# Operaciones de conjuntos
set1 = {1, 2, 3}
set2 = {3, 4, 5}

union = set1 | set2           # {1, 2, 3, 4, 5}
interseccion = set1 & set2    # {3}
diferencia = set1 - set2      # {1, 2}
```

---

## Funciones

### Definición Básica
```python
def saludar():
    print("¡Hola!")

def saludar_persona(nombre):
    return f"¡Hola, {nombre}!"

def sumar(a, b):
    return a + b

# Llamadas
saludar()                        # ¡Hola!
mensaje = saludar_persona("Ana") # ¡Hola, Ana!
resultado = sumar(5, 3)          # 8
```

### Parámetros Avanzados
```python
# Parámetros por defecto
def saludar(nombre, saludo="Hola"):
    return f"{saludo}, {nombre}!"

# Argumentos variables
def sumar_todos(*numeros):
    return sum(numeros)

# Argumentos con palabra clave
def crear_perfil(**datos):
    return datos

# Ejemplo de uso
print(saludar("Ana"))                    # Hola, Ana!
print(saludar("Juan", "Buenos días"))    # Buenos días, Juan!
print(sumar_todos(1, 2, 3, 4))          # 10
perfil = crear_perfil(nombre="Luis", edad=25, ciudad="Barcelona")
```

### Funciones Lambda
```python
# Función lambda simple
cuadrado = lambda x: x**2
print(cuadrado(5))  # 25

# Con map, filter, reduce
numeros = [1, 2, 3, 4, 5]
cuadrados = list(map(lambda x: x**2, numeros))  # [1, 4, 9, 16, 25]
pares = list(filter(lambda x: x % 2 == 0, numeros))  # [2, 4]

from functools import reduce
suma = reduce(lambda x, y: x + y, numeros)  # 15
```

### Decoradores
```python
def mi_decorador(func):
    def wrapper():
        print("Antes de la función")
        func()
        print("Después de la función")
    return wrapper

@mi_decorador
def mi_funcion():
    print("¡Hola desde la función!")

mi_funcion()
# Salida:
# Antes de la función
# ¡Hola desde la función!
# Después de la función
```

---

## Clases y Objetos

### Definición Básica
```python
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
    
    def saludar(self):
        return f"Hola, soy {self.nombre}"
    
    def cumplir_años(self):
        self.edad += 1

# Uso
persona1 = Persona("Ana", 25)
print(persona1.saludar())  # Hola, soy Ana
persona1.cumplir_años()
print(persona1.edad)       # 26
```

### Herencia
```python
class Animal:
    def __init__(self, nombre):
        self.nombre = nombre
    
    def hacer_sonido(self):
        pass

class Perro(Animal):
    def hacer_sonido(self):
        return "¡Guau!"

class Gato(Animal):
    def hacer_sonido(self):
        return "¡Miau!"

# Uso
mi_perro = Perro("Rex")
print(mi_perro.hacer_sonido())  # ¡Guau!
```

### Métodos Especiales
```python
class Punto:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        return f"Punto({self.x}, {self.y})"
    
    def __add__(self, otro):
        return Punto(self.x + otro.x, self.y + otro.y)
    
    def __eq__(self, otro):
        return self.x == otro.x and self.y == otro.y

# Uso
p1 = Punto(1, 2)
p2 = Punto(3, 4)
print(p1)        # Punto(1, 2)
p3 = p1 + p2     # Punto(4, 6)
print(p1 == p2)  # False
```

---

## Manejo de Archivos

### Lectura y Escritura Básica
```python
# Escribir archivo
with open("archivo.txt", "w") as archivo:
    archivo.write("Hola mundo\n")
    archivo.write("Segunda línea\n")

# Leer archivo completo
with open("archivo.txt", "r") as archivo:
    contenido = archivo.read()
    print(contenido)

# Leer línea por línea
with open("archivo.txt", "r") as archivo:
    for linea in archivo:
        print(linea.strip())

# Leer todas las líneas en una lista
with open("archivo.txt", "r") as archivo:
    lineas = archivo.readlines()
```

### Trabajar con JSON
```python
import json

# Escribir JSON
datos = {
    "nombre": "Ana",
    "edad": 30,
    "hobbies": ["leer", "programar"]
}

with open("datos.json", "w") as archivo:
    json.dump(datos, archivo, indent=2)

# Leer JSON
with open("datos.json", "r") as archivo:
    datos_cargados = json.load(archivo)
    print(datos_cargados["nombre"])  # Ana
```

### Trabajar con CSV
```python
import csv

# Escribir CSV
datos = [
    ["Nombre", "Edad", "Ciudad"],
    ["Ana", 30, "Madrid"],
    ["Juan", 25, "Barcelona"]
]

with open("personas.csv", "w", newline="") as archivo:
    escritor = csv.writer(archivo)
    escritor.writerows(datos)

# Leer CSV
with open("personas.csv", "r") as archivo:
    lector = csv.reader(archivo)
    for fila in lector:
        print(fila)
```

---

## Manejo de Excepciones

### Try-Except Básico
```python
try:
    numero = int(input("Ingresa un número: "))
    resultado = 10 / numero
    print(f"Resultado: {resultado}")
except ValueError:
    print("Error: Debes ingresar un número válido")
except ZeroDivisionError:
    print("Error: No se puede dividir por cero")
except Exception as e:
    print(f"Error inesperado: {e}")
```

### Try-Except-Else-Finally
```python
def dividir(a, b):
    try:
        resultado = a / b
    except ZeroDivisionError:
        print("Error: División por cero")
        return None
    else:
        print("División exitosa")
        return resultado
    finally:
        print("Operación completada")

# Uso
print(dividir(10, 2))  # 5.0
print(dividir(10, 0))  # None
```

### Excepciones Personalizadas
```python
class EdadInvalidaError(Exception):
    def __init__(self, edad, mensaje="Edad inválida"):
        self.edad = edad
        self.mensaje = mensaje
        super().__init__(self.mensaje)

def validar_edad(edad):
    if edad < 0 or edad > 150:
        raise EdadInvalidaError(edad, f"La edad {edad} no es válida")
    return True

# Uso
try:
    validar_edad(-5)
except EdadInvalidaError as e:
    print(f"Error: {e}")
```

---

## Módulos y Paquetes

### Importar Módulos
```python
# Importar módulo completo
import math
print(math.pi)

# Importar funciones específicas
from math import pi, sqrt
print(pi)
print(sqrt(16))

# Importar con alias
import math as m
print(m.cos(0))

# Importar todo (no recomendado)
from math import *
```

### Crear tu Propio Módulo
```python
# archivo: mi_modulo.py
def saludar(nombre):
    return f"¡Hola, {nombre}!"

PI = 3.14159

class Calculadora:
    def sumar(self, a, b):
        return a + b

# archivo: main.py
import mi_modulo

print(mi_modulo.saludar("Ana"))
calc = mi_modulo.Calculadora()
print(calc.sumar(5, 3))
```

### Paquetes
```
mi_paquete/
    __init__.py
    matematicas.py
    utilidades.py
```

```python
# mi_paquete/__init__.py
from .matematicas import sumar, restar
from .utilidades import imprimir_fecha

# Uso
from mi_paquete import sumar, imprimir_fecha
```

---

## Bibliotecas Útiles

### Biblioteca Estándar

#### datetime
```python
from datetime import datetime, date, timedelta

# Fecha y hora actual
ahora = datetime.now()
hoy = date.today()

# Formateo
fecha_formateada = ahora.strftime("%d/%m/%Y %H:%M:%S")

# Operaciones
mañana = hoy + timedelta(days=1)
hace_una_semana = hoy - timedelta(weeks=1)
```

#### os y pathlib
```python
import os
from pathlib import Path

# Información del sistema
print(os.getcwd())  # Directorio actual
print(os.listdir()) # Contenido del directorio

# Pathlib (más moderno)
ruta = Path("mi_archivo.txt")
if ruta.exists():
    contenido = ruta.read_text()
```

#### random
```python
import random

# Números aleatorios
numero = random.randint(1, 10)
decimal = random.random()
elemento = random.choice(["rojo", "verde", "azul"])

# Listas
lista = [1, 2, 3, 4, 5]
random.shuffle(lista)  # Mezclar
muestra = random.sample(lista, 3)  # Muestra sin reemplazo
```

### Bibliotecas Externas Populares

#### requests (HTTP)
```python
import requests

# GET request
response = requests.get("https://api.github.com/users/octocat")
if response.status_code == 200:
    data = response.json()
    print(data["name"])

# POST request
data = {"clave": "valor"}
response = requests.post("https://httpbin.org/post", json=data)
```

#### pandas (Análisis de datos)
```python
import pandas as pd

# Crear DataFrame
df = pd.DataFrame({
    "nombre": ["Ana", "Juan", "Luis"],
    "edad": [25, 30, 35],
    "ciudad": ["Madrid", "Barcelona", "Sevilla"]
})

# Operaciones básicas
print(df.head())
print(df.describe())
filtrado = df[df["edad"] > 28]
```

#### matplotlib (Gráficos)
```python
import matplotlib.pyplot as plt

# Gráfico simple
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]
plt.plot(x, y)
plt.xlabel("X")
plt.ylabel("Y")
plt.title("Mi Gráfico")
plt.show()
```

---

## Buenas Prácticas

### Estilo de Código (PEP 8)
```python
# Nombres descriptivos
def calcular_area_rectangulo(largo, ancho):
    return largo * ancho

# Constantes en mayúsculas
PI = 3.14159
MAX_INTENTOS = 3

# Clases en CamelCase
class ManejadorArchivos:
    pass

# Variables y funciones en snake_case
nombre_usuario = "ana"
edad_actual = 25
```

### Documentación
```python
def calcular_promedio(numeros):
    """
    Calcula el promedio de una lista de números.
    
    Args:
        numeros (list): Lista de números.
    
    Returns:
        float: El promedio de los números.
    
    Raises:
        ValueError: Si la lista está vacía.
    """
    if not numeros:
        raise ValueError("La lista no puede estar vacía")
    
    return sum(numeros) / len(numeros)
```

### Testing
```python
import unittest

class TestCalculadora(unittest.TestCase):
    def test_suma(self):
        resultado = sumar(2, 3)
        self.assertEqual(resultado, 5)
    
    def test_division_por_cero(self):
        with self.assertRaises(ZeroDivisionError):
            dividir(10, 0)

if __name__ == "__main__":
    unittest.main()
```

---

## Comandos Útiles de Terminal

```bash
# Ejecutar script
python mi_script.py

# Instalar paquetes
pip install requests pandas matplotlib

# Ver paquetes instalados
pip list

# Crear entorno virtual
python -m venv mi_entorno

# Activar entorno virtual (Windows)
mi_entorno\Scripts\activate

# Activar entorno virtual (Linux/Mac)
source mi_entorno/bin/activate

# Desactivar entorno virtual
deactivate

# Generar requirements.txt
pip freeze > requirements.txt

# Instalar desde requirements.txt
pip install -r requirements.txt
```

---

## Recursos Adicionales

### Documentación Oficial
- [Python.org](https://docs.python.org/3/)
- [PEP 8 - Style Guide](https://pep8.org/)

### Herramientas de Desarrollo
- **IDEs**: PyCharm, VS Code, Sublime Text
- **Jupyter Notebooks**: Para análisis de datos
- **Git**: Control de versiones

### Comunidades
- Stack Overflow
- Reddit: r/Python, r/learnpython
- Discord: Python Discord Server

---

*Esta documentación cubre los conceptos fundamentales de Python. Para casos específicos, siempre consulta la documentación oficial y las mejores prácticas de la comunidad.*