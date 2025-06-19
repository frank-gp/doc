# Clonar un repositorio privado de GitHub en Ubuntu

```sh
# 1. Generar una clave SSH (si no tienes una)
ssh-keygen -t ed25519 -C "user555@gmail.com"

# 2. Mostrar la clave pública (copiar el contenido completo)
cat ~/.ssh/id_ed25519.pub

# Agrégala a GitHub aquí:
https://github.com/settings/ssh/new

# 3. Authenticated: Verificar que la conexión SSH funciona correctamente
ssh -T git@github.com
# > Si todo está bien, verás un mensaje como:
# > Hi user555! You've successfully authenticated...

# 4. Clonar el repositorio privado usando SSH
git clone git@github.com:user555/temp-private.git

# Ver el remote actual
git remote -v

# Cambiar la URL del remote "origin" a SSH
git remote set-url origin git@github.com:user555/temp-private.git

# Confirmar que se actualizó correctamente
git remote -v
```
