# Clonar un repositorio privado de GitHub en Ubuntu o CPanel

```sh
# Generar una clave SSH (si no tienes una)
ssh-keygen -t ed25519 -C "fgp555@gmail.com"

# Mostrar la clave pública (copiar el contenido completo)
cat ~/.ssh/id_ed25519.pub

# Agrégala a GitHub aquí:
https://github.com/settings/ssh/new

# Asegurarse de que los permisos de la clave privada son correctos
chmod 600 ~/.ssh/id_ed25519

# Authenticated: Verificar que la conexión SSH funciona correctamente
ssh -T git@github.com

# Clonar el repositorio privado usando SSH
git clone git@github.com:user555/temp-private.git

# Cambiar la URL del remote "origin" a SSH
git remote set-url origin git@github.com:user555/temp-private.git

# Confirmar que se actualizó correctamente
git remote -v
```
