```bash

## Config
git config --global user.name "User"
git config --global user.email "user123@gmail.com"


git config --list
git config --list --global
# only local repository
git config --list --local
```

```bash
# puedes agregar el directorio como un "directorio seguro" para Git
git config --global --add safe.directory D:/01-web/nestjs/nestjs-initial


# ========== CONFIGURAR DIRECTORIOS SEGUROS  ==========

# Primero, verifica todas las configuraciones actuales de safe.directory ejecutando:
git config --global --get-all safe.directory

# Luego, elimina cada entrada individualmente con:
git config --global --unset-all safe.directory

# puedes agregar la configuración global para que todos los directorios sean seguros:
git config --global safe.directory '*'



# Verificar si la carpeta está realmente rastreada por Git
git ls-files | grep backups
# Deja de rastrear la carpeta /backups:
git rm -r --cached backups
# Forzar el reindexado (si la carpeta está en .gitignore)
git rm -r --cached .

```
