CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    correo VARCHAR(50),
    contraseña VARCHAR(255),
    tipo ENUM('gratis', 'premium') DEFAULT 'gratis'
);

CREATE TABLE suscripciones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT,
    fecha_inicio DATE,
    fecha_fin DATE,
    estado ENUM('activo', 'cancelado') DEFAULT 'activo',
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
