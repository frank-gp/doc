-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS mi_blog;

-- Seleccionar la base de datos
USE mi_blog;

-- Crear tabla para entradas del blog
CREATE TABLE IF NOT EXISTS entradas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    contenido TEXT NOT NULL,
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    autor VARCHAR(100) NOT NULL
);

-- Crear tabla para usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(50) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL
);

-- Crear tabla para comentarios
CREATE TABLE IF NOT EXISTS comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    entrada_id INT NOT NULL,
    usuario_id INT NOT NULL,
    contenido TEXT NOT NULL,
    fecha_comentario TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (entrada_id) REFERENCES entradas(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);


-- Insertar una entrada en el blog
INSERT INTO entradas (titulo, contenido, autor) VALUES ('Título de la entrada', 'Contenido de la entrada', 'Nombre del autor');
INSERT INTO entradas (titulo, contenido, autor) VALUES ('Título de la entrada 2', 'Contenido de la entrada', 'Nombre del autor');

-- Recuperar todas las entradas del blog
SELECT * FROM entradas;

-- Insertar un usuario
INSERT INTO usuarios (nombre_usuario, contrasena, email) VALUES ('nombre_usuario', 'contrasena_segura', 'correo@ejemplo.com');

-- Insertar un comentario en una entrada específica
INSERT INTO comentarios (entrada_id, usuario_id, contenido) VALUES (1, 1, '¡Gran entrada!');

-- Recuperar todos los comentarios de una entrada específica
SELECT * FROM comentarios WHERE entrada_id = 1;


-- ==========  ==========
-- Agrega un campo para el contador de visitas en la tabla de entradas
ALTER TABLE entradas
ADD COLUMN visitas INT DEFAULT 0;

-- Incrementa el contador de visitas para una entrada específica
UPDATE entradas
SET visitas = visitas + 1
WHERE id = 2; -- Reemplaza 1 con el ID de la entrada que estás visitando

-- Recuperar el título de la entrada y el número de visitas
SELECT titulo, visitas
FROM entradas; -- Reemplaza 1 con el ID de la entrada que deseas mostrar

-- Recuperar todas las entradas con sus respectivas cantidades de visitas
-- Recuperar todas las entradas con sus respectivas cantidades de visitas y ordenar en orden descendente por visitas
SELECT id, titulo, visitas
FROM entradas
ORDER BY visitas DESC;


-- Recuperar la entrada con la cantidad de visitas
SELECT entradas.id, entradas.titulo, entradas.contenido, entradas.fecha_publicacion, entradas.autor, entradas.visitas
FROM entradas
WHERE entradas.id = 1; -- Reemplaza 1 con el ID de la entrada que deseas mostrar



-- Crear tabla para categorías
CREATE TABLE IF NOT EXISTS categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- Crear tabla para etiquetas
CREATE TABLE IF NOT EXISTS etiquetas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- Modificar la tabla de entradas para incluir relaciones con categorías y etiquetas
ALTER TABLE entradas
ADD COLUMN categoria_id INT,
ADD COLUMN etiqueta_id INT,
ADD FOREIGN KEY (categoria_id) REFERENCES categorias(id),
ADD FOREIGN KEY (etiqueta_id) REFERENCES etiquetas(id);


-- Insertar categorías
INSERT INTO categorias (nombre) VALUES ('Tecnología'), ('Viajes'), ('Cocina');

-- Insertar etiquetas
INSERT INTO etiquetas (nombre) VALUES ('Programación'), ('Europa'), ('Recetas');


-- Insertar una entrada con categoría y etiqueta
INSERT INTO entradas (titulo, contenido, autor, categoria_id, etiqueta_id) 
VALUES ('Título de la entrada', 'Contenido de la entrada', 'Nombre del autor', 1, 2);

-- Recuperar entradas con categorías, etiquetas y visitas, ordenadas por visitas en orden ascendente
SELECT entradas.titulo, categorias.nombre AS categoria, etiquetas.nombre AS etiqueta, entradas.visitas
FROM entradas
LEFT JOIN categorias ON entradas.categoria_id = categorias.id
LEFT JOIN etiquetas ON entradas.etiqueta_id = etiquetas.id
ORDER BY entradas.visitas DESC;
