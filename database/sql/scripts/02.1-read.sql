CREATE TABLE userstt (
    idcc INT NOT NULL AUTO_INCREMENT,
    namecc VARCHAR(50) NOT NULL,
    agecc INT NOT NULL,
    emailcc VARCHAR(100) NOT NULL,
    PRIMARY KEY (idcc)
);

DROP TABLE userstt;


INSERT INTO userstt (namecc, agecc, emailcc) VALUES 
("bea", 25, "bea@gmail.com"),
("alex", 15, "alex@gmail.com"),
("xavier", 35, "xavier@gmail.com"),
("carla", 5, "carla@gmail.com");

SELECT * FROM userstt;

DELETE FROM userstt;

SELECT * FROM userstt LIMIT 1;
SELECT * FROM userstt WHERE agecc >= 15;
SELECT * FROM userstt WHERE agecc > 15 AND namecc = "xavier";
SELECT * FROM userstt WHERE agecc > 25 OR namecc = "alex";
SELECT * FROM userstt WHERE namecc != "alex";
SELECT * FROM userstt WHERE agecc BETWEEN 15 AND 30;
SELECT * FROM userstt WHERE emailcc LIKE "%gmail%";

SELECT * FROM userstt ORDER BY agecc ASC;
SELECT * FROM userstt ORDER BY namecc ASC;
SELECT MAX(agecc) AS mayor1 FROM userstt;
SELECT MIN(agecc) AS menor1 FROM userstt;

SELECT idcc, namecc FROM userstt;
SELECT idcc, namecc as new_name FROM userstt;


SELECT idcc, emailcc FROM userstt;
SELECT * FROM userstt new_alias;
SELECT alias_tb.idcc id_alias, alias_tb.emailcc email_alias
FROM userstt alias_tb;