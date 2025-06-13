# Documentación Básica de Java

## 📝 Introducción
Java es un lenguaje de programación orientado a objetos, desarrollado por Sun Microsystems (ahora Oracle) en 1995. Es conocido por su portabilidad ("Write Once, Run Anywhere"), robustez y amplio ecosistema.

---

## 🏗️ Estructura Básica de un Programa Java

```java
public class MiPrimerPrograma {
    public static void main(String[] args) {
        System.out.println("¡Hola, Mundo!");
    }
}
```

### Elementos clave:
- **class**: Define una clase
- **public**: Modificador de acceso
- **static**: El método pertenece a la clase, no a una instancia
- **void**: El método no retorna valor
- **main**: Punto de entrada del programa
- **String[] args**: Parámetros de línea de comandos

---

## 🎯 Variables y Tipos de Datos

### Tipos Primitivos

| Tipo | Tamaño | Rango | Ejemplo |
|------|--------|-------|---------|
| `byte` | 1 byte | -128 a 127 | `byte edad = 25;` |
| `short` | 2 bytes | -32,768 a 32,767 | `short año = 2024;` |
| `int` | 4 bytes | -2³¹ a 2³¹-1 | `int numero = 100;` |
| `long` | 8 bytes | -2⁶³ a 2⁶³-1 | `long poblacion = 8000000000L;` |
| `float` | 4 bytes | ~7 dígitos decimales | `float precio = 19.99f;` |
| `double` | 8 bytes | ~15 dígitos decimales | `double pi = 3.14159265359;` |
| `char` | 2 bytes | Carácter Unicode | `char letra = 'A';` |
| `boolean` | 1 bit | true o false | `boolean activo = true;` |

### Declaración de Variables

```java
// Declaración simple
int numero;

// Declaración con inicialización
int edad = 25;

// Múltiples variables del mismo tipo
int x = 10, y = 20, z = 30;

// Constantes
final double PI = 3.14159;
```

---

## 🔄 Operadores

### Operadores Aritméticos
```java
int a = 10, b = 3;

int suma = a + b;        // 13
int resta = a - b;       // 7
int multiplicacion = a * b; // 30
int division = a / b;    // 3 (división entera)
int modulo = a % b;      // 1 (resto)

// Incremento y decremento
a++;  // a = a + 1
b--;  // b = b - 1
```

### Operadores de Comparación
```java
int x = 5, y = 10;

boolean igual = (x == y);      // false
boolean diferente = (x != y);  // true
boolean mayor = (x > y);       // false
boolean menor = (x < y);       // true
boolean mayorIgual = (x >= y); // false
boolean menorIgual = (x <= y); // true
```

### Operadores Lógicos
```java
boolean a = true, b = false;

boolean and = a && b;    // false (AND)
boolean or = a || b;     // true (OR)
boolean not = !a;        // false (NOT)
```

---

## 🌊 Estructuras de Control

### Condicionales

#### if-else
```java
int edad = 18;

if (edad >= 18) {
    System.out.println("Eres mayor de edad");
} else {
    System.out.println("Eres menor de edad");
}

// if-else if-else
int nota = 85;

if (nota >= 90) {
    System.out.println("Excelente");
} else if (nota >= 80) {
    System.out.println("Muy bueno");
} else if (nota >= 70) {
    System.out.println("Bueno");
} else {
    System.out.println("Necesita mejorar");
}
```

#### switch
```java
int dia = 3;
String nombreDia;

switch (dia) {
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    default:
        nombreDia = "Día inválido";
        break;
}
```

### Bucles

#### for
```java
// Bucle for tradicional
for (int i = 0; i < 5; i++) {
    System.out.println("Iteración: " + i);
}

// for-each (para arrays y colecciones)
int[] numeros = {1, 2, 3, 4, 5};
for (int numero : numeros) {
    System.out.println(numero);
}
```

#### while
```java
int contador = 0;
while (contador < 5) {
    System.out.println("Contador: " + contador);
    contador++;
}
```

#### do-while
```java
int numero;
do {
    numero = (int)(Math.random() * 10);
    System.out.println("Número generado: " + numero);
} while (numero != 5);
```

---

## 🏛️ Programación Orientada a Objetos

### Clases y Objetos

```java
public class Persona {
    // Atributos (campos)
    private String nombre;
    private int edad;
    
    // Constructor
    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    // Constructor por defecto
    public Persona() {
        this.nombre = "Sin nombre";
        this.edad = 0;
    }
    
    // Métodos (getters y setters)
    public String getNombre() {
        return nombre;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public int getEdad() {
        return edad;
    }
    
    public void setEdad(int edad) {
        if (edad >= 0) {
            this.edad = edad;
        }
    }
    
    // Método personalizado
    public void saludar() {
        System.out.println("Hola, soy " + nombre + " y tengo " + edad + " años");
    }
    
    // Método toString
    @Override
    public String toString() {
        return "Persona{nombre='" + nombre + "', edad=" + edad + "}";
    }
}

// Uso de la clase
public class Main {
    public static void main(String[] args) {
        Persona persona1 = new Persona("Juan", 25);
        Persona persona2 = new Persona();
        
        persona1.saludar();
        persona2.setNombre("María");
        persona2.setEdad(30);
        persona2.saludar();
    }
}
```

### Herencia

```java
// Clase padre
public class Animal {
    protected String nombre;
    
    public Animal(String nombre) {
        this.nombre = nombre;
    }
    
    public void comer() {
        System.out.println(nombre + " está comiendo");
    }
    
    public void dormir() {
        System.out.println(nombre + " está durmiendo");
    }
}

// Clase hija
public class Perro extends Animal {
    private String raza;
    
    public Perro(String nombre, String raza) {
        super(nombre); // Llama al constructor de la clase padre
        this.raza = raza;
    }
    
    // Método específico de Perro
    public void ladrar() {
        System.out.println(nombre + " está ladrando: ¡Guau!");
    }
    
    // Sobrescritura de método
    @Override
    public void comer() {
        System.out.println(nombre + " está comiendo croquetas");
    }
}
```

---

## 📊 Arrays (Arreglos)

### Declaración e Inicialización

```java
// Declaración
int[] numeros;
String[] nombres;

// Inicialización con tamaño
numeros = new int[5];
nombres = new String[3];

// Declaración e inicialización juntas
int[] edades = new int[10];
String[] colores = {"rojo", "verde", "azul"};
int[] valores = {1, 2, 3, 4, 5};

// Acceso a elementos
numeros[0] = 10;
numeros[1] = 20;
String primerColor = colores[0]; // "rojo"

// Longitud del array
int longitud = numeros.length;
```

### Recorrido de Arrays

```java
int[] numeros = {10, 20, 30, 40, 50};

// Con bucle for tradicional
for (int i = 0; i < numeros.length; i++) {
    System.out.println("Elemento " + i + ": " + numeros[i]);
}

// Con for-each
for (int numero : numeros) {
    System.out.println("Número: " + numero);
}
```

### Arrays Multidimensionales

```java
// Array bidimensional
int[][] matriz = new int[3][4];
int[][] tabla = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Acceso a elementos
matriz[0][0] = 100;
int valor = tabla[1][2]; // 6

// Recorrido
for (int i = 0; i < tabla.length; i++) {
    for (int j = 0; j < tabla[i].length; j++) {
        System.out.print(tabla[i][j] + " ");
    }
    System.out.println();
}
```

---

## 📝 Strings (Cadenas)

### Operaciones Básicas

```java
String saludo = "Hola";
String nombre = "Mundo";

// Concatenación
String mensaje = saludo + " " + nombre; // "Hola Mundo"
String mensaje2 = saludo.concat(" ").concat(nombre);

// Longitud
int longitud = mensaje.length(); // 10

// Conversión a mayúsculas/minúsculas
String mayusculas = mensaje.toUpperCase(); // "HOLA MUNDO"
String minusculas = mensaje.toLowerCase(); // "hola mundo"

// Obtener carácter en posición
char primerChar = mensaje.charAt(0); // 'H'

// Subcadena
String sub = mensaje.substring(0, 4); // "Hola"
String sub2 = mensaje.substring(5); // "Mundo"

// Buscar texto
int posicion = mensaje.indexOf("Mundo"); // 5
boolean contiene = mensaje.contains("Hola"); // true

// Reemplazar
String reemplazado = mensaje.replace("Mundo", "Java"); // "Hola Java"

// División
String frase = "Java,es,genial";
String[] palabras = frase.split(","); // ["Java", "es", "genial"]

// Comparación
String str1 = "Java";
String str2 = "java";
boolean iguales = str1.equals(str2); // false
boolean igualesIgnoreCase = str1.equalsIgnoreCase(str2); // true
```

---

## 🔧 Métodos

### Definición y Uso

```java
public class Calculadora {
    
    // Método que no retorna valor
    public void mostrarMensaje() {
        System.out.println("¡Bienvenido a la calculadora!");
    }
    
    // Método que retorna valor
    public int sumar(int a, int b) {
        return a + b;
    }
    
    // Método con múltiples parámetros
    public double calcularPromedio(double[] numeros) {
        double suma = 0;
        for (double numero : numeros) {
            suma += numero;
        }
        return suma / numeros.length;
    }
    
    // Método sobrecargado
    public int sumar(int a, int b, int c) {
        return a + b + c;
    }
    
    public double sumar(double a, double b) {
        return a + b;
    }
    
    // Método estático
    public static int multiplicar(int a, int b) {
        return a * b;
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        Calculadora calc = new Calculadora();
        
        calc.mostrarMensaje();
        int resultado = calc.sumar(5, 3);
        
        // Método estático - se llama con el nombre de la clase
        int producto = Calculadora.multiplicar(4, 7);
    }
}
```

---

## 📥 Entrada y Salida Básica

### Scanner para Entrada de Datos

```java
import java.util.Scanner;

public class EntradaDatos {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Ingresa tu nombre: ");
        String nombre = scanner.nextLine();
        
        System.out.print("Ingresa tu edad: ");
        int edad = scanner.nextInt();
        
        System.out.print("Ingresa tu altura: ");
        double altura = scanner.nextDouble();
        
        System.out.println("Hola " + nombre + ", tienes " + edad + 
                          " años y mides " + altura + " metros");
        
        scanner.close();
    }
}
```

### Salida Formateada

```java
public class SalidaFormateada {
    public static void main(String[] args) {
        String nombre = "Juan";
        int edad = 25;
        double salario = 2500.75;
        
        // printf para formato
        System.out.printf("Nombre: %s, Edad: %d, Salario: %.2f%n", 
                         nombre, edad, salario);
        
        // format de String
        String mensaje = String.format("El empleado %s gana $%.2f", 
                                      nombre, salario);
        System.out.println(mensaje);
    }
}
```

---

## ⚠️ Manejo Básico de Excepciones

```java
public class ManejoExcepciones {
    public static void main(String[] args) {
        try {
            int[] numeros = {1, 2, 3};
            System.out.println(numeros[5]); // Esto causará una excepción
            
            int resultado = 10 / 0; // División por cero
            
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Índice fuera de rango");
        } catch (ArithmeticException e) {
            System.out.println("Error: División por cero");
        } catch (Exception e) {
            System.out.println("Error general: " + e.getMessage());
        } finally {
            System.out.println("Este bloque siempre se ejecuta");
        }
    }
}
```

---

## 💡 Buenas Prácticas

### Convenciones de Nomenclatura
- **Clases**: PascalCase (`MiClase`, `PersonaJoven`)
- **Variables y métodos**: camelCase (`miVariable`, `calcularPromedio`)
- **Constantes**: UPPER_SNAKE_CASE (`MAX_VALOR`, `PI_VALUE`)
- **Paquetes**: minúsculas (`com.empresa.proyecto`)

### Estructura de Código
```java
// Comentario de clase
public class EjemploEstructura {
    // Constantes
    private static final int MAX_INTENTOS = 3;
    
    // Variables de instancia
    private String nombre;
    private int edad;
    
    // Constructores
    public EjemploEstructura(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    // Métodos públicos
    public void metodoPublico() {
        // Implementación
    }
    
    // Métodos privados
    private void metodoPrivado() {
        // Implementación
    }
    
    // Getters y Setters al final
    public String getNombre() {
        return nombre;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
```

---

## 🚀 Próximos Pasos

Una vez domines estos conceptos básicos, puedes avanzar a:
- Colecciones (ArrayList, HashMap)
- Programación orientada a objetos avanzada
- Manejo de archivos
- Interfaces gráficas (Swing/JavaFX)
- Desarrollo web (Spring Boot)
- Bases de datos (JDBC)

¡Practica mucho y experimenta con el código para consolidar tu aprendizaje!