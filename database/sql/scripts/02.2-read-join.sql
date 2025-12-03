CREATE TABLE productstt (
    idcc INT NOT NULL AUTO_INCREMENT,
    namecc VARCHAR(50) NOT NULL,
    created_bycc INT NOT NULL,
    brandcc VARCHAR(50) NOT NULL,
    PRIMARY KEY (idcc),
    FOREIGN KEY (created_bycc) REFERENCES userstt(idcc)
);

DROP TABLE productstt;

INSERT INTO productstt (namecc, created_bycc, brandcc) VALUES
("ipad", 1, "apple"),
("iphone", 1, "apple"),
("watch", 2, "apple"),
("macbook", 1, "apple"),
("imac", 2, "apple"),
("box", 2, "microsoft"),
("ipad mini", 2, "apple");

SELECT * FROM productstt;
SELECT * FROM userstt;

SELECT userstt.idcc, userstt.emailcc
FROM userstt
LEFT JOIN productstt 
ON userstt.idcc = productstt.created_bycc;

SELECT u.idcc id_user, u.emailcc user_, p.namecc product
FROM userstt u 
LEFT JOIN productstt p
ON u.idcc = p.created_bycc;

SELECT u.idcc id_user, u.emailcc user_, p.namecc product
FROM userstt u 
RIGHT JOIN productstt p
ON u.idcc = p.created_bycc;

SELECT u.idcc id_user, u.emailcc user_, p.namecc product
FROM userstt u 
INNER JOIN productstt p
ON u.idcc = p.created_bycc;

SELECT u.idcc, u.namecc , p.namecc 
FROM userstt u 
CROSS JOIN productstt p;

SELECT COUNT(idcc), brandcc 
FROM productstt 
GROUP BY brandcc;

SELECT COUNT(p.idcc), u.namecc 
FROM productstt p 
LEFT JOIN userstt u 
ON u.idcc = p.created_bycc
GROUP BY created_bycc
HAVING COUNT(p.idcc) >= 2;

