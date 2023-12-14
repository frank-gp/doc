-- in git bash
-- mysql -u root -p < db.sql
-- mysql -u fgpooswu_nodejs -p < db.sql
CREATE DATABASE fgpooswu_nodejs;
USE fgpooswu_nodejs;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  task VARCHAR(255) NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT false
);
