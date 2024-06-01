DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id_prod INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(50) NOT NULL,
    count_visit INT DEFAULT 0,
    url VARCHAR(255) NOT NULL
);

INSERT INTO products (name, description, price, category, url)
VALUES 
    ('Laptop', 'Computer mobile', 19.99, 'Electronics', 'https://whatsapp.com/product1'),
    ('Phone', 'Mini computer for all users', 29.99, 'Clothing', 'https://whatsapp.com/product2'),
    ('PC Desktop', 'Computer for Desktop and enginer', 39.99, 'Home Goods', 'https://whatsapp.com/product3');

SELECT * FROM products;

UPDATE products
SET count_visit = count_visit + 1, price = 24.99
WHERE id_prod = 2;

SELECT id_prod, name, count_visit
FROM products
ORDER BY count_visit DESC;
