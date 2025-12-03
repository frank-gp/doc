
# Alternativa: Configurar CI/CD con GitHub Actions

```sh
sudo vim /etc/systemd/system/miapp.service

```

```ini
[Unit]
Description=Aplicación Node.js - miapp
After=network.target

[Service]
ExecStart=/usr/bin/node /home/ec2-user/nodejs/src/main.js
Restart=always
User=ec2-user
Environment=NODE_ENV=production
WorkingDirectory=/home/ec2-user/nodejs

[Install]
WantedBy=multi-user.target
```

```sh
sudo systemctl daemon-reload
sudo systemctl enable miapp.service
sudo systemctl start miapp.service
```

```sh
sudo systemctl status miapp.service

```
