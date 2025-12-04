```sh
# Advanced Package Tool
sudo apt update
sudo apt install nginx -y
nginx -v

sudo service nginx start
sudo service nginx enable
sudo service nginx status
sudo service nginx stop

#  hacer que Nginx arranque automáticamente cuando abres WSL
vim ~/.bashrc
# Al final del archivo, agrega esta línea para iniciar Nginx al abrir WSL
sudo service nginx start

# Redirigir el puerto 80 (HTTP) al puerto 3000 con Nginx
cd /etc/nginx/sites-available
sudo vim default
sudo vim /etc/nginx/sites-available/default
sudo nginx -t
sudo systemctl restart nginx

curl http://localhost
```

# nging Configuration

```nginx
server {
    listen 80;
    server_name localhost;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;

        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
