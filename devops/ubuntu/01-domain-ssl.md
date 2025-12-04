# Install Nginx

```sh
sudo apt update
sudo apt install nginx -y
nginx -v

sudo service nginx start
sudo service nginx enable
sudo service nginx status
sudo service nginx stop

curl http://localhost
curl http://18.189.171.213
```

# Config Domains and Subdomains

```js
server {
    listen 80;
    server_name aws.frankgp.com aws2.frankgp.com;

    root /var/www/html;
    index index.html index.htm index.nginx-debian.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

```sh
sudo vim /etc/nginx/sites-available/frankgp.com
sudo ln -s /etc/nginx/sites-available/frankgp.com /etc/nginx/sites-enabled/
ls -l /etc/nginx/sites-available
ls -l /etc/nginx/sites-enabled

sudo nginx -t
sudo systemctl reload nginx

curl http://aws.frankgp.com
```

# Install Certbot SSL

```sh
# Instalar Certbot (Let’s Encrypt)
sudo apt install certbot python3-certbot-nginx -y
certbot --version

sudo certbot --nginx -d aws2.frankgp.com --cert-name frankgp.com
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
