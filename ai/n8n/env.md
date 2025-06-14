# accesible públicamente usando Cloudflare Tunnel

```sh
# Crear un archivo de configuración .env
vim ~/.env-n8n
```

# archivo .env

```sh
WEBHOOK_URL=https://n8n.giomr.site
PORT=5678
HOST=0.0.0.0
N8N_DIAGNOSTICS_ENABLED=false
```

# Ejecutar n8n con la configuración

```sh
export $(cat ~/.env-n8n | xargs)

# Verifica que se aplicaron
echo $WEBHOOK_URL

n8n

# En otra terminal: Levantar el túnel con Cloudflare
cloudflared tunnel run n8n-tunnel
```

# Automatizar con un script

```sh
vim start-n8n.sh

# Contenido
#!/bin/bash
export $(cat ~/.env-n8n | xargs)
gnome-terminal -- bash -c "cloudflared tunnel run n8n-tunnel; exec bash"
n8n

# Hazlo ejecutable
chmod +x start-n8n.sh

# Y ejecútalo con:
./start-n8n.sh
```

# que n8n corra como servicio o que se inicie automáticamente con WSL

```sh
# Edita tu archivo de inicio de sesión
vim ~/.bashrc

# Agrega estas lineas al final
# Iniciar Cloudflare Tunnel y n8n automáticamente
if pgrep -f "cloudflared tunnel run n8n-tunnel" > /dev/null; then
  echo "Cloudflare tunnel ya está corriendo"
else
  nohup cloudflared tunnel run n8n-tunnel > ~/.cloudflared/log.txt 2>&1 &
  echo "Iniciando Cloudflare tunnel..."
fi

if pgrep -f "n8n" > /dev/null; then
  echo "n8n ya está corriendo"
else
  export $(cat ~/.env-n8n | xargs)
  nohup n8n > ~/.n8n/log.txt 2>&1 &
  echo "Iniciando n8n..."
fi

# Aplica los cambios
source ~/.bashrc
```

#

```sh
# Crear un archivo .env manualmente
mkdir ~/n8n
cd ~/n8n

vim .env

N8N_BASIC_AUTH_ACTIVE=true
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=123456

export $(cat .env | xargs) && n8n
```

# Opción 2: Ejecutar n8n con variables en línea (sin archivo .env)

```sh
N8N_BASIC_AUTH_ACTIVE=true \
N8N_BASIC_AUTH_USER=admin \
N8N_BASIC_AUTH_PASSWORD=123456 \
n8n

```

# 🔁 Hacerlo permanente

```sh
# Si no quieres escribir eso cada vez, puedes agregar esta línea a tu ~/.bashrc o ~/.zshrc:
vim ~/.bashrc
export WEBHOOK_URL=https://n8n.giomr.site

# Luego abre una nueva terminal o ejecuta:
source ~/.bashrc
```
