
DROP DATABASE newsletter;
CREATE DATABASE newsletter;
USE newsletter;

CREATE TABLE subscribers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL
);


INSERT INTO subscribers (email) VALUES ('demo@example.com');


SELECT * FROM subscribers;
