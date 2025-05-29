# Install PHP in Linux AWS

```sh
# Instalar Apache:
sudo apt install apache2 -y

# Instalar PHP
sudo apt install php libapache2-mod-php php-cli php-mysql php-curl php-xml php-mbstring -y

php -v

# reinicia el servidor
sudo systemctl restart apache2
