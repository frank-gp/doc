# Exportar y respaldar tu distribución (backup / snapshot)

```sh
# Listar distros instaladas
wsl --list --verbose

# Exportar la distro a un archivo .tar (snapshot o backup):
mkdir D:/solution/wsl-snapshots
wsl --export Ubuntu D:/solution/wsl-snapshots/ubuntun8n.tar

wsl --export Ubuntu D:/solution/wsl-snapshots/ubuntun8ncloudflare.tar
```

# Importar un snapshot (restaurar desde backup):

```sh
# Crear una nueva carpeta para la nueva distro:
mkdir D:/WSLClones/UbuntuClone

# Importar la distro clonada
wsl --unregister Ubuntu
wsl --import Ubuntu C:/WSL/UbuntuRestored D:/solution/wsl-snapshots/ubuntun8ncloudflare.tar --version 2

# Verifica que se importó correctamente
wsl --list --verbose

# Iniciar la nueva distro clonada
wsl -d UbuntuClone
```

# (Opcional) Cambiar la distro predeterminada

```sh
wsl --set-default UbuntuClone
```

# Temp Account

```sh
user123S@mail.com
```
