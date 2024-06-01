CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE
    employee (
        id INT (11) NOT NULL AUTO_INCREMENT,
        name VARCHAR(45) DEFAULT NULL,
        salary INT (5) DEFAULT NULL,
        PRIMARY KEY (id)
    );

DESCRIBE employee;

/* 
show tables; 
 */
INSERT INTO
    employee
VALUES
    (1, "Joe", 1000),
    (2, "Henry", 2000),
    (3, "Sam", 3002),
    (4, "Max", 4000);

/* 
SELECT * FROM employee

DELETE FROM employee WHERE id = 2;
 */