CREATE TABLE stat (
    id INT AUTO_INCREMENT PRIMARY KEY,
    domain VARCHAR(255),
    visit INT,
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    origin VARCHAR(255)
);


INSERT INTO stat (domain, visit, origin) VALUES ('google.com', 1, 'unknown');
INSERT INTO stat (domain, visit, origin) VALUES ('youtube.com', 1, 'google.com');
INSERT INTO stat (domain, visit, origin) VALUES ('instagram.com', 1, 'youtube.com');
INSERT INTO stat (domain, visit, origin) VALUES ('myweb.com', 1, 'google.com');

SELECT * FROM stat;
SELECT * FROM stat ORDER BY time DESC;

SELECT domain, COUNT(visit) AS total_visits
FROM stat
GROUP BY domain
ORDER BY total_visits DESC;

SELECT origin, COUNT(*) AS total_visits
FROM stat
GROUP BY origin
ORDER BY total_visits DESC;
