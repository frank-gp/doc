```sh
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
