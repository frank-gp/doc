# Documentación SQLite3

## Índice

1. [Introducción](#introducción)
2. [Instalación](#instalación)
3. [Tipos de Datos](#tipos-de-datos)
4. [Comandos Básicos](#comandos-básicos)
5. [Creación de Tablas](#creación-de-tablas)
6. [Inserción de Datos](#inserción-de-datos)
7. [Consultas SELECT](#consultas-select)
8. [Actualización y Eliminación](#actualización-y-eliminación)
9. [Índices](#índices)
10. [Vistas](#vistas)
11. [Transacciones](#transacciones)
12. [Funciones Útiles](#funciones-útiles)
13. [Comandos de Consola](#comandos-de-consola)

## Introducción

SQLite es un motor de base de datos SQL embebido, sin servidor, que no requiere configuración. Es una biblioteca que implementa un motor de base de datos SQL transaccional, sin servidor y de configuración cero.

### Características principales:

- **Sin servidor**: No requiere un proceso servidor separado
- **Configuración cero**: No necesita instalación ni administración
- **Transaccional**: Cumple con ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad)
- **Multiplataforma**: Funciona en Windows, macOS, Linux, etc.

## Instalación

### En sistemas basados en Debian/Ubuntu:

```bash
sudo apt-get install sqlite3
```

### En sistemas basados en Red Hat/CentOS:

```bash
sudo yum install sqlite
```

### En macOS:

```bash
brew install sqlite3
```

### En Windows:

Descargar desde https://sqlite.org/download.html

## Tipos de Datos

SQLite utiliza un sistema de tipos dinámico:

| Tipo de Almacenamiento | Descripción                                               |
| ---------------------- | --------------------------------------------------------- |
| `NULL`                 | Valor nulo                                                |
| `INTEGER`              | Entero con signo (1, 2, 3, 4, 6, u 8 bytes)               |
| `REAL`                 | Número de punto flotante (8 bytes IEEE)                   |
| `TEXT`                 | Cadena de texto (UTF-8, UTF-16BE o UTF-16LE)              |
| `BLOB`                 | Datos binarios almacenados exactamente como se ingresaron |

### Tipos de afinidad:

- `TEXT`
- `NUMERIC`
- `INTEGER`
- `REAL`
- `BLOB`

## Comandos Básicos

### Conectar a una base de datos:

```sql
sqlite3 nombre_base_datos.db
```

### Crear una nueva base de datos:

```sql
sqlite3 nueva_base.db
```

### Salir de SQLite:

```sql
.quit
```

### Mostrar ayuda:

```sql
.help
```

## Creación de Tablas

### Sintaxis básica:

```sql
CREATE TABLE nombre_tabla (
    columna1 tipo_dato restricciones,
    columna2 tipo_dato restricciones,
    ...
);
```

### Ejemplo práctico:

```sql
CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    edad INTEGER CHECK(edad >= 0),
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Restricciones comunes:

- `PRIMARY KEY`: Clave primaria
- `NOT NULL`: No permite valores nulos
- `UNIQUE`: Valores únicos
- `CHECK`: Validación personalizada
- `DEFAULT`: Valor por defecto
- `FOREIGN KEY`: Clave foránea

### Ejemplo con clave foránea:

```sql
CREATE TABLE pedidos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER,
    producto TEXT NOT NULL,
    cantidad INTEGER DEFAULT 1,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
```

## Inserción de Datos

### Insertar un registro:

```sql
INSERT INTO usuarios (nombre, email, edad)
VALUES ('Juan Pérez', 'juan@email.com', 25);
```

### Insertar múltiples registros:

```sql
INSERT INTO usuarios (nombre, email, edad) VALUES
('María García', 'maria@email.com', 30),
('Carlos López', 'carlos@email.com', 22),
('Ana Martínez', 'ana@email.com', 28);
```

### Insertar desde otra tabla:

```sql
INSERT INTO usuarios_activos
SELECT * FROM usuarios WHERE fecha_registro > '2024-01-01';
```

## Consultas SELECT

### Consulta básica:

```sql
SELECT * FROM usuarios;
```

### Seleccionar columnas específicas:

```sql
SELECT nombre, email FROM usuarios;
```

### Filtrar con WHERE:

```sql
SELECT * FROM usuarios WHERE edad > 25;
```

### Ordenar resultados:

```sql
SELECT * FROM usuarios ORDER BY edad DESC;
```

### Limitar resultados:

```sql
SELECT * FROM usuarios LIMIT 5;
```

### Usar OFFSET:

```sql
SELECT * FROM usuarios LIMIT 5 OFFSET 10;
```

### Agrupar resultados:

```sql
SELECT edad, COUNT(*) as total
FROM usuarios
GROUP BY edad;
```

### Filtrar grupos con HAVING:

```sql
SELECT edad, COUNT(*) as total
FROM usuarios
GROUP BY edad
HAVING COUNT(*) > 1;
```

### Joins (Uniones):

#### INNER JOIN:

```sql
SELECT u.nombre, p.producto
FROM usuarios u
INNER JOIN pedidos p ON u.id = p.usuario_id;
```

#### LEFT JOIN:

```sql
SELECT u.nombre, p.producto
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id;
```

#### RIGHT JOIN (simulado):

```sql
SELECT u.nombre, p.producto
FROM pedidos p
LEFT JOIN usuarios u ON p.usuario_id = u.id;
```

### Subconsultas:

```sql
SELECT * FROM usuarios
WHERE id IN (SELECT usuario_id FROM pedidos WHERE cantidad > 5);
```

## Actualización y Eliminación

### Actualizar registros:

```sql
UPDATE usuarios
SET edad = 26
WHERE nombre = 'Juan Pérez';
```

### Actualizar múltiples columnas:

```sql
UPDATE usuarios
SET nombre = 'Juan Carlos Pérez', edad = 26
WHERE id = 1;
```

### Eliminar registros:

```sql
DELETE FROM usuarios WHERE edad < 18;
```

### Eliminar todos los registros:

```sql
DELETE FROM usuarios;
```

## Índices

### Crear un índice:

```sql
CREATE INDEX idx_email ON usuarios(email);
```

### Índice compuesto:

```sql
CREATE INDEX idx_nombre_edad ON usuarios(nombre, edad);
```

### Índice único:

```sql
CREATE UNIQUE INDEX idx_email_unico ON usuarios(email);
```

### Mostrar índices:

```sql
.indices usuarios
```

### Eliminar índice:

```sql
DROP INDEX idx_email;
```

## Vistas

### Crear una vista:

```sql
CREATE VIEW vista_usuarios_adultos AS
SELECT nombre, email, edad
FROM usuarios
WHERE edad >= 18;
```

### Usar una vista:

```sql
SELECT * FROM vista_usuarios_adultos;
```

### Eliminar una vista:

```sql
DROP VIEW vista_usuarios_adultos;
```

## Transacciones

### Iniciar transacción:

```sql
BEGIN TRANSACTION;
```

### Confirmar cambios:

```sql
COMMIT;
```

### Revertir cambios:

```sql
ROLLBACK;
```

### Ejemplo completo:

```sql
BEGIN TRANSACTION;
INSERT INTO usuarios (nombre, email, edad) VALUES ('Test', 'test@email.com', 25);
UPDATE usuarios SET edad = 26 WHERE nombre = 'Test';
COMMIT;
```

## Funciones Útiles

### Funciones de agregación:

```sql
SELECT COUNT(*) FROM usuarios;
SELECT MAX(edad) FROM usuarios;
SELECT MIN(edad) FROM usuarios;
SELECT AVG(edad) FROM usuarios;
SELECT SUM(edad) FROM usuarios;
```

### Funciones de texto:

```sql
SELECT UPPER(nombre) FROM usuarios;
SELECT LOWER(email) FROM usuarios;
SELECT LENGTH(nombre) FROM usuarios;
SELECT SUBSTR(nombre, 1, 3) FROM usuarios;
```

### Funciones de fecha:

```sql
SELECT DATE('now') as fecha_actual;
SELECT DATETIME('now') as fecha_hora_actual;
SELECT strftime('%Y-%m-%d', 'now') as fecha_formateada;
```

### Funciones matemáticas:

```sql
SELECT ABS(-5);
SELECT ROUND(3.14159, 2);
SELECT RANDOM();
```

## Comandos de Consola

### Comandos útiles del intérprete SQLite:

```sql
.tables                  -- Mostrar todas las tablas
.schema tabla_nombre     -- Mostrar esquema de una tabla
.schema                  -- Mostrar esquema de toda la base de datos
.indices tabla_nombre    -- Mostrar índices de una tabla
.dump                    -- Exportar toda la base de datos
.dump tabla_nombre       -- Exportar una tabla específica
.mode column             -- Mostrar resultados en columnas
.headers on              -- Mostrar encabezados de columnas
.width 10 20 15          -- Establecer ancho de columnas
.output archivo.txt      -- Redirigir salida a archivo
.output stdout           -- Volver a mostrar en pantalla
.read archivo.sql        -- Ejecutar comandos desde archivo
.backup archivo.db       -- Crear respaldo de la base de datos
.restore archivo.db      -- Restaurar desde respaldo
```

### Ejemplo de uso de comandos:

```sql
.mode column
.headers on
.width 5 20 30 10
SELECT id, nombre, email, edad FROM usuarios;
```

## Ejemplos Prácticos

### Base de datos de biblioteca:

```sql
-- Crear tablas
CREATE TABLE autores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    nacionalidad TEXT
);

CREATE TABLE libros (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    autor_id INTEGER,
    año_publicacion INTEGER,
    isbn TEXT UNIQUE,
    FOREIGN KEY (autor_id) REFERENCES autores(id)
);

-- Insertar datos
INSERT INTO autores (nombre, nacionalidad) VALUES
('Gabriel García Márquez', 'Colombiana'),
('Isabel Allende', 'Chilena'),
('Mario Vargas Llosa', 'Peruana');

INSERT INTO libros (titulo, autor_id, año_publicacion, isbn) VALUES
('Cien años de soledad', 1, 1967, '978-0060883287'),
('La casa de los espíritus', 2, 1982, '978-0553383805'),
('La ciudad y los perros', 3, 1963, '978-8466331471');

-- Consulta con JOIN
SELECT l.titulo, a.nombre as autor, l.año_publicacion
FROM libros l
JOIN autores a ON l.autor_id = a.id
ORDER BY l.año_publicacion;
```

### Optimización de consultas:

```sql
-- Usar EXPLAIN QUERY PLAN para analizar consultas
EXPLAIN QUERY PLAN
SELECT * FROM usuarios WHERE email = 'juan@email.com';

-- Crear índice para optimizar
CREATE INDEX idx_email ON usuarios(email);

-- Verificar mejora
EXPLAIN QUERY PLAN
SELECT * FROM usuarios WHERE email = 'juan@email.com';
```

## Mejores Prácticas

1. **Usar transacciones** para operaciones múltiples
2. **Crear índices** en columnas que se consultan frecuentemente
3. **Usar VACUUM** periódicamente para optimizar la base de datos
4. **Hacer respaldos** regulares con `.backup`
5. **Usar FOREIGN KEY** para mantener integridad referencial
6. **Validar datos** con restricciones CHECK
7. **Usar AUTOINCREMENT** solo cuando sea necesario
8. **Normalizar** la base de datos para evitar redundancia

### Comando VACUUM:

```sql
VACUUM;
```

### Habilitar claves foráneas:

```sql
PRAGMA foreign_keys = ON;
```

### Verificar integridad:

```sql
PRAGMA integrity_check;
```

Esta documentación cubre los aspectos fundamentales de SQLite3. Para casos de uso específicos o funcionalidades avanzadas, consulta la documentación oficial en https://sqlite.org/docs.html
