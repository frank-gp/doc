CREATE TABLE clientes (
    cliente_id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    telefono VARCHAR(15) NOT NULL
);

CREATE TABLE encomiendas (
    encomienda_id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT,
    fecha_envio DATE,
    fecha_entrega DATE,
    estado VARCHAR(50),
    FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id)
);

CREATE TABLE detalles_encomienda (
    detalle_id INT PRIMARY KEY AUTO_INCREMENT,
    encomienda_id INT,
    descripcion VARCHAR(255) NOT NULL,
    peso DECIMAL(5, 2),
    costo DECIMAL(10, 2),
    FOREIGN KEY (encomienda_id) REFERENCES encomiendas(encomienda_id)
);


INSERT INTO clientes (nombre, direccion, telefono) 
VALUES ('NombreCliente1', 'DireccionCliente1', '123-456-7890');

INSERT INTO clientes (nombre, direccion, telefono) 
VALUES ('NombreCliente2', 'DireccionCliente2', '987-654-3210');


-- Supongamos que el cliente con ID 1 está enviando una encomienda
INSERT INTO encomiendas (cliente_id, fecha_envio, fecha_entrega, estado) 
VALUES (1, '2023-11-21', NULL, 'En tránsito');

-- Supongamos que el cliente con ID 2 está enviando otra encomienda
INSERT INTO encomiendas (cliente_id, fecha_envio, fecha_entrega, estado) 
VALUES (2, '2023-11-20', NULL, 'En tránsito');


-- Detalles de la encomienda enviada por el cliente con ID 1
INSERT INTO detalles_encomienda (encomienda_id, descripcion, peso, costo) 
VALUES (1, 'Electrónicos', 2.5, 50.99);

-- Detalles de la encomienda enviada por el cliente con ID 2
INSERT INTO detalles_encomienda (encomienda_id, descripcion, peso, costo) 
VALUES (2, 'Ropa', 1.8, 30.50);

-- Supongamos que deseas insertar la fecha de entrega para la encomienda con ID 1
UPDATE encomiendas
SET fecha_entrega = '2023-11-25'  -- La fecha de entrega que desees asignar
WHERE encomienda_id = 1;

-- Supongamos que deseas actualizar la encomienda con ID 1
UPDATE encomiendas
SET fecha_entrega = '2023-11-22', estado = 'Entregado'
WHERE encomienda_id = 1;

SELECT * FROM clientes;

-- Leer todas las encomiendas con detalles:
SELECT 
    e.encomienda_id,
    c.nombre AS nombre_cliente,
    e.fecha_envio,
    e.fecha_entrega,
    e.estado,
    d.descripcion,
    d.peso,
    d.costo
FROM encomiendas e
JOIN clientes c ON e.cliente_id = c.cliente_id
JOIN detalles_encomienda d ON e.encomienda_id = d.encomienda_id;

-- Leer detalles de una encomienda específica
SELECT 
    e.encomienda_id,
    c.nombre AS nombre_cliente,
    e.fecha_envio,
    e.fecha_entrega,
    e.estado,
    d.descripcion,
    d.peso,
    d.costo
FROM encomiendas e
JOIN clientes c ON e.cliente_id = c.cliente_id
JOIN detalles_encomienda d ON e.encomienda_id = d.encomienda_id
WHERE e.encomienda_id = 1;

-- Supongamos que deseas obtener todas las encomiendas del cliente con ID 1
SELECT 
    e.encomienda_id,
    e.fecha_envio,
    e.fecha_entrega,
    e.estado,
    d.descripcion,
    d.peso,
    d.costo
FROM encomiendas e
JOIN detalles_encomienda d ON e.encomienda_id = d.encomienda_id
WHERE e.cliente_id = 1;
