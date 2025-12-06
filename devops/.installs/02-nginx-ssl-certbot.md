
# Install SSL Certbot

```sh
# Instalar Certbot (Let’s Encrypt)
sudo apt install certbot python3-certbot-nginx -y
certbot --version

sudo certbot --nginx -d aws.frankgp.com
sudo certbot --nginx -d aws.frankgp.com -d aws2.frankgp.com --cert-name frankgp.com
sudo certbot certificates
sudo certbot delete --cert-name aws.frankgp.com

# simular la renovación de tus certificados
sudo certbot renew --dry-run

curl https://aws.frankgp.com
```

# Redirect IP → domain

```sh
sudo vim /etc/nginx/sites-available/default
cat /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
curl http://18.117.184.75
```

# default

```conf
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    server_name _;

    return 301 https://aws.frankgp.com$request_uri;
}
```

# Subdominio con reverse proxy al puerto 3000

```sh
echo "hello world 3000" > index.html
sudo python3 -m http.server 3000
curl localhost:3000

sudo vim /etc/nginx/sites-available/aws2.frankgp.com
sudo ln -s /etc/nginx/sites-available/aws2.frankgp.com /etc/nginx/sites-enabled/
cat /etc/nginx/sites-enabled/aws2.frankgp.com
sudo nginx -t
sudo systemctl reload nginx
curl http://aws2.frankgp.com
sudo certbot --nginx -d aws2.frankgp.com
curl https://aws2.frankgp.com
```

```conf
server {
    listen 80;
    listen [::]:80;

    server_name aws2.frankgp.com;

    location / {
        proxy_pass http://127.0.0.1:3000;

        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

# Restore configuration

```sh
ls -l /etc/nginx/sites-available
ls -l /etc/nginx/sites-enabled

sudo certbot certificates
sudo certbot delete --cert-name aws.frankgp.com
sudo certbot delete --cert-name aws2.frankgp.com

sudo rm /etc/nginx/sites-enabled/aws.frankgp.com
sudo rm /etc/nginx/sites-available/aws.frankgp.com
sudo rm /etc/nginx/sites-enabled/aws2.frankgp.com
sudo rm /etc/nginx/sites-available/aws2.frankgp.com

sudo nginx -t
sudo systemctl reload nginx

curl localhost
curl http://18.117.184.75

sudo vim /etc/nginx/sites-available/default
cat /etc/nginx/sites-enabled/default
```

# Default server configuration

```conf
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    root /var/www/html;
    index index.html index.htm index.nginx-debian.html;
    server_name _;
    location / {
        try_files $uri $uri/ =404;
    }
}
```
