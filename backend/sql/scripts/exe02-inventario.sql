-- Tabla para almacenar información sobre los productos
CREATE TABLE productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL
);

-- Tabla para el control de existencias
CREATE TABLE existencias (
    id_existencia INT AUTO_INCREMENT PRIMARY KEY,
    id_producto INT,
    cantidad INT NOT NULL,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto) ON DELETE CASCADE
);

-- Tabla para transacciones (entradas/salidas de inventario)
CREATE TABLE transacciones (
    id_transaccion INT AUTO_INCREMENT PRIMARY KEY,
    id_producto INT,
    tipo ENUM('entrada', 'salida') NOT NULL,
    cantidad INT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto) ON DELETE CASCADE
);



-- Insertar productos
INSERT INTO productos (nombre, descripcion, precio) VALUES
('Producto A', 'Descripción del Producto A', 50.00),
('Producto B', 'Descripción del Producto B', 30.00);

-- Inicializar existencias
INSERT INTO existencias (id_producto, cantidad) VALUES
(1, 100),
(2, 50);

-- Registrar transacciones (entradas y salidas)
INSERT INTO transacciones (id_producto, tipo, cantidad) VALUES
(1, 'entrada', 50),
(2, 'salida', 20);


SELECT productos.nombre, existencias.cantidad
FROM productos
JOIN existencias ON productos.id_producto = existencias.id_producto
WHERE productos.nombre = 'Producto A';


INSERT INTO transacciones (id_producto, tipo, cantidad) VALUES
(1, 'entrada', 10);


SELECT *
FROM transacciones
WHERE id_producto = 1
ORDER BY fecha DESC;
