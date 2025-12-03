# ☁️ Configuración de VM en Azure (Free Tier)

```sh
ssh -i ~/.ssh/azure-key-pair.pem azureuser@4.204.40.221

# Actualizar la base de datos y luego instalar
sudo apt update && sudo apt upgrade -y

sudo apt install nginx -y
nginx -v

sudo service nginx status
sudo service nginx start
sudo service nginx reload
sudo service nginx restart
# Activa Nginx al reiniciar el servidor
sudo service nginx enable

```

# 📦 Node JS

```sh
# curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

sudo apt-get install -y nodejs
node -v
npm -v
```

# 🌐 Node JS server basico

```sh
sudo mkdir -p node-temp
cd node-temp
sudo vim app.js
```

app.js

```js
const http = require("http");
const server = http.createServer((req, res) => {
  const log = `${new Date().toISOString()} ${req.method} ${req.url}`;
  console.log(log);
  res.end("Hello world\n" + log);
});
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
```

# 🔑 Configurar NGINX

```sh
node ~/node-temp/app.js
sudo vim /etc/nginx/sites-enabled/default
```

```js
server {
    listen 80;
    server_name _;

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

```sh
node ~/node-temp/app.js

sudo service nginx reload

curl http://localhost:3000
# curl http://130.107.212.73
```

# 🔑 Instalar HTTPS con Let's Encrypt

```sh
# Editar tu archivo Nginx
sudo vim /etc/nginx/sites-enabled/default

# reemplaza esta línea server_name _;
server_name giomr.site www.giomr.site;

# Instalar Certbot para Nginx
sudo apt install certbot python3-certbot-nginx -y

# Ejecutar Certbot
sudo certbot --nginx -d giomr.site -d www.giomr.site

# Verifica que no haya errores
sudo nginx -t
sudo service nginx reload

# 🌐 Verifica con curl o navegador:
curl -I https://giomr.site
# Puedes verificar que haya propagado con
nslookup giomr.site
nslookup fgp.one

```

# 🚀 PM2 (Process Manager 2)

```sh
sudo npm install -g pm2
pm2 -v

pm2 start ~/node-temp/app.js --name node-app
pm2 save
pm2 startup

# copia y pega el comando que se te muestra

pm2 list
pm2 logs node-app
pm2 restart node-app

sudo reboot
```

# 📦 NPM I

```sh
npm install --only=prod

npm install --production
```
