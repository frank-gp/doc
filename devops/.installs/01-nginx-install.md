# Install Nginx

```sh
sudo apt update
sudo apt install nginx -y
nginx -v

sudo nginx -t # probar la configuración antes de recargar o reiniciar.

sudo systemctl enable nginx    # Habilita Nginx para que arranque al iniciar el sistema
sudo systemctl reload nginx    # Recarga la configuración sin cortar conexiones
sudo systemctl restart nginx   # Reinicia Nginx (detiene y vuelve a iniciar)
sudo systemctl start nginx     # Inicia Nginx si está detenido
sudo systemctl status nginx    # Muestra el estado actual de Nginx
sudo systemctl stop nginx      # Detiene Nginx cortando todas las conexiones

curl localhost
curl localhost -I # HEAD
curl http://18.117.184.75

sudo mkdir -p /var/www/hello-world
echo "hello world" | sudo tee /var/www/hello-world/index.html

sudo vim /etc/nginx/sites-available/aws.frankgp.com
cat /etc/nginx/sites-available/aws.frankgp.com
```

```conf
server {
    listen 80;
    server_name aws.frankgp.com;

    root /var/www/hello-world;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

```sh
# Crear un enlace simbólico (symbolic link / symlink)
sudo ln -s /etc/nginx/sites-available/aws.frankgp.com /etc/nginx/sites-enabled/
cat /etc/nginx/sites-enabled/aws.frankgp.com

sudo nginx -t
sudo systemctl reload nginx

curl http://aws.frankgp.com
```
