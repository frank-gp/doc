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
-- Crear la base de datos
CREATE DATABASE my_database_tutorial CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Crear el usuario y establecer contraseña
CREATE USER 'my_user_tutorial'@'localhost' IDENTIFIED BY 'my_PassWrod_tutorial123';

-- Otorgar todos los privilegios sobre la base de datos al usuario
GRANT ALL PRIVILEGES ON my_database_tutorial.* TO 'my_user_tutorial'@'localhost';

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
