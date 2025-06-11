-- Activar claves foráneas (importante)
PRAGMA foreign_keys = ON;

-- Crear tabla de usuarios
CREATE TABLE usuarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL
);

-- Crear tabla de publicaciones
CREATE TABLE publicaciones (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT NOT NULL,
  contenido TEXT,
  usuario_id INTEGER NOT NULL,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Insertar usuarios
INSERT INTO usuarios (nombre, email) VALUES ('Juan Pérez', 'juan@example.com');
INSERT INTO usuarios (nombre, email) VALUES ('Ana Gómez', 'ana@example.com');

-- Insertar publicaciones
INSERT INTO publicaciones (titulo, contenido, usuario_id)
VALUES ('Primer Post', 'Hola, este es mi primer post', 1);

INSERT INTO publicaciones (titulo, contenido, usuario_id)
VALUES ('Otro Post', '¡Me encanta escribir en este blog!', 1);

INSERT INTO publicaciones (titulo, contenido, usuario_id)
VALUES ('Post de Ana', 'Hola, soy Ana y este es mi primer post', 2);

-- Consultar usuarios
SELECT * FROM usuarios;

-- Consultar publicaciones
SELECT * FROM publicaciones;

-- Consultar publicaciones con nombre del autor
SELECT publicaciones.titulo, publicaciones.contenido, usuarios.nombre AS autor
FROM publicaciones
JOIN usuarios ON publicaciones.usuario_id = usuarios.id;
