# 5. 🚀 PM2 (Process Manager 2)

```sh
npm install -g pm2
sudo npm install -g pm2
pm2 -v

# Ejemplo con Node.js
pm2 start app.js --name user555
# Ejemplo con Next.js
pm2 start npm --name "nextjs-app" -- start

pm2 save
pm2 startup

# copia y pega el comando que se te muestra

pm2 reload user555

pm2 list
sudo reboot

# detené la app por su id o name
pm2 stop 0
pm2 stop my-app
pm2 stop all
pm2 unstartup

pm2 stop all
pm2 delete all
pm2 kill
rm -rf ~/.pm2

sudo npm uninstall -g pm2


```

```sh
pm2 show main

pm2 stop main
pm2 start backend/server.js --name main
pm2 save


pm2 restart main --update-env --script backend/server.js

# 1️⃣ Detén el proceso viejo
pm2 delete 0

# 2️⃣ Asegúrate de que solo quede el proceso correcto
pm2 list

# 3️⃣ Guarda el estado actual para que se reinicie automáticamente con server.js
pm2 save


```
