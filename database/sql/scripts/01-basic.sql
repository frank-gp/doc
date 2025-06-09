/* 
host: "localhost",
user: "root",
password: "",
database: "my_database",
*/
SHOW DATABASES;

DROP DATABASE my_database;

CREATE DATABASE my_database;

USE my_database;

SHOW TABLES;


CREATE TABLE IF NOT EXISTS my_table (
    id_column INT PRIMARY KEY AUTO_INCREMENT,
    name_column VARCHAR(255) NOT NULL,
    email_column VARCHAR(255) NOT NULL
);

DROP TABLE my_table;

DESCRIBE my_table;

SHOW COLUMNS FROM my_table;

INSERT INTO
    my_table (name_column, email_column)
VALUES (
        'John Doe',
        'john@example.com'
    ),
    (
        'Jane Smith',
        'jane@example.com'
    );

SELECT * FROM my_table;

SELECT * FROM my_table WHERE id_column = 2;

UPDATE my_table SET name_column = "Marketlyn" WHERE id_column = 2;

DELETE FROM my_table WHERE name_column = "Marketlyn";

-- Delete all data from the table
DELETE FROM my_table;