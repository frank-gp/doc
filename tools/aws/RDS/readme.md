# Usar MySQL Client en la Terminal de Ubuntu

```sh
sudo apt update

sudo apt install mysql-client

mysql -u admin -h database-1.asdf.us-east-2.rds.amazonaws.com -p

SELECT VERSION();
```

# Queries

```sql
CREATE DATABASE my_database;
USE my_database;
SHOW DATABASES;
USE my_database;
SHOW TABLES;

```

# Usar el Cliente de PostgreSQL en la Terminal de Ubuntu

```sh
sudo apt update

sudo apt install postgresql-client

psql -U postgres -h database-1.asdf.us-east-2.rds.amazonaws.com

SELECT version();
```
