# Configuración de sudo sin contraseña

```sh
sudo visudo

# debajo de "root    ALL=(ALL)       ALL"
frank   ALL=(ALL)       NOPASSWD:ALL

```

# Habilitar systemd en WSL2

```sh
sudo vim /etc/wsl.conf
```

```sh
wsl --shutdown
```

# Resetear el password

```sh
wsl -u root
passwd frank
```
