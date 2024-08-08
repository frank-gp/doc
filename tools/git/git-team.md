```bash
## 1. Clonar un Repositorio
  git clone https://github.com/usuario/repositorio.git


## 2. Ramas
  # Crea una nueva rama.
  git branch new_feature
  # Cambia a la rama especificada.
  git checkout new_feature
  # Create and change to new branch
  git checkout -b newBranchChange
  git switch -c nameBranch
  #ver ramas
  git branch
  #all
  git branch -a
  #remote
  git branch -r


## 3. Actualizar el Repositorio Local
  git pull
  git pull origin main


## 4. Agregar Cambios
  git add .
  git add file.js


## 7. Revisar el Historial de Cambios
   git log
   git log --oneline


## 8. Fusionar Cambios
  # Fusiona la rama especificada con la rama actual.
  git checkout main
  git merge feature-nueva


## 9. Resolver Conflictos
  git status
  # Abre una herramienta de fusión para resolver conflictos.
  git mergetool


## 10. Revisar el Estado del Repositorio
  git status


## 11. Colaboración con Pull Requests (GitHub)
  # https://github.com/frank-gp/doc/pulls


## 12. Sincronizar con Cambios en el Repositorio Remoto
  # Descarga cambios del repositorio remoto sin fusionarlos automáticamente.
  git fetch origin

  # Reaplica tus commits en la cima de la rama especificada, útil para mantener un historial de commits limpio.
  git rebase main
