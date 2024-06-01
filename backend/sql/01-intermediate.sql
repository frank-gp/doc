DROP DATABASE IF EXISTS my_database;


CREATE TABLE table_basic (id_column INT);

DROP TABLE table_basic;

RENAME TABLE table_basic TO new_name;

RENAME TABLE new_name TO table_basic;

DESCRIBE table_basic;

ALTER TABLE table_basic ADD name_column VARCHAR(255);
ALTER TABLE table_basic ADD COLUMN name_column2 VARCHAR(255);

ALTER TABLE table_basic 
MODIFY COLUMN id_column INT PRIMARY KEY AUTO_INCREMENT;


INSERT INTO table_basic (name_column) VALUES ("Frank GP")
INSERT INTO table_basic (name_column) VALUES ("Marketlyn Craft")

DELETE FROM table_basic;

SELECT * FROM table_basic;

SELECT * FROM table_basic 
WHERE id_column = 1
AND name_column = "Frank GP";

SHOW CREATE TABLE table_basic;

-- CREATE TABLE `table_basic` (
--   `id_column` int NOT NULL AUTO_INCREMENT,
--   `name_column` varchar(255) DEFAULT NULL,
--   PRIMARY KEY (`id_column`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci