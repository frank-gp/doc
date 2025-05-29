Testeo con Python

```sh
sudo python3 -m http.server 80
```

Instala Nginx

```sh
sudo apt update
sudo apt install nginx -y
nginx -v

```

Instala Certbot (para el certificado SSL)

```sh
sudo apt install certbot python3-certbot-nginx -y

```

Configura Nginx

```sh
# sites-available = todos los sitios posibles (configuraciones).
sudo vim /etc/nginx/sites-available/giosite

# sites-enabled = sitios actualmente activos (enlaces simbólicos).
sudo ln -s /etc/nginx/sites-available/giosite /etc/nginx/sites-enabled/

# Genera el certificado SSL con Certbot
sudo certbot --nginx -d giomr.site

# verifica la sintaxis y validez de la configuración de NGINX
sudo nginx -t

# recarga NGINX
sudo systemctl reload nginx

```

# Install Node.js

### 🧪 Verificación final

```sh
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v

cd ~
mkdir nodejs
cd nodejs
npm init -y
npm install express
```

# Node JS Server

```sh
sudo vim /etc/nginx/sites-enabled/default
```

### Archivo de configuración

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name giomr.site;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name giomr.site;

    ssl_certificate /etc/letsencrypt/live/giomr.site/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/giomr.site/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

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

### recarga NGINX

```sh
sudo systemctl reload nginx
```

### (opcional) También puedes ejecutar este comando desde tu EC2 para probar renovación

```sh
sudo certbot renew --dry-run
```

# Reinicia nginx:

```sh

sudo systemctl restart nginx
```
