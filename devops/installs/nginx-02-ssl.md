# Install Certbot SSL

```sh
# Instalar Certbot (Let’s Encrypt)
sudo apt install certbot python3-certbot-nginx -y
certbot --version

sudo certbot --nginx -d aws.frankgp.com -d aws2.frankgp.com --cert-name frankgp.com
sudo certbot certificates
sudo certbot delete --cert-name frankgp.com
# Renovación automática SSL (IMPORTANTE)
sudo certbot renew --dry-run

sudo systemctl status nginx
sudo systemctl restart nginx
sudo systemctl reload nginx

curl https://aws.frankgp.com
curl https://aws2.frankgp.com

# HTTP HEAD
curl -I https://aws.frankgp.com
curl -I https://aws2.frankgp.com
```

# Redirect IP → domain

```sh
curl http://18.189.171.213

sudo vim /etc/nginx/sites-enabled/default
```

```js
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    server_name _;

    return 301 https://aws.frankgp.com$request_uri;
}
```

# Install Node.js

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
    server_name frankgp.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name frankgp.com;

    ssl_certificate /etc/letsencrypt/live/frankgp.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/frankgp.com/privkey.pem;
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
