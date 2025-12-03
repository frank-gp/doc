```sh
sudo vim /etc/systemd/system/giosite.service
```

```ini
[Unit]
Description=Servidor Node.js - giosite
After=network.target

[Service]
ExecStart=/usr/bin/node /home/ubuntu/nodejs/app.js
Restart=always
User=ubuntu
Environment=PORT=3000
Environment=NODE_ENV=production
WorkingDirectory=/home/ubuntu/nodejs/

[Install]
WantedBy=multi-user.target
```

```sh
# Ver donde se encuentra Node.js
which node
# /usr/bin/node
```

# 🔄 Recuerda ejecutar esto después de guardar el archivo:

```sh
sudo systemctl daemon-reload
sudo systemctl enable giosite
sudo systemctl start giosite
sudo systemctl status giosite
```

### 🧪 Verifica logs si falla:

```sh
journalctl -u giosite -e
```
