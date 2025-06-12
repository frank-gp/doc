https://sqlite.org/download.html
https://sqlite.org/2025/sqlite-tools-win-x64-3500100.zip

```sh
# Ver la version
sqlite3
sqlite3.exe
```

```sql
sqlite3 mydb.db
.database

.exit
```

```sql
create table products(id INT primary key);
.table
```

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
