# Exportar y respaldar tu distribución (backup / snapshot)

```sh
# Listar distros instaladas
wsl --list --verbose

# Exportar la distro a un archivo .tar (snapshot o backup):
mkdir C:/WSL/snapshots
wsl --export Ubuntu C:/WSL/snapshots/ubuntun8n.tar

wsl --export Ubuntu C:/WSL/snapshots/ubuntun8ncloudflare.tar
```

# Importar un snapshot (restaurar desde backup):

```sh
# Crear una nueva carpeta para la nueva distro:
mkdir D:/WSLClones/UbuntuClone

# Importar la distro clonada
wsl --unregister Ubuntu
wsl --import Ubuntu C:/WSL/UbuntuRestored C:/WSL/snapshots/ubuntun8n.tar --version 2

wsl --unregister Ubuntu
wsl --import Ubuntu C:/WSL/UbuntuRestored C:/WSL/snapshots/ubuntun8ncloudflare.tar --version 2

# Verifica que se importó correctamente
wsl --list --verbose

# Iniciar la nueva distro clonada
wsl -d UbuntuClone
```

# (Opcional) Cambiar la distro predeterminada

```sh
wsl --set-default UbuntuClone
```
