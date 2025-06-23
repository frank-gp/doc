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

export WEBHOOK_URL=https://lawrence-actors-rwanda-seeds.trycloudflare.com

echo $WEBHOOK_URL
```
