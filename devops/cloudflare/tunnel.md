# ✅ Opción recomendada: Instalar manualmente el binario oficial

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

# que este túnel sea persistente y propio

```sh
cloudflared tunnel login

cloudflared tunnel create myTunnel

mkdir -p ~/.cloudflared
vim ~/.cloudflared/config.yml
```

# config.yml

```yaml
tunnel: 683f8b1a-9d49-4494-9b74-6870fae827b6
credentials-file: /home/frank/.cloudflared/683f8b1a-9d49-4494-9b74-6870fae827b6.json

ingress:
  - hostname: n8n.giomr.site
    service: http://localhost:5678
  - service: http_status:404
```

```sh
# Vincular el túnel al subdominio
cloudflared tunnel route dns myTunnel n8n.giomr.site

# Iniciar el túnel
cloudflared tunnel run myTunnel
```

# ✅ (Opcional) Ejecutar como servicio en segundo plano

```sh
# Copiar el archivo a una ruta accesible para sudo
sudo mkdir -p /etc/cloudflared
sudo cp ~/.cloudflared/config.yml /etc/cloudflared/

sudo cloudflared service install

# Verifica rutas aceptadas
cloudflared tunnel info

# Ver estado del servicio
sudo systemctl status cloudflared

# Habilitar el servicio al arranque (si aún no lo está):
sudo systemctl enable cloudflared

# (Opcional) Ver logs del servicio en tiempo real:
journalctl -u cloudflared -f

# Obtener info del túnel
cloudflared tunnel info myTunnel

# Verificar la URL en el archivo config.yml
cat ~/.cloudflared/config.yml

# Reinicia el servicio para aplicar cambios
sudo systemctl restart cloudflared
```

# Instalar con apt

```sh
sudo apt install curl gnupg lsb-release -y

curl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/cloudflare-main.gpg

sudo apt update
sudo apt install cloudflared -y

cloudflared --version

cloudflared tunnel --url http://localhost:3000
```
