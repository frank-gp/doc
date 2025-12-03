https://mariadb.org/download/

```sh
mysql -u root
mysql -u root -p

mysql -u admin -p -h database.123.rds.amazonaws.com

```

# Instalar MariaDB como servicio de Windows

```sh
# open C:\bin\mariadb-10.6.21-winx64\bin

# Instala el servicio (usa el nombre MariaDB o el que quieras):
mysqld --install MariaDB

# Inicia el servicio:
net start MariaDB
```

# 🔍 Verificación

> - Presiona Win + R, escribe services.msc, presiona Enter.
> - Busca el servicio MariaDB en la lista.
> - Da doble clic sobre él.
> - En “Tipo de inicio” debería decir: Automático.

```sh
# Detener el servicio
net stop MariaDB

# Eliminar el servicio
mysqld --remove
mysqld --remove MariaDB
```
