```sh
# 1. Actualiza los paquetes del sistema
sudo apt update
sudo apt upgrade -y

# 2. Instala Apache
sudo apt install apache2 -y

# 3. Verifica el estado del servicio de Apache
sudo systemctl status apache2


# 4. Habilita Apache para que se inicie al arrancar el sistema
sudo systemctl enable apache2


# 6. Configuración del firewall (opcional)
sudo ufw allow 'Apache Full'
sudo ufw reload

# Reiniciar Apache:
sudo systemctl restart apache2

# Detener Apache:
sudo systemctl stop apache2
```

## web

```sh
# dir root web
cd /var/www/html

# 1. Verificar los permisos del archivo:
ls -l index.html

# 2. Usar sudo para eliminar el archivo:
sudo rm index.html

sudo git clone https://github.com/fgp555/hml-todolist.git .

```
