# Documentación Completa de Go

## Tabla de Contenidos
1. [Introducción](#introducción)
2. [Instalación y Configuración](#instalación-y-configuración)
3. [Sintaxis Básica](#sintaxis-básica)
4. [Tipos de Datos](#tipos-de-datos)
5. [Variables y Constantes](#variables-y-constantes)
6. [Operadores](#operadores)
7. [Estructuras de Control](#estructuras-de-control)
8. [Funciones](#funciones)
9. [Arrays y Slices](#arrays-y-slices)
10. [Maps](#maps)
11. [Structs](#structs)
12. [Punteros](#punteros)
13. [Interfaces](#interfaces)
14. [Métodos](#métodos)
15. [Packages](#packages)
16. [Manejo de Errores](#manejo-de-errores)
17. [Concurrencia](#concurrencia)
18. [Testing](#testing)
19. [Ejemplos Prácticos](#ejemplos-prácticos)

---

## Introducción

Go es un lenguaje de programación de código abierto desarrollado por Google. Es compilado, con tipado estático, y diseñado para ser simple, eficiente y escalable.

### Características principales:
- **Compilado**: Se compila a código máquina nativo
- **Tipado estático**: Los tipos se verifican en tiempo de compilación
- **Garbage Collector**: Manejo automático de memoria
- **Concurrencia**: Goroutines y channels para programación concurrente
- **Simplicidad**: Sintaxis limpia y minimalista

---

## Instalación y Configuración

### Instalación
```bash
# Descargar desde https://golang.org/dl/
# En Linux/Mac con gestor de paquetes:
brew install go        # macOS
sudo apt install golang-go  # Ubuntu/Debian
```

### Configuración
```bash
# Verificar instalación
go version

# Variables de entorno importantes
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin
```

### Estructura de proyecto
```
proyecto/
├── go.mod
├── main.go
├── pkg/
│   └── utils/
└── cmd/
    └── app/
```

---

## Sintaxis Básica

### Programa básico
```go
package main

import "fmt"

func main() {
    fmt.Println("¡Hola, mundo!")
}
```

### Comentarios
```go
// Comentario de una línea

/*
Comentario
de múltiples
líneas
*/
```

### Identificadores
- Deben comenzar con letra o underscore
- Case-sensitive
- Mayúscula inicial = exportado públicamente
- Minúscula inicial = privado al package

---

## Tipos de Datos

### Tipos Numéricos
```go
// Enteros
var i int = 42
var i8 int8 = 127
var i16 int16 = 32767
var i32 int32 = 2147483647
var i64 int64 = 9223372036854775807

// Enteros sin signo
var ui uint = 42
var ui8 uint8 = 255
var ui16 uint16 = 65535
var ui32 uint32 = 4294967295
var ui64 uint64 = 18446744073709551615

// Flotantes
var f32 float32 = 3.14
var f64 float64 = 3.141592653589793

// Complejos
var c64 complex64 = 1 + 2i
var c128 complex128 = 1 + 2i
```

### Tipos de Texto
```go
// String
var s string = "Hola mundo"
var s2 string = `String 
multilínea`

// Rune (carácter Unicode)
var r rune = 'A'  // equivale a int32
```

### Tipo Booleano
```go
var b bool = true
var b2 bool = false
```

### Otros tipos
```go
// Byte (alias de uint8)
var bt byte = 255

// Puntero
var p *int
```

---

## Variables y Constantes

### Declaración de Variables
```go
// Forma explícita
var nombre string = "Juan"
var edad int = 25

// Inferencia de tipo
var nombre = "Juan"
var edad = 25

// Declaración múltiple
var nombre, apellido string = "Juan", "Pérez"
var (
    nombre   = "Juan"
    edad     = 25
    activo   = true
)

// Declaración corta (solo dentro de funciones)
nombre := "Juan"
edad := 25
```

### Constantes
```go
const PI = 3.14159
const (
    A = 1
    B = 2
    C = 3
)

// Constantes con iota
const (
    Lunes = iota    // 0
    Martes          // 1
    Miércoles       // 2
    Jueves          // 3
    Viernes         // 4
)
```

### Valor Zero
```go
var i int       // 0
var f float64   // 0.0
var b bool      // false
var s string    // ""
var p *int      // nil
```

---

## Operadores

### Aritméticos
```go
a := 10
b := 3

suma := a + b      // 13
resta := a - b     // 7
mult := a * b      // 30
div := a / b       // 3
mod := a % b       // 1

// Incremento/Decremento
a++  // a = a + 1
b--  // b = b - 1
```

### Comparación
```go
a := 10
b := 5

igual := a == b      // false
diferente := a != b  // true
mayor := a > b       // true
menor := a < b       // false
mayorIgual := a >= b // true
menorIgual := a <= b // false
```

### Lógicos
```go
a := true
b := false

and := a && b  // false
or := a || b   // true
not := !a      // false
```

### Bitwise
```go
a := 60  // 111100
b := 13  // 001101

and := a & b   // 001100 = 12
or := a | b    // 111101 = 61
xor := a ^ b   // 110001 = 49
not := ^a      // -61
left := a << 2 // 240
right := a >> 2 // 15
```

---

## Estructuras de Control

### Condicionales

#### if-else
```go
edad := 18

if edad >= 18 {
    fmt.Println("Es mayor de edad")
} else if edad >= 16 {
    fmt.Println("Puede conducir")
} else {
    fmt.Println("Es menor de edad")
}

// if con declaración
if edad := getEdad(); edad >= 18 {
    fmt.Println("Mayor de edad:", edad)
}
```

#### switch
```go
dia := "lunes"

switch dia {
case "lunes":
    fmt.Println("Inicio de semana")
case "viernes":
    fmt.Println("Fin de semana laboral")
case "sábado", "domingo":
    fmt.Println("Fin de semana")
default:
    fmt.Println("Día normal")
}

// Switch sin expresión
switch {
case edad < 13:
    fmt.Println("Niño")
case edad < 20:
    fmt.Println("Adolescente")
default:
    fmt.Println("Adulto")
}
```

### Bucles

#### for (único tipo de bucle en Go)
```go
// Bucle clásico
for i := 0; i < 10; i++ {
    fmt.Println(i)
}

// Mientras (while)
i := 0
for i < 10 {
    fmt.Println(i)
    i++
}

// Bucle infinito
for {
    // código
    if condicion {
        break
    }
}

// Range (para arrays, slices, maps, channels)
numeros := []int{1, 2, 3, 4, 5}
for i, valor := range numeros {
    fmt.Printf("Índice: %d, Valor: %d\n", i, valor)
}

// Solo valores
for _, valor := range numeros {
    fmt.Println(valor)
}

// Solo índices
for i := range numeros {
    fmt.Println(i)
}
```

### Control de flujo
```go
for i := 0; i < 10; i++ {
    if i == 3 {
        continue  // Salta a la siguiente iteración
    }
    if i == 8 {
        break     // Sale del bucle
    }
    fmt.Println(i)
}
```

---

## Funciones

### Declaración básica
```go
func saludar() {
    fmt.Println("¡Hola!")
}

func saludarPersona(nombre string) {
    fmt.Println("¡Hola,", nombre + "!")
}

func sumar(a, b int) int {
    return a + b
}
```

### Múltiples valores de retorno
```go
func dividir(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("división por cero")
    }
    return a / b, nil
}

// Uso
resultado, err := dividir(10, 2)
if err != nil {
    fmt.Println("Error:", err)
} else {
    fmt.Println("Resultado:", resultado)
}
```

### Valores de retorno nombrados
```go
func calcular(a, b int) (suma, resta int) {
    suma = a + b
    resta = a - b
    return  // return desnudo
}
```

### Funciones variádicas
```go
func sumarTodos(nums ...int) int {
    total := 0
    for _, num := range nums {
        total += num
    }
    return total
}

// Uso
fmt.Println(sumarTodos(1, 2, 3, 4, 5))  // 15
```

### Funciones como valores
```go
func main() {
    // Asignar función a variable
    operacion := sumar
    resultado := operacion(5, 3)
    
    // Función anónima
    cuadrado := func(x int) int {
        return x * x
    }
    fmt.Println(cuadrado(5))  // 25
}
```

### Closures
```go
func contador() func() int {
    i := 0
    return func() int {
        i++
        return i
    }
}

func main() {
    siguiente := contador()
    fmt.Println(siguiente())  // 1
    fmt.Println(siguiente())  // 2
    fmt.Println(siguiente())  // 3
}
```

### Defer
```go
func ejemplo() {
    defer fmt.Println("Este se ejecuta al final")
    fmt.Println("Este se ejecuta primero")
    
    // Múltiples defer se ejecutan en orden LIFO
    defer fmt.Println("Tercero")
    defer fmt.Println("Segundo")
    defer fmt.Println("Primero")
}
```

---

## Arrays y Slices

### Arrays
```go
// Declaración
var arr [5]int
var arr2 = [5]int{1, 2, 3, 4, 5}
var arr3 = [...]int{1, 2, 3, 4, 5}  // Tamaño automático

// Acceso
arr[0] = 10
fmt.Println(arr[0])

// Longitud
fmt.Println(len(arr))
```

### Slices
```go
// Declaración
var slice []int
var slice2 = []int{1, 2, 3, 4, 5}

// Crear con make
slice3 := make([]int, 5)     // longitud 5, capacidad 5
slice4 := make([]int, 5, 10) // longitud 5, capacidad 10

// Desde array
arr := [5]int{1, 2, 3, 4, 5}
slice5 := arr[1:4]  // [2, 3, 4]

// Propiedades
fmt.Println(len(slice2))  // longitud
fmt.Println(cap(slice2))  // capacidad
```

### Operaciones con slices
```go
slice := []int{1, 2, 3}

// Append
slice = append(slice, 4, 5, 6)

// Append otro slice
otro := []int{7, 8, 9}
slice = append(slice, otro...)

// Copy
destino := make([]int, len(slice))
copy(destino, slice)

// Slicing
subslice := slice[1:4]    // elementos 1, 2, 3
inicio := slice[:3]       // primeros 3 elementos
final := slice[2:]        // desde elemento 2 hasta el final
```

### Slices bidimensionales
```go
// Crear matriz
matriz := make([][]int, 3)
for i := range matriz {
    matriz[i] = make([]int, 4)
}

// Inicializar con valores
matriz2 := [][]int{
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9},
}
```

---

## Maps

### Declaración y uso
```go
// Declaración
var m map[string]int
m = make(map[string]int)

// Declaración con make
m2 := make(map[string]int)

// Declaración con valores
m3 := map[string]int{
    "manzanas": 5,
    "naranjas": 10,
}

// Asignación
m2["clave"] = 42

// Acceso
valor := m2["clave"]
fmt.Println(valor)
```

### Operaciones con maps
```go
m := map[string]int{
    "a": 1,
    "b": 2,
    "c": 3,
}

// Verificar existencia
valor, existe := m["a"]
if existe {
    fmt.Println("Valor:", valor)
}

// Eliminar
delete(m, "b")

// Longitud
fmt.Println(len(m))

// Iterar
for clave, valor := range m {
    fmt.Printf("%s: %d\n", clave, valor)
}

// Solo claves
for clave := range m {
    fmt.Println(clave)
}
```

---

## Structs

### Definición y uso
```go
// Definir struct
type Persona struct {
    Nombre string `json:"nombre"`
    Edad   int    `json:"edad"`
    Email  string `json:"email"`
}

func main() {
    // Struct a JSON
    p := Persona{
        Nombre: "Juan",
        Edad:   30,
        Email:  "juan@email.com",
    }
    
    jsonData, err := json.Marshal(p)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println(string(jsonData))
    
    // JSON a struct
    jsonString := `{"nombre":"Ana","edad":25,"email":"ana@email.com"}`
    var p2 Persona
    
    err = json.Unmarshal([]byte(jsonString), &p2)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Printf("%+v\n", p2)
}
```

### Lectura de archivos
```go
package main

import (
    "bufio"
    "fmt"
    "io/ioutil"
    "os"
)

func leerArchivoCompleto(nombre string) {
    data, err := ioutil.ReadFile(nombre)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println(string(data))
}

func leerArchivoLinea(nombre string) {
    file, err := os.Open(nombre)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    defer file.Close()
    
    scanner := bufio.NewScanner(file)
    for scanner.Scan() {
        fmt.Println(scanner.Text())
    }
    
    if err := scanner.Err(); err != nil {
        fmt.Println("Error:", err)
    }
}

func escribirArchivo(nombre, contenido string) {
    err := ioutil.WriteFile(nombre, []byte(contenido), 0644)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println("Archivo escrito exitosamente")
}
```

### Base de datos con SQL
```go
package main

import (
    "database/sql"
    "fmt"
    "log"
    
    _ "github.com/go-sql-driver/mysql"
)

type Usuario struct {
    ID     int
    Nombre string
    Email  string
}

func main() {
    // Conectar a la base de datos
    db, err := sql.Open("mysql", "user:password@tcp(localhost:3306)/dbname")
    if err != nil {
        log.Fatal(err)
    }
    defer db.Close()
    
    // Verificar conexión
    err = db.Ping()
    if err != nil {
        log.Fatal(err)
    }
    
    // Insertar
    insertarUsuario(db, "Juan", "juan@email.com")
    
    // Consultar
    usuarios := obtenerUsuarios(db)
    for _, u := range usuarios {
        fmt.Printf("ID: %d, Nombre: %s, Email: %s\n", u.ID, u.Nombre, u.Email)
    }
}

func insertarUsuario(db *sql.DB, nombre, email string) {
    stmt, err := db.Prepare("INSERT INTO usuarios(nombre, email) VALUES(?, ?)")
    if err != nil {
        log.Fatal(err)
    }
    defer stmt.Close()
    
    _, err = stmt.Exec(nombre, email)
    if err != nil {
        log.Fatal(err)
    }
}

func obtenerUsuarios(db *sql.DB) []Usuario {
    rows, err := db.Query("SELECT id, nombre, email FROM usuarios")
    if err != nil {
        log.Fatal(err)
    }
    defer rows.Close()
    
    var usuarios []Usuario
    for rows.Next() {
        var u Usuario
        err := rows.Scan(&u.ID, &u.Nombre, &u.Email)
        if err != nil {
            log.Fatal(err)
        }
        usuarios = append(usuarios, u)
    }
    
    return usuarios
}
```

### CLI con flags
```go
package main

import (
    "flag"
    "fmt"
    "os"
)

func main() {
    // Definir flags
    var (
        nombre   = flag.String("nombre", "Mundo", "Nombre para saludar")
        edad     = flag.Int("edad", 0, "Edad de la persona")
        verbose  = flag.Bool("verbose", false, "Modo verbose")
        help     = flag.Bool("help", false, "Mostrar ayuda")
    )
    
    flag.Parse()
    
    if *help {
        flag.Usage()
        os.Exit(0)
    }
    
    if *verbose {
        fmt.Printf("Ejecutando con parámetros: nombre=%s, edad=%d\n", *nombre, *edad)
    }
    
    fmt.Printf("¡Hola, %s!\n", *nombre)
    if *edad > 0 {
        fmt.Printf("Tienes %d años.\n", *edad)
    }
}
```

### Middleware HTTP
```go
package main

import (
    "fmt"
    "log"
    "net/http"
    "time"
)

// Middleware de logging
func loggingMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        start := time.Now()
        next.ServeHTTP(w, r)
        log.Printf("%s %s %v", r.Method, r.URL.Path, time.Since(start))
    })
}

// Middleware de autenticación
func authMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        token := r.Header.Get("Authorization")
        if token != "Bearer secret-token" {
            http.Error(w, "No autorizado", http.StatusUnauthorized)
            return
        }
        next.ServeHTTP(w, r)
    })
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintln(w, "¡Bienvenido a la página principal!")
}

func protectedHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintln(w, "Esta es una página protegida")
}

func main() {
    mux := http.NewServeMux()
    
    mux.HandleFunc("/", homeHandler)
    mux.Handle("/protected", authMiddleware(http.HandlerFunc(protectedHandler)))
    
    // Aplicar logging a todas las rutas
    handler := loggingMiddleware(mux)
    
    log.Println("Servidor iniciado en :8080")
    http.ListenAndServe(":8080", handler)
}
```

---

## Comandos útiles de Go

### Comandos básicos
```bash
# Ejecutar programa
go run main.go

# Compilar
go build main.go
go build -o mi-programa main.go

# Instalar dependencias
go mod init mi-proyecto
go mod tidy
go get github.com/gorilla/mux

# Formatear código
go fmt ./...

# Verificar código
go vet ./...

# Tests
go test ./...
go test -v
go test -cover

# Benchmarks
go test -bench=.

# Documentación
go doc fmt.Println
godoc -http=:6060

# Información del entorno
go env
go version
```

### Módulos Go
```bash
# Crear módulo
go mod init example.com/mi-proyecto

# Agregar dependencia
go get github.com/gin-gonic/gin

# Actualizar dependencias
go get -u

# Limpiar dependencias no usadas
go mod tidy

# Verificar módulos
go mod verify

# Descargar dependencias
go mod download
```

---

## Mejores Prácticas

### Nomenclatura
- **Packages**: nombres cortos, en minúscula, sin guiones bajos
- **Variables**: camelCase para locales, PascalCase para exportadas
- **Constantes**: CamelCase o SCREAMING_SNAKE_CASE
- **Interfaces**: terminan en -er cuando son de un método

### Organización del código
```
proyecto/
├── cmd/                 # Aplicaciones principales
│   └── servidor/
│       └── main.go
├── pkg/                 # Bibliotecas reutilizables
│   ├── auth/
│   └── database/
├── internal/            # Código privado del proyecto
│   ├── handlers/
│   └── models/
├── web/                 # Assets web
├── configs/             # Archivos de configuración
├── scripts/             # Scripts de build y deployment
├── go.mod
├── go.sum
└── README.md
```

### Manejo de errores
```go
// ✅ Bueno
func procesar() error {
    if err := operacion(); err != nil {
        return fmt.Errorf("error procesando: %w", err)
    }
    return nil
}

// ❌ Malo
func procesar() error {
    err := operacion()
    if err != nil {
        panic(err)  // No usar panic para errores normales
    }
    return nil
}
```

### Concurrencia
```go
// ✅ Bueno - usar context para cancelación
func worker(ctx context.Context) error {
    for {
        select {
        case <-ctx.Done():
            return ctx.Err()
        default:
            // hacer trabajo
        }
    }
}

// ✅ Bueno - usar WaitGroup para sincronización
func procesarConcurrente(items []string) {
    var wg sync.WaitGroup
    for _, item := range items {
        wg.Add(1)
        go func(item string) {
            defer wg.Done()
            procesar(item)
        }(item)
    }
    wg.Wait()
}
```

---

## Packages Estándar Importantes

### fmt - Formateo
```go
fmt.Print("Hola")
fmt.Println("Hola")
fmt.Printf("Nombre: %s, Edad: %d\n", nombre, edad)
fmt.Sprintf("Formato: %s", valor)
```

### strings - Manipulación de strings
```go
strings.Contains("hola mundo", "mundo")  // true
strings.Split("a,b,c", ",")              // ["a", "b", "c"]
strings.Join([]string{"a", "b"}, "-")    // "a-b"
strings.ToUpper("hola")                  // "HOLA"
strings.TrimSpace("  hola  ")            // "hola"
```

### strconv - Conversiones
```go
strconv.Atoi("123")          // 123, nil
strconv.Itoa(123)            // "123"
strconv.ParseFloat("3.14", 64) // 3.14, nil
strconv.FormatFloat(3.14, 'f', 2, 64) // "3.14"
```

### time - Tiempo
```go
now := time.Now()
fmt.Println(now.Format("2006-01-02 15:04:05"))

tiempo := time.Date(2023, 12, 25, 10, 30, 0, 0, time.UTC)
duracion := 5 * time.Second
time.Sleep(duracion)
```

### os - Sistema operativo
```go
os.Getenv("HOME")           // Variable de entorno
os.Args                     // Argumentos de línea de comandos
os.Exit(1)                  // Salir con código
```

### io - Entrada/Salida
```go
io.Copy(dst, src)           // Copiar de src a dst
io.ReadAll(reader)          // Leer todo el contenido
```

---

## Recursos Adicionales

### Documentación Oficial
- [golang.org](https://golang.org/) - Sitio oficial
- [Tour of Go](https://tour.golang.org/) - Tutorial interactivo
- [Effective Go](https://golang.org/doc/effective_go.html) - Mejores prácticas
- [Go by Example](https://gobyexample.com/) - Ejemplos prácticos

### Herramientas Útiles
- **gofmt**: Formatear código
- **goimports**: Gestionar imports automáticamente
- **golint**: Linter para Go
- **go vet**: Análisis estático
- **delve**: Debugger para Go

### Librerías Populares
- **Gin**: Framework web rápido
- **Echo**: Framework web minimalista
- **GORM**: ORM para Go
- **Cobra**: CLI applications
- **Viper**: Gestión de configuración
- **Testify**: Testing utilities

Esta documentación cubre los aspectos fundamentales y avanzados de Go. Recuerda practicar regularmente y consultar la documentación oficial para casos específicos.
    Nombre   string
    Edad     int
    Email    string
    activo   bool  // campo privado
}

// Crear instancia
var p1 Persona
p1.Nombre = "Juan"
p1.Edad = 30

// Literal de struct
p2 := Persona{
    Nombre: "Ana",
    Edad:   25,
    Email:  "ana@email.com",
}

// Por posición (no recomendado)
p3 := Persona{"Carlos", 35, "carlos@email.com", true}
```

### Structs anónimos
```go
persona := struct {
    nombre string
    edad   int
}{
    nombre: "Juan",
    edad:   30,
}
```

### Structs embebidos
```go
type Direccion struct {
    Calle  string
    Ciudad string
    CP     string
}

type PersonaCompleta struct {
    Nombre string
    Edad   int
    Direccion  // Struct embebido
}

// Uso
pc := PersonaCompleta{
    Nombre: "Juan",
    Edad:   30,
    Direccion: Direccion{
        Calle:  "Calle 123",
        Ciudad: "Madrid",
        CP:     "28001",
    },
}

// Acceso directo a campos embebidos
fmt.Println(pc.Calle)  // Acceso directo
fmt.Println(pc.Direccion.Calle)  // Acceso explícito
```

### Tags en structs
```go
type Usuario struct {
    ID     int    `json:"id" db:"user_id"`
    Nombre string `json:"name" db:"username"`
    Email  string `json:"email" db:"email_address"`
}
```

---

## Punteros

### Conceptos básicos
```go
// Declarar puntero
var p *int

// Obtener dirección
x := 42
p = &x

// Desreferenciar
fmt.Println(*p)  // 42

// Modificar valor a través del puntero
*p = 100
fmt.Println(x)   // 100
```

### Punteros a structs
```go
type Persona struct {
    Nombre string
    Edad   int
}

p := &Persona{
    Nombre: "Juan",
    Edad:   30,
}

// Acceso a campos (automático dereferencing)
fmt.Println(p.Nombre)   // Equivale a (*p).Nombre
p.Edad = 31
```

### new vs make
```go
// new: asigna memoria y retorna puntero al valor zero
p := new(int)
fmt.Println(*p)  // 0

// make: usado para slices, maps, channels
slice := make([]int, 5)
mapa := make(map[string]int)
```

---

## Interfaces

### Definición
```go
// Definir interface
type Writer interface {
    Write([]byte) (int, error)
}

type Speaker interface {
    Speak() string
}

// Interface vacía
var any interface{}
```

### Implementación implícita
```go
type Archivo struct {
    nombre string
}

// Implementa la interface Writer
func (a Archivo) Write(data []byte) (int, error) {
    fmt.Printf("Escribiendo %s en archivo %s\n", string(data), a.nombre)
    return len(data), nil
}

// Uso
var w Writer = Archivo{nombre: "test.txt"}
w.Write([]byte("Hola mundo"))
```

### Interface con múltiples métodos
```go
type Animal interface {
    Sonido() string
    Moverse() string
}

type Perro struct {
    Nombre string
}

func (p Perro) Sonido() string {
    return "Guau"
}

func (p Perro) Moverse() string {
    return "Corriendo"
}

// Uso
var animal Animal = Perro{Nombre: "Rex"}
fmt.Println(animal.Sonido())   // Guau
fmt.Println(animal.Moverse())  // Corriendo
```

### Type assertions
```go
var i interface{} = "hello"

// Type assertion
s := i.(string)
fmt.Println(s)

// Type assertion segura
s, ok := i.(string)
if ok {
    fmt.Println("Es string:", s)
}

// Type switch
switch v := i.(type) {
case int:
    fmt.Printf("Es int: %d\n", v)
case string:
    fmt.Printf("Es string: %s\n", v)
default:
    fmt.Printf("Tipo desconocido: %T\n", v)
}
```

---

## Métodos

### Métodos con receivers
```go
type Rectangulo struct {
    Ancho, Alto float64
}

// Método con value receiver
func (r Rectangulo) Area() float64 {
    return r.Ancho * r.Alto
}

// Método con pointer receiver
func (r *Rectangulo) Escalar(factor float64) {
    r.Ancho *= factor
    r.Alto *= factor
}

// Uso
rect := Rectangulo{Ancho: 3, Alto: 4}
fmt.Println(rect.Area())  // 12

rect.Escalar(2)
fmt.Println(rect.Area())  // 48
```

### Métodos en tipos personalizados
```go
type MiInt int

func (m MiInt) Duplicar() MiInt {
    return m * 2
}

// Uso
var x MiInt = 5
fmt.Println(x.Duplicar())  // 10
```

---

## Packages

### Creación de package
```go
// archivo: math/utils.go
package math

// Función exportada (mayúscula inicial)
func Suma(a, b int) int {
    return a + b
}

// Función privada (minúscula inicial)
func resta(a, b int) int {
    return a - b
}

// Variable exportada
var Pi = 3.14159

// Variable privada
var version = "1.0"
```

### Uso de packages
```go
package main

import (
    "fmt"
    "math"          // package estándar
    "./math"        // package local
    m "./math"      // alias
    . "./math"      // importar nombres al scope actual
)

func main() {
    fmt.Println(math.Suma(5, 3))
    fmt.Println(Pi)
}
```

### init function
```go
package main

import "fmt"

var global = initGlobal()

func init() {
    fmt.Println("init 1")
}

func init() {
    fmt.Println("init 2")
}

func initGlobal() int {
    fmt.Println("initGlobal")
    return 10
}

func main() {
    fmt.Println("main")
}
```

---

## Manejo de Errores

### Tipo error
```go
// error es una interface built-in
type error interface {
    Error() string
}
```

### Crear errores
```go
import (
    "errors"
    "fmt"
)

// Con errors.New
func dividir(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("división por cero")
    }
    return a / b, nil
}

// Con fmt.Errorf
func validarEdad(edad int) error {
    if edad < 0 {
        return fmt.Errorf("edad inválida: %d", edad)
    }
    return nil
}
```

### Manejo de errores
```go
resultado, err := dividir(10, 0)
if err != nil {
    fmt.Println("Error:", err)
    return
}
fmt.Println("Resultado:", resultado)
```

### Errores personalizados
```go
type MiError struct {
    Codigo  int
    Mensaje string
}

func (e MiError) Error() string {
    return fmt.Sprintf("Error %d: %s", e.Codigo, e.Mensaje)
}

func operacion() error {
    return MiError{
        Codigo:  404,
        Mensaje: "Recurso no encontrado",
    }
}
```

### Panic y Recover
```go
func ejemplo() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recuperado de panic:", r)
        }
    }()
    
    fmt.Println("Antes del panic")
    panic("¡Algo salió mal!")
    fmt.Println("Esto no se ejecuta")
}
```

---

## Concurrencia

### Goroutines
```go
import (
    "fmt"
    "time"
)

func tarea(id int) {
    for i := 0; i < 5; i++ {
        fmt.Printf("Tarea %d: %d\n", id, i)
        time.Sleep(time.Millisecond * 100)
    }
}

func main() {
    // Lanzar goroutines
    go tarea(1)
    go tarea(2)
    
    // Esperar para que terminen
    time.Sleep(time.Second)
    fmt.Println("Fin")
}
```

### WaitGroups
```go
import (
    "fmt"
    "sync"
    "time"
)

func worker(id int, wg *sync.WaitGroup) {
    defer wg.Done()  // Marcar como terminado
    
    fmt.Printf("Worker %d iniciado\n", id)
    time.Sleep(time.Second)
    fmt.Printf("Worker %d terminado\n", id)
}

func main() {
    var wg sync.WaitGroup
    
    for i := 1; i <= 3; i++ {
        wg.Add(1)  // Incrementar contador
        go worker(i, &wg)
    }
    
    wg.Wait()  // Esperar a que terminen todos
    fmt.Println("Todos los workers terminaron")
}
```

### Channels
```go
// Crear channel
ch := make(chan int)
ch2 := make(chan int, 5)  // Buffered channel

// Enviar y recibir
go func() {
    ch <- 42  // Enviar
}()

valor := <-ch  // Recibir
fmt.Println(valor)

// Cerrar channel
close(ch)

// Verificar si está cerrado
valor, ok := <-ch
if !ok {
    fmt.Println("Channel cerrado")
}
```

### Select statement
```go
func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)
    
    go func() {
        time.Sleep(time.Second)
        ch1 <- "uno"
    }()
    
    go func() {
        time.Sleep(2 * time.Second)
        ch2 <- "dos"
    }()
    
    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-ch1:
            fmt.Println("Recibido:", msg1)
        case msg2 := <-ch2:
            fmt.Println("Recibido:", msg2)
        case <-time.After(3 * time.Second):
            fmt.Println("Timeout")
        }
    }
}
```

### Patrones de concurrencia

#### Worker Pool
```go
func workerPool() {
    const numWorkers = 3
    jobs := make(chan int, 5)
    results := make(chan int, 5)
    
    // Crear workers
    for w := 1; w <= numWorkers; w++ {
        go worker(w, jobs, results)
    }
    
    // Enviar jobs
    for j := 1; j <= 5; j++ {
        jobs <- j
    }
    close(jobs)
    
    // Recoger resultados
    for r := 1; r <= 5; r++ {
        <-results
    }
}

func worker(id int, jobs <-chan int, results chan<- int) {
    for j := range jobs {
        fmt.Printf("Worker %d procesando job %d\n", id, j)
        time.Sleep(time.Second)
        results <- j * 2
    }
}
```

---

## Testing

### Test básico
```go
// archivo: math_test.go
package main

import "testing"

func TestSuma(t *testing.T) {
    resultado := Suma(2, 3)
    esperado := 5
    
    if resultado != esperado {
        t.Errorf("Suma(2, 3) = %d; esperado %d", resultado, esperado)
    }
}
```

### Table-driven tests
```go
func TestSumaTabla(t *testing.T) {
    tests := []struct {
        a, b     int
        esperado int
    }{
        {2, 3, 5},
        {0, 0, 0},
        {-1, 1, 0},
        {10, -5, 5},
    }
    
    for _, test := range tests {
        resultado := Suma(test.a, test.b)
        if resultado != test.esperado {
            t.Errorf("Suma(%d, %d) = %d; esperado %d", 
                test.a, test.b, resultado, test.esperado)
        }
    }
}
```

### Benchmarks
```go
func BenchmarkSuma(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Suma(5, 10)
    }
}
```

### Ejecutar tests
```bash
go test                 # Ejecutar todos los tests
go test -v             # Verbose
go test -run TestSuma  # Ejecutar test específico
go test -bench=.       # Ejecutar benchmarks
go test -cover         # Coverage
```

---

## Ejemplos Prácticos

### Servidor HTTP básico
```go
package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "¡Hola, %s!", r.URL.Path[1:])
}

func main() {
    http.HandleFunc("/", handler)
    fmt.Println("Servidor corriendo en :8080")
    http.ListenAndServe(":8080", nil)
}
```

### API REST básica
```go
package main

import (
    "encoding/json"
    "net/http"
    "strconv"
    
    "github.com/gorilla/mux"
)

type Usuario struct {
    ID     int    `json:"id"`
    Nombre string `json:"nombre"`
    Email  string `json:"email"`
}

var usuarios = []Usuario{
    {1, "Juan", "juan@email.com"},
    {2, "Ana", "ana@email.com"},
}

func getUsuarios(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(usuarios)
}

func getUsuario(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    params := mux.Vars(r)
    id, _ := strconv.Atoi(params["id"])
    
    for _, usuario := range usuarios {
        if usuario.ID == id {
            json.NewEncoder(w).Encode(usuario)
            return
        }
    }
    
    http.Error(w, "Usuario no encontrado", http.StatusNotFound)
}

func main() {
    r := mux.NewRouter()
    r.HandleFunc("/usuarios", getUsuarios).Methods("GET")
    r.HandleFunc("/usuarios/{id}", getUsuario).Methods("GET")
    
    http.ListenAndServe(":8080", r)
}
```

### Trabajar con JSON
```go
package main

import (
    "encoding/json"
    "fmt"
)

type Persona struct {