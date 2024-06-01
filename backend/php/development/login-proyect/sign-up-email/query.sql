DROP DATABASE IF EXISTS basededatos;

CREATE DATABASE basededatos;

USE basededatos;

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    codigo_verificacion VARCHAR(32),
    verificado BOOLEAN DEFAULT 0
);

SELECT * FROM usuarios;


UPDATE usuarios SET verificado = 0 WHERE email = 'fgp555@gmail.com' AND codigo_verificacion = '3ea2bbb447edde25c6065351f6883053';
SELECT * FROM usuarios WHERE email = 'fgp555@gmail.com' AND codigo_verificacion = '3ea2bbb447edde25c6065351f6883053';