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
