# Install Node.js

```sh
sudo apt update

# Descarga de Node.js
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
# curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# Instala Node.js
sudo apt install -y nodejs
# sudo apt remove nodejs

node -v
npm -v
```

## Install packages

```sh
npm init -y
npm install express
```

## app.js

```js
const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const buildPath = path.join(__dirname, "./frontend/");
app.use(express.static(buildPath));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
```

## Server Port 80

```sh
sudo npm install -g pm2
pm2 start app.js

sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 3000

# pm2 stop app
# pm2 list
# pm2 stop all

# pm2 restart app
# sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 3000


sudo apt install iptables-persistent
sudo netfilter-persistent save
sudo netfilter-persistent reload

# Detén el servicio que mantiene las reglas persistentes:
sudo systemctl stop netfilter-persistent

# Deshabilita el servicio para que no se inicie automáticamente al reiniciar el sistema:
sudo systemctl disable netfilter-persistent
```

## NVM

```sh
# NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc
nvm install 20
nvm install 22

nvm use 20


```
