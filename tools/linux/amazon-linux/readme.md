```sh
sudo yum install htop -y
htop

sudo yum update

sudo yum install nginx -y
nginx -v

sudo systemctl status nginx
sudo systemctl start nginx
sudo systemctl restart nginx
sudo systemctl reload nginx
# Activa Nginx al reiniciar el servidor
sudo systemctl enable nginx

```

# create index.html

```sh
sudo mkdir -p /var/www/giomr.site/html
sudo vim /var/www/giomr.site/html/index.html
```

```sh
sudo vim /etc/nginx/conf.d/giomr.site.conf

```

```nginx
server {
    listen 80;
    server_name giomr.site www.giomr.site;

    root /var/www/giomr.site/html;
    index index.html index.htm;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

```sh
sudo systemctl reload nginx

sudo yum install certbot python3-certbot-nginx -y

sudo certbot --nginx -d giomr.site
sudo certbot --nginx -d giomr.site -d www.giomr.site
```

# Node JS

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
source ~/.nvm/nvm.sh

nvm install 20
nvm use 20

nvm install --lts
nvm use --lts

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
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

# 4. Configuración de Nginx con Certbot y Node.js

```sh
curl http://localhost:3000

sudo vim /etc/nginx/conf.d/giomr.site.conf

:%d

```

```nginx
server {
    listen 443 ssl;
    server_name giomr.site;

    ssl_certificate /etc/letsencrypt/live/giomr.site/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/giomr.site/privkey.pem;
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
    server_name giomr.site;

    # Redirigir todo HTTP a HTTPS
    return 301 https://$host$request_uri;
}
```

```sh
sudo certbot --nginx -d giomr.site -d www.giomr.site


sudo nginx -t
sudo systemctl reload nginx

```

# 5. 🚀 PM2 (Process Manager 2)

```sh
npm install -g pm2
pm2 -v

pm2 start app.js --name giomr
pm2 save
pm2 startup

# copia y pega un comando similar a este
# sudo env PATH=$PATH:/home/ec2-user/.nvm/versions/node/v22.16.0/bin /usr/lib/nodejs18/lib/node_modules/pm2/bin/pm2 startup systemd -u ec2-user --hp /home/ec2-user

pm2 list
sudo reboot


```
