# Exportar y respaldar tu distribución (backup / snapshot)

```sh
# Listar distros instaladas
wsl --list --verbose

# Exportar snapshot
mkdir D:/wsl2
wsl --export Ubuntu D:/wsl2/ubuntu_snapshot.tar

# Importar el snapshot
wsl --unregister Ubuntu
wsl --import Ubuntu D:/wsl2/Ubuntu D:/wsl2/ubuntu_snapshot.tar --version 2
wsl -d Ubuntu
```

# Registrar como una nueva distro (sin sobrescribir)

```sh
# Importar la distro clonada
wsl --unregister Ubuntu
wsl --import UbuntuRestored D:/wsl2/UbuntuRestored D:/wsl2/ubuntu_snapshot.tar --version 2

# Verifica que se importó correctamente
wsl --list --verbose

# Iniciar la nueva distro clonada
wsl -d UbuntuRestored

# (Opcional) Cambiar la distro predeterminada
wsl --set-default UbuntuRestored
```
