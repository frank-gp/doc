-- Crear la tabla url_mappings
CREATE TABLE url_mappings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    long_url VARCHAR(255) NOT NULL,
    short_code VARCHAR(10) NOT NULL
);

-- Crear la tabla para el seguimiento de visitas
CREATE TABLE url_visits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    url_id INT,
    visit_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (url_id) REFERENCES url_mappings(id)
);

-- Insertar un registro de URL para demostración
INSERT INTO url_mappings (long_url, short_code) VALUES ('https://www.ejemplo.com', 'abc123');
INSERT INTO url_mappings (long_url, short_code) VALUES ('https://www.ejemplo2.com', 'abc123b');

-- Registrar una visita para la URL con short_code 'abc123'
INSERT INTO url_visits (url_id) SELECT id FROM url_mappings WHERE short_code = 'abc123';
INSERT INTO url_visits (url_id) SELECT id FROM url_mappings WHERE short_code = 'abc123b';


SELECT
    um.id,
    um.long_url,
    um.short_code,
    COUNT(uv.id) AS visit_count
FROM
    url_mappings um
LEFT JOIN
    url_visits uv ON um.id = uv.url_id
GROUP BY
    um.id, um.long_url, um.short_code
ORDER BY
    visit_count DESC;
