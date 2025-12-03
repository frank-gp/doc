CREATE TABLE personas (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  nacimiento DATE NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO personas (nombre, nacimiento)
VALUES
('Juan Perez', '1980-10-05'),
('Maria Gonzalez', '1975-12-12'),
('Pedro Sanchez', '1968-08-21'),
('Ana Lopez', '1953-04-23'),
('Jose Garcia', '1948-01-15');

SELECT * FROM personas;

SELECT nombre, DATE_FORMAT(nacimiento, '%d-%m-%Y') AS cumpleaños
FROM personas
WHERE YEAR(nacimiento) = 1980;

SELECT nombre, nacimiento
FROM personas
WHERE MONTH(nacimiento) IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)
AND YEAR(nacimiento) = 1980;


SELECT nombre, DATE_FORMAT(nacimiento, '%d-%m-%Y') AS cumpleaños
FROM personas
WHERE MONTH(nacimiento) = MONTH(CURDATE())
AND DAY(nacimiento) = DAY(CURDATE());


SELECT DAYNAME(CURDATE()), MONTHNAME(CURDATE());
SELECT DAYNAME(CURDATE()), MONTHNAME(CURDATE());

SELECT p.nombre, p.nacimiento,
       DAYNAME(p.nacimiento) AS dia_nacimiento,
       MONTHNAME(p.nacimiento) AS mes_nacimiento
FROM personas p
JOIN (
    SELECT CURDATE() AS fecha_actual,
           MONTHNAME(CURDATE()) AS mes_actual,
           DAYNAME(CURDATE()) AS dia_actual
) AS calendario
ON p.nacimiento = calendario.fecha_actual
WHERE p.nacimiento = calendario.fecha_actual


SELECT
  nombre,
  CONCAT(
    DAYNAME(nacimiento), ' ',
    DAY(nacimiento), ' de ',
    CASE MONTH(nacimiento)
      WHEN 1 THEN 'enero'
      WHEN 2 THEN 'febrero'
      WHEN 3 THEN 'marzo'
      WHEN 4 THEN 'abril'
      WHEN 5 THEN 'mayo'
      WHEN 6 THEN 'junio'
      WHEN 7 THEN 'julio'
      WHEN 8 THEN 'agosto'
      WHEN 9 THEN 'septiembre'
      WHEN 10 THEN 'octubre'
      WHEN 11 THEN 'noviembre'
      WHEN 12 THEN 'diciembre'
    END, ' del ',
    YEAR(nacimiento)
  ) AS formatted_nacimiento
FROM personas;


SELECT
  nombre,
  CONCAT(
    DAYNAME(nacimiento), ' ',
    DAY(nacimiento), ' de ',
    MONTHNAME(nacimiento), ' del ',
    YEAR(nacimiento)
  ) AS formatted_nacimiento
FROM personas;


SELECT
  nombre,
  CONCAT(
    DAYNAME(CONCAT('2023-', MONTH(nacimiento), '-', DAY(nacimiento))), ' ',
    DAY(CONCAT('2023-', MONTH(nacimiento), '-', DAY(nacimiento))), ' de ',
    MONTHNAME(CONCAT('2023-', MONTH(nacimiento), '-', DAY(nacimiento))), ' del 2023'
  ) AS upcoming_birthday
FROM personas
WHERE DATE(CONCAT('2023-', MONTH(nacimiento), '-', DAY(nacimiento))) >= CURDATE()
ORDER BY upcoming_birthday;


SELECT
  nombre,
  CONCAT(
    DAYNAME(CONCAT(YEAR(CURDATE()), '-', MONTH(nacimiento), '-', DAY(nacimiento))), ' ',
    DAY(CONCAT(YEAR(CURDATE()), '-', MONTH(nacimiento), '-', DAY(nacimiento))), ' de ',
    MONTHNAME(CONCAT(YEAR(CURDATE()), '-', MONTH(nacimiento), '-', DAY(nacimiento))), ' del ', YEAR(CURDATE())
  ) AS upcoming_birthday
FROM personas
ORDER BY upcoming_birthday;

