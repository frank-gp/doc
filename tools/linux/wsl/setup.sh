#!/bin/bash

# Detectar el usuario actual
USERNAME=$(whoami)

echo "🔐 Configurando sudo sin contraseña para el usuario $USERNAME..."
echo "$USERNAME ALL=(ALL) NOPASSWD:ALL" | sudo tee /etc/sudoers.d/$USERNAME > /dev/null
sudo chmod 0440 /etc/sudoers.d/$USERNAME

echo "🔄 Actualizando sistema..."
sudo dnf update -y

echo "🌐 Instalando Nginx..."
sudo dnf install -y nginx
sudo nginx

echo "🟢 Instalando Node.js (LTS)..."
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo dnf install -y nodejs

echo "🐳 Instalando Docker client..."
sudo dnf install -y docker
sudo groupadd docker 2>/dev/null || true
sudo usermod -aG docker $USERNAME

echo "📁 Configurando página de inicio de Nginx..."
echo "<h1>Hola desde WSL + AlmaLinux automatizado</h1>" | sudo tee /usr/share/nginx/html/index.html

echo "✅ Todo listo. Cierra WSL y vuelve a entrar para aplicar permisos de Docker."
