# Cloudflared Custom Domain

### Requisitos previos

- Tener una cuenta en Cloudflare con el dominio configurado
- Tener instalado Cloudflared en tu sistema WSL

```sh
cloudflared --version
cloudflared tunnel login

# https://dash.cloudflare.com

cloudflared tunnel create myTunnel

mkdir -p ~/.cloudflared
vim ~/.cloudflared/config.yml

# Vim Commands
# Shift + Insert => Pegar (en WSL)
# i => Insertar
# Esc > :wq => Guardar y salir
```

# config.yml

```yaml
tunnel: c8ef0ac9-45a6-4d2f-9772-a4470628ee68
credentials-file: ~/.cloudflared/c8ef0ac9-45a6-4d2f-9772-a4470628ee68.json

ingress:
  - hostname: n8n2.giomr.site
    service: http://localhost:5678
  - service: http_status:404
```

```sh
# Vincular el túnel al subdominio
cloudflared tunnel route dns myTunnel n8n2.giomr.site

# Iniciar el túnel
cloudflared tunnel run myTunnel

# Crear script de inicio para n8n y el túnel
vim ~/start-n8n.sh
```

### start-n8n.sh

```sh
#!/bin/bash

# Ejecutar Cloudflare Tunnel en segundo plano si no está corriendo
if ! pgrep -f "cloudflared.*myTunnel" > /dev/null; then
  nohup cloudflared tunnel run myTunnel > ~/cloudflared.log 2>&1 &
fi

# Esperar hasta que el túnel esté disponible (opcional)
sleep 5

# Establecer variable de entorno
export WEBHOOK_URL=https://n8n2.giomr.site/

# Ejecutar n8n
n8n
```

### Ejecutar el script automáticamente al abrir WSL

```sh
# Hazlo ejecutable:
chmod +x ~/start-n8n.sh

# Ejecutarlo manualmente (para probar):
~/start-n8n.sh
```

# Ejecutar automáticamente al iniciar WSL

```sh
# Si todo funciona, puedes agregar esta línea al final de
vim ~/.bashrc

# Agrega al final:
# Iniciar n8n automáticamente si no está corriendo
# Iniciar n8n automáticamente si no está corriendo y el script existe
if [ -x "$HOME/start-n8n.sh" ] && ! pgrep -f "n8n"; then
  "$HOME/start-n8n.sh"
fi

# Y luego aplica los cambios
source ~/.bashrc
```

# Detener n8n y el túnel

```sh
# Crea el archivo
vim ~/stop-n8n.sh
```

### stop-n8n.sh

```sh
#!/bin/bash
pkill -f "cloudflared.*myTunnel"
pkill -f n8n
```

# Iniciar WSL al arrancar Windows

### Crear un acceso directo

```sh
# Pulsa Win + R, escribe: Esto abrirá la carpeta Inicio (Startup) de Windows
shell:startup

# Crea un acceso directo nuevo con clic derecho > Nuevo > Acceso directo, y usa como destino
wsl
```
