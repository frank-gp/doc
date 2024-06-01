-- Crear la tabla de usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- Crear la tabla de mensajes
CREATE TABLE mensajes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_emisor INT,
    id_receptor INT,
    contenido TEXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_emisor) REFERENCES usuarios(id),
    FOREIGN KEY (id_receptor) REFERENCES usuarios(id)
);


-- Insertar usuarios
INSERT INTO usuarios (nombre) VALUES
    ('Usuario1'),
    ('Usuario2'),
    ('Usuario3');

-- Insertar mensajes
INSERT INTO mensajes (id_emisor, id_receptor, contenido) VALUES
    (1, 2, 'Hola, ¿cómo estás?'),
    (2, 1, '¡Hola! Estoy bien, ¿y tú?');


-- Supongamos que quieres mostrar la conversación entre los usuarios con id 1 y 2
-- Puedes ajustar estos valores según tus necesidades.

SELECT *
FROM mensajes
WHERE (id_emisor = 1 AND id_receptor = 2) OR (id_emisor = 2 AND id_receptor = 1)
ORDER BY timestamp;
