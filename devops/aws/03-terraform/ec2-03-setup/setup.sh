#!/bin/bash
set -e

# Actualizar e instalar dependencias básicas
sudo apt update -y
sudo apt upgrade -y
sudo apt install -y nginx curl gnupg build-essential vim

# Instalar Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Crear carpeta de la app y archivo JS
mkdir -p /home/ubuntu/app
cat > /home/ubuntu/app/aws_rds.js << 'EOL'
const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
    if (req.url === "/users") {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify([]));
    } else {
        res.writeHead(404);
        res.end("Not Found");
    }
});
server.listen(PORT, () => console.log("Server running on port", PORT));
EOL

# Instalar PM2 y configurar autoarranque
sudo npm install -g pm2
pm2 start /home/ubuntu/app/aws_rds.js --name "node_app"
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u ubuntu --hp /home/ubuntu
pm2 save

# Configurar Nginx como reverse proxy
sudo bash -c 'cat > /etc/nginx/sites-available/aws_rds << "NGX"
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
NGX'

# Activar configuración de Nginx
sudo ln -s /etc/nginx/sites-available/aws_rds /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
