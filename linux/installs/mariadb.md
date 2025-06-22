# 1. 📦 Actualiza el sistema

```sh
sudo apt update
sudo apt upgrade
```

# 2. 🛠️ Instala el servidor MariaDB

```sh
sudo apt install mariadb-server

mysql --version

sudo mariadb

```

# Opcion 1

```sql
CREATE DATABASE my_db;
SHOW DATABASES;

ALTER USER 'root'@'localhost' IDENTIFIED VIA mysql_native_password;
ALTER USER 'root'@'localhost' IDENTIFIED BY '';
FLUSH PRIVILEGES;

SELECT user, host FROM mysql.user;

exit;

```

# Opcion 2

```sql
-- Crear la base de datos
CREATE DATABASE my_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Crear el usuario y establecer contraseña
CREATE USER 'my_user'@'localhost' IDENTIFIED BY 'my_P45SWorD123';

-- Otorgar todos los privilegios sobre la base de datos al usuario
GRANT ALL PRIVILEGES ON my_db.* TO 'my_user'@'localhost';

-- Aplicar cambios de privilegios
FLUSH PRIVILEGES;


```

# 3. 🔒 Asegura la instalación (opcional pero recomendado)

```sh
sudo mysql_secure_installation
```

# 4. ▶️ Verifica que esté corriendo

```sh
sudo systemctl status mariadb

# 5. 🚀 Inicia el servicio
sudo systemctl start mariadb

# 6. 🚀 Habilita el servicio
sudo systemctl enable mariadb

```

# 5. 💻 Accede al cliente de MariaDB

```sh
sudo mariadb
```

# 7. Sal de MariaDB

```sh
exit;
```

mariadb -u root -p

mysql -h 3.16.214.57 -u admin -p

TuPasswordSegura
