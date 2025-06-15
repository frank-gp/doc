```sh
# Instalación
wsl --install
wsl --install -d Ubuntu-22.04
sudo apt update && sudo apt upgrade -y

# Verifica que WSL está instalado
wsl
wsl --list
wsl --list --online

# Detener completamente una distro de WSL2
wsl --shutdown

# Habilitar el servicio Microsoft Store Install Service
Start-Process sc.exe -ArgumentList "config InstallService start= demand" -Wait
Start-Process sc.exe -ArgumentList "start InstallService" -Wait

# Desinstalar la WSL
wsl --list --verbose
wsl --unregister Ubuntu
```

# Amazon Linux 2023

```sh
# Descargar la imagen de Amazon Linux
Invoke-WebRequest -Uri "https://cdn.amazonlinux.com/al2023/os-images/2023.7.20250527.1/container/al2023-container-2023.7.20250527.1-x86_64.tar.xz" -OutFile "C:\WSL\amazonlinux2023\amazonlinux2023.tar.xz"
# Asegúrate de que la carpeta C:\WSL\amazonlinux2023 exista o créala antes de ejecutar el comando:
# Importar la imagen a WSL2
wsl --import AmazonLinux2023 C:\WSL\amazonlinux2023 C:\WSL\amazonlinux2023\amazonlinux2023.tar.xz --version 2
wsl -d AmazonLinux2023

```

```sh
dnf install -y vim

#  configuraciones
vim /etc/wsl.conf

[automount]
enabled=true
root=/mnt/
options=metadata
mountFsTab=false

[interop]
enabled=true
appendWindowsPath=false


# terminar
wsl --terminate AmazonLinux2023
# iniciar
wsl -d AmazonLinux2023

# montar disco C D
# Primero intenta instalar util-linux que contiene el comando mount:
dnf install util-linux

# montar la unidad C en Windows
mkdir -p /mnt/c
mount -t drvfs C: /mnt/c

# montar la unidad D en Windows
mkdir -p /mnt/d
mount -t drvfs D: /mnt/d
cd /mnt/d


dnf install -y vim git nginx

```

# desinstalar

```sh
wsl --unregister AmazonLinux2023
Remove-Item -Recurse -Force C:\WSL\amazonlinux2023
```
