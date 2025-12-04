```sh
sudo yum update

sudo yum install nginx -y
nginx -v

sudo systemctl status nginx
sudo systemctl start nginx
sudo systemctl reload nginx
sudo systemctl restart nginx
# Activa Nginx al reiniciar el servidor
sudo systemctl enable nginx

```

# create index.html

```sh
sudo mkdir -p /var/www/frankgp.com/html
sudo vim /var/www/frankgp.com/html/index.html
ls -l /var/www/frankgp.com/html/index.html

# https://github.com/frank-gp/designer.git
```

```sh
sudo vim /etc/nginx/conf.d/frankgp.com.conf

```

```nginx
server {
    listen 80;
    server_name frankgp.com;

    root /var/www/frankgp.com/html;
    index index.html index.htm;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

```sh
sudo systemctl reload nginx

sudo yum install certbot python3-certbot-nginx -y

sudo certbot --nginx -d frankgp.com
# sudo certbot --nginx -d frankgp.com -d www.frankgp.com

sudo nginx -t       # Verifica que no haya errores
sudo systemctl reload nginx

# 🌐 Verifica con curl o navegador:
curl -I https://frankgp.com
nslookup frankgp.com

```

# Node JS

```sh
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs

node -v
npm -v
```

# Node JS server basico

```sh
sudo mkdir -p nodejs
cd nodejs
npm init -y
npm install express
```

app.js

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World! 👋" + new Date());
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

# 4. Configuración de Nginx con Certbot y Node.js

```sh
curl http://localhost:3000

sudo vim /etc/nginx/conf.d/frankgp.com.conf

:%d

```

```nginx
server {
    listen 443 ssl;
    server_name frankgp.com;

    ssl_certificate /etc/letsencrypt/live/frankgp.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/frankgp.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        proxy_pass http://localhost:3000;          # Aquí proxy hacia Node.js
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;   # para WebSocket si usas
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

server {
    listen 80;
    server_name frankgp.com;

    # Redirigir todo HTTP a HTTPS
    return 301 https://$host$request_uri;
}
```

```sh
sudo certbot --nginx -d frankgp.com


sudo nginx -t
sudo systemctl reload nginx

```

# 5. 🚀 PM2 (Process Manager 2)

```sh
npm install -g pm2
sudo npm install -g pm2
pm2 -v

pm2 start app.js --name user555
pm2 save
pm2 startup

# copia y pega el comando que se te muestra

pm2 list
sudo reboot
```
