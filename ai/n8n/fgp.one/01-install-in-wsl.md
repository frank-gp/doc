# WSL

```sh
wsl
wsl --unregister Ubuntu
wsl --shutdown

wsl --install
sudo apt update && sudo apt upgrade -y

curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g npm@11.4.2
node -v
npm -v
```

# Test Server.js

```sh
cd ~
vim ~/server.js
node server.js
```

```js
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`${new Date()} - ${req.method} ${req.url}`);
  res.end("hello world" + new Date());
});

server.listen(5678, () => {
  console.log("Server running at http://localhost:5678");
});
```

# Cloudflared

```sh

cd ~
# Descarga el binario
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -O cloudflared

# Dale permisos de ejecución
chmod +x cloudflared

# Mueve el binario a una carpeta global
sudo mv cloudflared /usr/local/bin/

# Verifica instalación
cloudflared --version

cloudflared tunnel --url http://localhost:5678
```

# N8N

```sh
sudo npm install -g n8n
n8n --version
n8n

WEBHOOK_URL=https://lawrence-actors-rwanda-seeds.trycloudflare.com
export WEBHOOK_URL=https://lawrence-actors-rwanda-seeds.trycloudflare.com

echo $WEBHOOK_URL
```

# Cloudflared Custom Domain

```sh
cloudflared tunnel login

cloudflared tunnel create myTunnel

mkdir -p ~/.cloudflared
vim ~/.cloudflared/config.yml
```

# config.yml

```yaml
tunnel: 683f8b1a-9d49-4494-9b74-6870fae827b6
credentials-file: /home/frank/.cloudflared/683f8b1a-9d49-4494-9b74-6870fae827b6.json

ingress:
  - hostname: n8n.giomr.site
    service: http://localhost:5678
  - service: http_status:404
```

```sh
# Vincular el túnel al subdominio
cloudflared tunnel route dns myTunnel n8n.giomr.site

# Iniciar el túnel
cloudflared tunnel run myTunnel
```

# Crear script de inicio para n8n y el túnel

### start-n8n.sh

```sh
cd ~

# Crea el archivo
vim start-n8n.sh
```

```sh
#!/bin/bash
# Ejecutar Cloudflare Tunnel en segundo plano
nohup cloudflared tunnel run myTunnel &

# Espera unos segundos para que el túnel se inicie
sleep 5

# Ejecutar n8n con las variables adecuadas
export WEBHOOK_URL=https://n8n.giomr.site/
n8n
```

### Ejecutar el script automáticamente al abrir WSL

```sh
# Hazlo ejecutable:
chmod +x start-n8n.sh

# Ejecutarlo manualmente (para probar):
./start-n8n.sh

# Si todo funciona, puedes agregar esta línea al final de
vim ~/.bashrc

# Agrega al final:
# Iniciar n8n automáticamente si no está corriendo
if ! pgrep -f "n8n"; then
  ~/start-n8n.sh
fi

# Y luego aplica los cambios
source ~/.bashrc
```
