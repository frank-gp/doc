```sh
sudo apt install curl gnupg lsb-release -y

curl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/cloudflare-main.gpg

sudo apt update
sudo apt install cloudflared -y

cloudflared --version

cloudflared tunnel --url http://localhost:3000
```

# que este túnel sea persistente y propio

```sh
cloudflared tunnel login

cloudflared tunnel create mi-tunel

mkdir -p ~/.cloudflared
vim ~/.cloudflared/config.yml

```

# config.yml

```yaml
tunnel: 3a6708ae-fb47-4afc-96b2-9ecced670555
credentials-file: /home/frank/.cloudflared/3a6708ae-fb47-4afc-96b2-9ecced670555.json

ingress:
  - hostname: test.giomr.site
    service: http://localhost:3000
  - service: http_status:404
```

```sh
# Vincular el túnel al subdominio
cloudflared tunnel route dns mi-tunel test.giomr.site

# Iniciar el túnel
cloudflared tunnel run mi-tunel

# ✅ (Opcional) Ejecutar como servicio en segundo plano
sudo cloudflared service install

# Pero en WSL2 es común iniciar manualmente con
cloudflared tunnel run mi-tunel &

```
