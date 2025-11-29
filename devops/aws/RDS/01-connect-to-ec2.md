# Usar MySQL Client en la Terminal de Ubuntu

```sh
Engine-type: MySQL Community
Templates: Free tier
DB-instance-identifier: database-1
Master-username: aws_rds_tutorial_db_username
Master-password: my_master_password
Connectivity: Connect to an EC2 compute resource

# Delete
database
Security Groups / Reglas de firewall
```

```sh
sudo apt update

sudo apt install mysql-client
sudo apt install mysql-client -y
mysql --version

mysql -u admin -h database-1.c5agq48gmlo5.us-east-2.rds.amazonaws.com -p
mysql -h database-1.c5agq48gmlo5.us-east-2.rds.amazonaws.com -P 3306 -u admin -p

SELECT VERSION();

CREATE DATABASE test_db;

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
