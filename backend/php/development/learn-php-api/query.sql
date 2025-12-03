-- Create a database
CREATE DATABASE IF NOT EXISTS api_db;

-- Use the created database
USE api_db;

-- Create a users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
);

-- Insert sample data
INSERT INTO users (name, email) VALUES
('John Doe', 'john.doe@example.com'),
('Jane Doe', 'jane.doe@example.com');

SELECT * FROM users;
