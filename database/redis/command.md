# Tabla de Comandos Básicos de Redis

| Acción                     | Comando Redis CLI            | Descripción                                               |
| -------------------------- | ---------------------------- | --------------------------------------------------------- |
| Establecer valor           | `SET clave valor`            | Guarda o actualiza el valor asociado a la clave           |
| Obtener valor              | `GET clave`                  | Obtiene el valor asociado a la clave                      |
| Eliminar clave             | `DEL clave`                  | Elimina la clave y su valor                               |
| Listar todas las claves    | `KEYS *`                     | Muestra todas las claves que existen                      |
| Ver tipo de dato           | `TYPE clave`                 | Muestra el tipo de dato almacenado en la clave            |
| Incrementar valor numérico | `INCR clave`                 | Incrementa el valor numérico de la clave en 1             |
| Guardar JSON (como texto)  | `SET user '{"name":"Juan"}'` | Guarda un JSON serializado como cadena                    |
| Actualizar valor           | `SET clave nuevo_valor`      | Sobrescribe el valor actual de la clave (update)          |
| Crear o actualizar hash    | `HSET hash clave valor`      | Establece un campo en un hash (similar a columna en fila) |
| Obtener campo de hash      | `HGET hash campo`            | Obtiene el valor de un campo en un hash                   |
| Obtener todos los campos   | `HGETALL hash`               | Obtiene todos los campos y valores de un hash             |
| Eliminar campo de hash     | `HDEL hash campo`            | Elimina un campo de un hash                               |

---

### Ejemplos prácticos

```sh
# Guardar un valor simple
SET user:1 "Juan"

# Actualizar el valor
SET user:1 "Pedro"

# Guardar un objeto JSON como texto
SET user:2 '{"name":"Ana", "age":25}'

# Trabajar con hash (similar a fila con columnas)
HSET user:1000 name "Luis"
HSET user:1000 age 28

# Actualizar un campo en hash
HSET user:1000 age 29

# Obtener todos los datos del hash
HGETALL user:1000

# Eliminar campo del hash
HDEL user:1000 age
```
