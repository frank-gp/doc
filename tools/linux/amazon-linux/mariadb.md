# 2. 🛠️ Instala el servidor MariaDB

```sh
sudo dnf install mariadb105-server

mysql --version
which mariadbd
```

# 3. 🔒 Asegura la instalación (opcional pero recomendado)

```sh
# contraseña de root, elimina usuarios anónimos, etc.
sudo mysql_secure_installation
```

# 4. ▶️ Verifica que esté corriendo

```sh
sudo systemctl status mariadb

# 5. 🚀 Inicia el servicio
sudo systemctl start mariadb

# 6. 🚀 Habilita el servicio
# Habilitar MariaDB para que inicie al reiniciar la instancia
sudo systemctl enable mariadb

```

# 5. 💻 Accede al cliente de MariaDB

```sh
sudo mariadb
mariadb -u root -p
mariadb -u aws_user -p

```

# 7. Sal de MariaDB

```sh
exit;
```

# 📂 Crea la base de datos

```sql
CREATE DATABASE aws_db;
SHOW DATABASES;

-- Dentro del cliente de MariaDB
CREATE DATABASE aws_db;

CREATE USER 'aws_user'@'localhost' IDENTIFIED BY 'P45SWorD123';
GRANT ALL PRIVILEGES ON aws_db.* TO 'aws_user'@'localhost';
FLUSH PRIVILEGES;

-- Crear usuario
CREATE USER 'aws_user'@'%' IDENTIFIED BY 'PA5SWorD123';
-- Otorgar permisos al usuario sobre la base de datos
GRANT ALL PRIVILEGES ON aws_db.* TO 'aws_user'@'%';
-- Aplicar los cambios
FLUSH PRIVILEGES;





-- mysql -h <IP-Pública-EC2> -P 3306 -u aws_user -p



```
