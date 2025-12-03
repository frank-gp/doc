CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY,
    nombre_cliente VARCHAR(100),
    direccion_cliente VARCHAR(255)
);

CREATE TABLE pedidos (
    id_pedido INT PRIMARY KEY,
    fecha_pedido DATE,
    total_pedido DECIMAL(10, 2),
    id_cliente INT,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);


-- Insertar datos en la tabla 'clientes'
INSERT INTO clientes (id_cliente, nombre_cliente, direccion_cliente)
VALUES
    (1, 'Cliente A', 'Calle Principal 123'),
    (2, 'Cliente B', 'Avenida Secundaria 456'),
    (3, 'Cliente C', 'Calle Transversal 789');

-- Insertar datos en la tabla 'pedidos'
INSERT INTO pedidos (id_pedido, fecha_pedido, total_pedido, id_cliente)
VALUES
    (101, '2023-01-15', 50.00, 1),
    (102, '2023-02-20', 75.50, 2),
    (103, '2023-03-10', 30.25, 1),
    (104, '2023-04-05', 100.00, 3);


SELECT * FROM clientes;


SELECT * FROM pedidos;

SELECT
    pedidos.id_pedido,
    pedidos.fecha_pedido,
    pedidos.total_pedido,
    clientes.nombre_cliente
FROM
    pedidos
INNER JOIN
    clientes ON pedidos.id_cliente = clientes.id_cliente;


SELECT * FROM pedidos WHERE id_cliente = 1;
