```bash
## Commits

# Diferencia entre dos commits
git diff abc123 def456

#Ver qué archivos cambiaron (sin el contenido):
git diff 6b5ea8b 615526f --name-only
git diff head~1 --name-only

# cambios entre dos ramas
git diff rama1 rama2

## 1. Clonar un Repositorio
git clone https://github.com/usuario/repositorio.git

## 3. Agregar Cambios
git add .
git commint -m "comentario1"

# como la rama de seguimiento (upstream) para la rama actual
git push -u origin rama2


## 4. Actualizar el Repositorio Local
git pull
git pull origin rama2

## 7. Revisar el Historial de Cambios
git log
git log --oneline


## Fusionar Cambios
# Fusiona la rama especificada con la rama actual.
git checkout main
git merge rama2
git merge --abort

# sí existe en el remoto
git merge origin/rama2


## Colaboración con Pull Requests (GitHub)
# https://github.com/frank-gp/doc/pulls


## Sincronizar con Cambios en el Repositorio Remoto
# Descarga cambios del repositorio remoto sin fusionarlos automáticamente.
git fetch origin

# Reaplica tus commits en la cima de la rama especificada, útil para mantener un historial de commits limpio.
git rebase main

# ocurre cuando Git detecta que las dos ramas que intentas fusionar no comparten un historial común.
git pull origin dev --allow-unrelated-histories



```
