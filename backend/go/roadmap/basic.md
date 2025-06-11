# Documentación Básica de Go

## ¿Qué es Go?

Go es un lenguaje de programación creado por Google. Es simple, rápido y perfecto para principiantes.

---

## Instalación

1. Ve a https://golang.org/dl/
2. Descarga e instala Go
3. Verifica la instalación:
```bash
go version
```

---

## Tu Primer Programa

```go
package main

import "fmt"

func main() {
    fmt.Println("¡Hola mundo!")
}
```

Para ejecutarlo:
```bash
go run main.go
```

---

## Variables

### Declarar variables
```go
// Forma explícita
var nombre string = "Juan"
var edad int = 25

// Forma corta (solo dentro de funciones)
nombre := "Juan"
edad := 25

// Múltiples variables
var nombre, apellido string = "Juan", "Pérez"
```

### Tipos básicos
```go
var entero int = 42
var decimal float64 = 3.14
var texto string = "Hola"
var booleano bool = true
```

---

## Constantes

```go
const PI = 3.14159
const MENSAJE = "Hola mundo"
```

---

## Entrada y Salida

```go
package main

import "fmt"

func main() {
    // Imprimir
    fmt.Println("Hola mundo")
    fmt.Printf("Mi nombre es %s y tengo %d años\n", "Juan", 25)
    
    // Leer entrada del usuario
    var nombre string
    fmt.Print("Ingresa tu nombre: ")
    fmt.Scan(&nombre)
    fmt.Println("Hola", nombre)
}
```

---

## Operadores

### Aritméticos
```go
a := 10
b := 3

suma := a + b      // 13
resta := a - b     // 7
multiplicacion := a * b  // 30
division := a / b  // 3
modulo := a % b    // 1
```

### Comparación
```go
a := 10
b := 5

fmt.Println(a == b)  // false (igual)
fmt.Println(a != b)  // true (diferente)
fmt.Println(a > b)   // true (mayor)
fmt.Println(a < b)   // false (menor)
```

---

## Condicionales

### if-else
```go
edad := 18

if edad >= 18 {
    fmt.Println("Eres mayor de edad")
} else {
    fmt.Println("Eres menor de edad")
}

// if con múltiples condiciones
if edad >= 18 && edad < 65 {
    fmt.Println("Puedes trabajar")
} else if edad >= 65 {
    fmt.Println("Puedes jubilarte")
} else {
    fmt.Println("Eres muy joven para trabajar")
}
```

### switch
```go
dia := "lunes"

switch dia {
case "lunes":
    fmt.Println("Inicio de semana")
case "viernes":
    fmt.Println("¡Por fin viernes!")
case "sábado", "domingo":
    fmt.Println("Fin de semana")
default:
    fmt.Println("Día normal")
}
```

---

## Bucles

Go solo tiene un tipo de bucle: `for`

```go
// Bucle clásico
for i := 0; i < 5; i++ {
    fmt.Println(i)
}

// Bucle "mientras" (while)
contador := 0
for contador < 5 {
    fmt.Println(contador)
    contador++
}

// Bucle infinito
for {
    fmt.Println("Esto se repite para siempre")
    break  // Usa break para salir
}
```

---

## Funciones

### Función básica
```go
func saludar() {
    fmt.Println("¡Hola!")
}

func main() {
    saludar()  // Llamar la función
}
```

### Función con parámetros
```go
func saludarPersona(nombre string) {
    fmt.Println("¡Hola,", nombre + "!")
}

func main() {
    saludarPersona("Juan")
}
```

### Función que retorna un valor
```go
func sumar(a, b int) int {
    return a + b
}

func main() {
    resultado := sumar(5, 3)
    fmt.Println("La suma es:", resultado)
}
```

### Función con múltiples valores de retorno
```go
func dividir(a, b float64) (float64, string) {
    if b == 0 {
        return 0, "Error: división por cero"
    }
    return a / b, "OK"
}

func main() {
    resultado, mensaje := dividir(10, 2)
    fmt.Println("Resultado:", resultado)
    fmt.Println("Estado:", mensaje)
}
```

---

## Arrays y Slices

### Arrays (tamaño fijo)
```go
// Declarar array
var numeros [5]int
numeros[0] = 10
numeros[1] = 20

// Array con valores iniciales
colores := [3]string{"rojo", "verde", "azul"}

// Imprimir array
for i := 0; i < len(colores); i++ {
    fmt.Println(colores[i])
}
```

### Slices (tamaño variable)
```go
// Crear slice
var frutas []string
frutas = append(frutas, "manzana")
frutas = append(frutas, "banana")

// Slice con valores iniciales
numeros := []int{1, 2, 3, 4, 5}

// Recorrer slice con range
for i, numero := range numeros {
    fmt.Printf("Posición %d: %d\n", i, numero)
}

// Solo valores (ignorar índice)
for _, numero := range numeros {
    fmt.Println(numero)
}
```

---

## Maps (Diccionarios)

```go
// Crear map
edades := make(map[string]int)
edades["Juan"] = 25
edades["Ana"] = 30

// Map con valores iniciales
colores := map[string]string{
    "rojo":  "#FF0000",
    "verde": "#00FF00",
    "azul":  "#0000FF",
}

// Acceder a valores
fmt.Println(edades["Juan"])

// Verificar si existe una clave
edad, existe := edades["Pedro"]
if existe {
    fmt.Println("Pedro tiene", edad, "años")
} else {
    fmt.Println("Pedro no está en el map")
}

// Recorrer map
for nombre, edad := range edades {
    fmt.Printf("%s tiene %d años\n", nombre, edad)
}

// Eliminar elemento
delete(edades, "Juan")
```

---

## Structs (Estructuras)

```go
// Definir struct
type Persona struct {
    Nombre string
    Edad   int
    Email  string
}

func main() {
    // Crear persona
    var p1 Persona
    p1.Nombre = "Juan"
    p1.Edad = 25
    p1.Email = "juan@email.com"
    
    // Forma más corta
    p2 := Persona{
        Nombre: "Ana",
        Edad:   30,
        Email:  "ana@email.com",
    }
    
    // Imprimir
    fmt.Printf("Persona 1: %+v\n", p1)
    fmt.Println("Nombre:", p2.Nombre)
}
```

---

## Manejo de Errores

```go
package main

import (
    "errors"
    "fmt"
)

func dividir(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("no se puede dividir por cero")
    }
    return a / b, nil
}

func main() {
    resultado, err := dividir(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Resultado:", resultado)
    }
}
```

---

## Packages (Paquetes)

### Usar packages estándar
```go
package main

import (
    "fmt"     // Para imprimir
    "math"    // Para funciones matemáticas
    "strings" // Para manipular strings
    "time"    // Para fecha y hora
)

func main() {
    // fmt
    fmt.Println("Hola mundo")
    
    // math
    fmt.Println("Raíz cuadrada de 16:", math.Sqrt(16))
    
    // strings
    texto := "Hola Mundo"
    fmt.Println("En mayúsculas:", strings.ToUpper(texto))
    
    // time
    ahora := time.Now()
    fmt.Println("Fecha actual:", ahora.Format("2006-01-02 15:04:05"))
}
```

---

## Ejemplos Prácticos

### Calculadora Simple
```go
package main

import "fmt"

func main() {
    var num1, num2 float64
    var operacion string
    
    fmt.Print("Ingresa el primer número: ")
    fmt.Scan(&num1)
    
    fmt.Print("Ingresa la operación (+, -, *, /): ")
    fmt.Scan(&operacion)
    
    fmt.Print("Ingresa el segundo número: ")
    fmt.Scan(&num2)
    
    var resultado float64
    
    switch operacion {
    case "+":
        resultado = num1 + num2
    case "-":
        resultado = num1 - num2
    case "*":
        resultado = num1 * num2
    case "/":
        if num2 != 0 {
            resultado = num1 / num2
        } else {
            fmt.Println("Error: División por cero")
            return
        }
    default:
        fmt.Println("Operación no válida")
        return
    }
    
    fmt.Printf("%.2f %s %.2f = %.2f\n", num1, operacion, num2, resultado)
}
```

### Lista de Tareas
```go
package main

import "fmt"

type Tarea struct {
    ID          int
    Descripcion string
    Completada  bool
}

var tareas []Tarea
var siguienteID = 1

func agregarTarea(descripcion string) {
    tarea := Tarea{
        ID:          siguienteID,
        Descripcion: descripcion,
        Completada:  false,
    }
    tareas = append(tareas, tarea)
    siguienteID++
    fmt.Println("Tarea agregada:", descripcion)
}

func mostrarTareas() {
    if len(tareas) == 0 {
        fmt.Println("No hay tareas")
        return
    }
    
    fmt.Println("\n--- Lista de Tareas ---")
    for _, tarea := range tareas {
        estado := "Pendiente"
        if tarea.Completada {
            estado = "Completada"
        }
        fmt.Printf("%d. %s [%s]\n", tarea.ID, tarea.Descripcion, estado)
    }
}

func main() {
    agregarTarea("Estudiar Go")
    agregarTarea("Hacer ejercicio")
    agregarTarea("Leer un libro")
    
    mostrarTareas()
}
```

### Contador de Palabras
```go
package main

import (
    "fmt"
    "strings"
)

func contarPalabras(texto string) map[string]int {
    palabras := strings.Fields(strings.ToLower(texto))
    contador := make(map[string]int)
    
    for _, palabra := range palabras {
        contador[palabra]++
    }
    
    return contador
}

func main() {
    texto := "Hola mundo. Este es un ejemplo de Go. Go es genial."
    
    contador := contarPalabras(texto)
    
    fmt.Println("Contador de palabras:")
    for palabra, count := range contador {
        fmt.Printf("%s: %d\n", palabra, count)
    }
}
```

---

## Comandos Básicos de Go

```bash
# Ejecutar programa
go run main.go

# Compilar programa
go build main.go

# Formatear código
go fmt main.go

# Crear módulo
go mod init mi-proyecto

# Instalar dependencia
go get github.com/paquete/nombre

# Ver documentación
go doc fmt.Println
```

---

## Consejos para Principiantes

1. **Practica todos los días**: Aunque sea 15-30 minutos
2. **Escribe código simple**: No te compliques al principio
3. **Lee mensajes de error**: Go tiene mensajes de error muy claros
4. **Usa `go fmt`**: Siempre formatea tu código
5. **Experimenta**: Modifica los ejemplos y ve qué pasa

---

## Próximos Pasos

Una vez que domines lo básico, puedes aprender:
- Interfaces
- Concurrencia (goroutines)
- Desarrollo web
- Bases de datos
- Testing

---

## Recursos Útiles

- [Tour of Go](https://tour.golang.org/) - Tutorial interactivo
- [Go by Example](https://gobyexample.com/) - Ejemplos prácticos
- [Golang.org](https://golang.org/) - Sitio oficial