-- mysql -u root
-- system clear
-- system cls

DROP DATABASE my_database;
CREATE DATABASE my_database;
USE my_database;

SHOW DATABASES;

CREATE TABLE my_table (
        id_column INT PRIMARY KEY AUTO_INCREMENT,
        name_column VARCHAR(255) NOT NULL,
        email_column VARCHAR(255) NOT NULL
    );

DROP TABLE my_table;

SHOW TABLES;

SHOW COLUMNS FROM my_table;

INSERT INTO my_table (name_column, email_column) VALUES
    ('John Doe', 'john@example.com'),
    ('Jane Smith', 'jane@example.com');


SELECT * FROM my_table;

