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
