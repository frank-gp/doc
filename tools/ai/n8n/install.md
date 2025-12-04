```sh
wsl --install
sudo apt update && sudo apt upgrade -y

curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g npm@11.4.2
node -v
npm -v

sudo npm install -g n8n
n8n --version
n8n

curl http://localhost:5678

# 🛠️ (Opcional) Mantener n8n en segundo plano
npm install -g pm2
pm2 start n8n
pm2 startup
pm2 save

```

# Uninstall

```sh
# Eliminar instalación global de n8n
sudo npm uninstall -g n8n

# Borrar configuración persistente
cd ~
rm -rf ~/.n8n
```

# Establecer la URL pública con WEBHOOK_URL

```sh
WEBHOOK_URL=https://n8n.frankgp.com
echo $WEBHOOK_URL

n8n

```
