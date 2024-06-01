# PostgreSQL

### PostgreSQL Downloads

[https://www.postgresql.org/download/](https://www.postgresql.org/download/)

## Commands PostgreSQL

```bash

# Alt + F8 = Reset Console in git bash

# Config PostgreSQL environment
# PostgreSQL installation path
# C:\Program Files\PostgreSQL\15\bin

# Command to check the installed psql version
psql --version

# Connect to PostgreSQL as the 'postgres' user
psql -U postgres

# List databases
\l

# Connect to the 'my_database' database
\c my_database;

# Display tables available in the current database
\dt

# Describe a specific table
\d credentials_table;
```

## Queries SQL

```sql

--- ========== my_database ==========

DROP DATABASE my_database;

CREATE DATABASE my_database;

--- ========== credentials_table ==========

CREATE TABLE credentials_table (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL
);

INSERT INTO credentials_table (username, password)
VALUES
    ('john_doe', 'password123'),
    ('jane_smith', 'letmein321'),
    ('alice_johnson', 'securepassword');


SELECT * FROM credentials_table;


--- ========== users_table ==========

DROP TABLE IF EXISTS users_table;

CREATE TABLE users_table (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR NOT NULL UNIQUE,
    birthdate DATE NOT NULL,
    nDni INTEGER NOT NULL UNIQUE,
    credentialsID INTEGER,
    FOREIGN KEY (credentialsID) REFERENCES credentials_table(id)
);


INSERT INTO users_table (name, email, birthdate, nDni, credentialsID)
VALUES
    ('John Doe', 'john@example.com', '1990-05-15', 123456789, 1),
    ('Jane Smith', 'jane@example.com', '1985-09-20', 987654321, 2),
    ('Alice Johnson', 'alice@example.com', '2000-12-10', 555555555, 3);

SELECT * FROM users_table;


--- ========== turns_table ==========

CREATE TABLE turns_table (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    time TIME NOT NULL,
    status VARCHAR NOT NULL,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users_table(id)
);

INSERT INTO turns_table (date, time, status, user_id)
VALUES
    ('2024-05-06', '08:00:00', 'active', 1),
    ('2024-05-07', '09:30:00', 'active', 2),
    ('2024-05-08', '10:45:00', 'active', 3);


SELECT * FROM turns_table;

SELECT * FROM turns_table WHERE id = 1;

UPDATE turns_table SET status = 'cancelled' WHERE id = 1;

DELETE FROM turns_table WHERE id = 2;
```

## Advanced

```bash
# Describe a table with additional details
\d+ credentials_table;

# Display all users
\du

#   ==========
CREATE USER my_user WITH PASSWORD 'my_password';

GRANT ALL PRIVILEGES ON DATABASE my_database TO my_user;

#   ==========
REVOKE ALL PRIVILEGES ON DATABASE my_database FROM my_user;

DROP USER my_user;

CREATE USER my_user WITH
    PASSWORD 'my_password'
    SUPERUSER
    CREATEDB
    CREATEROLE
    REPLICATION
    BYPASSRLS;


# List schemas in the current database
\dn

# List indexes in the current database
\di

-- Exit the current PostgreSQL session and return to the command prompt
\q

```

---

---

---

### Change Password user in postgreSQL

Open _**pg_hba.conf**_ in vscode (15 = version)

```
C:\Program Files\PostgreSQL\15\data\pg_hba.conf
```

Find line 90 in _**pg_hba.conf**_ file

```bash
# IPv6 local connections:
host    all             all             ::1/128                 scram-sha-256
```

change "scram-sha-256" to "trust"

```bash
# IPv6 local connections:
host    all             all             ::1/128                 trust
```

Access in SQL shell without password, and command for change password en shell

```bash
\password
```

Restore Config: change "trust" to "scram-sha-256"
```bash
# IPv6 local connections:
host    all             all             ::1/128                 scram-sha-256
```

---

---

---
