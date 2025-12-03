```sh
# Verifica que WSL está instalado
wsl
wsl --list
wsl --list --online

# Instalación
wsl --install
wsl --install -d Ubuntu-22.04
sudo apt update && sudo apt upgrade -y

# Detener completamente una distro de WSL2
wsl --shutdown

# Desinstalar la WSL
wsl --list --verbose
wsl --unregister Ubuntu
```
