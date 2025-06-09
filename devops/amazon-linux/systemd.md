# Systemd: ejecutará automáticamente al iniciar el sistema

```sh
# ✅ Paso 1: Crea el archivo de servicio
sudo vim /etc/systemd/system/miapp.service

which node

```

```ini
[Unit]
Description=Aplicación Node.js - miapp
After=network.target

[Service]
ExecStart=/usr/bin/node /home/ec2-user/nodejs/app.js
Restart=always
User=ec2-user
Environment=NODE_ENV=production
Environment=PORT=3000
WorkingDirectory=/home/ec2-user/nodejs

[Install]
WantedBy=multi-user.target
```

### Recargar y activar el servicio

```sh
sudo systemctl daemon-reload
sudo systemctl enable miapp
sudo systemctl start miapp



```

### Verificar que esté corriendo

```sh
sudo systemctl status miapp
```

### varios

```sh
sudo systemctl restart miapp
sudo systemctl stop miapp
sudo systemctl disable miapp
```

### Ver logs

```sh
journalctl -u miapp -f
```
