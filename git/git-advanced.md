```sh
# Para que Git deje de rastrear el archivo (o todo el folder backups),
git rm --cached -r backups/
git status


# 🔄 Resetear el cache de Git por completo (sin borrar tus archivos locales)
git rm -r --cached .
git add .
git commit -m "Reset git cache to respect .gitignore"

```

### Mostrar diferencias entre ramas

```sh
# Mostrar diferencias entre ramas
git diff branch1 branch2
```
