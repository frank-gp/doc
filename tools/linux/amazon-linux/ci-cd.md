# Configurar CI/CD con GitHub Actions

```sh
sudo yum install htop -y && htop

curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs
node -v
npm -v

sudo yum install git -y
git --version

git clone https://github.com/fgp555/tutorial.git nodejs
cd nodejs
npm install
npm start

sudo npm install -g pm2
pm2 -v
pm2 start dist/main.js --name miapp
pm2 startup
pm2 save
pm2 list
pm2 restart miapp
pm2 reload miapp


curl localhost:3000
pm2 logs miapp
```

# Instalar Nginx

```sh
sudo yum install nginx -y
nginx -v

sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl status nginx

curl localhost
curl 3.139.74.168

# Crear configuración de Nginx
sudo vim /etc/nginx/conf.d/miapp.conf

```

```nginx
server {
    listen 80;
    server_name 3.139.74.168;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```sh
sudo nginx -t
sudo systemctl reload nginx
```

# Configurar CI/CD con GitHub Actions

```sh
# 🖥️ En Windows (tu PC)
ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/github-actions

# Ve al repositorio en GitHub.
# Settings > Secrets and variables > Actions > New repository secret
# Agrega estas tres:
EC2_HOST 3.139.74.168
EC2_SSH_KEY contenido de github-actions (privada)
EC2_USER ec2-user


# Copia ~/.ssh/github-actions.pub (de tu PC)
vim  ~/.ssh/authorized_keys
# chmod: cambia los permisos de un archivo
chmod 600 ~/.ssh/authorized_keys


# 🖥️ En Windows Para acceder a EC2 (opcional)
ssh -i ~/.ssh/github-actions ec2-user@3.139.74.168

```

# Archivo .github/workflows/deploy.yml

```yml
name: Deploy Node.js App to EC2

on:
  # workflow_dispatch: # 👈 Activación manual
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Copy files to EC2
        uses: appleboy/scp-action@v0.1.3
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ${{ secrets.EC2_USER }}
          key: ${{ secrets.EC2_SSH_KEY }}
          source: "."
          target: "/home/ec2-user/nodejs"
          rm: true # Opcional: borra los archivos remotos antes

      - name: SSH and deploy app
        uses: appleboy/ssh-action@v1.0.0
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ${{ secrets.EC2_USER }}
          key: ${{ secrets.EC2_SSH_KEY }}
          script: |
            cd /home/ec2-user/nodejs
            npm install
            pm2 restart miapp || pm2 start dist/main.js --name miapp
            pm2 save
```
