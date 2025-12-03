# Instalación

```sh
wsl --list
wsl --list --online

wsl --install -d Ubuntu-22.04
wsl --set-default Ubuntu-22.04
wsl -d Ubuntu-22.04

wsl --install -d AlmaLinux-9
wsl --set-default AlmaLinux-9

wsl --install -d OracleLinux_9_1
wsl --set-default OracleLinux_9_1

wsl --shutdown

wsl --unregister Ubuntu-22.04


```

# Snapshots

```sh
wsl --export Ubuntu-22.04 ubuntu-backup.tar
wsl --import Ubuntu-Restaurado C:\WSL\UbuntuRestaurado ubuntu-backup.tar
wsl -d Ubuntu-Restaurado

```

# Varios

```sh
# Verifica que la instancia esté corriendo:
wsl -l -v
wsl --shutdown
```
