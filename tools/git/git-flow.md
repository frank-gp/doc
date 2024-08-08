```bash
## 1. Clonar un Repositorio
  git clone https://github.com/usuario/repositorio.git
  git clone --branch dev --single-branch https://github.com/JosemAVSG/Henry_PF.git

## 2. Ramas
  # Crea una nueva rama.
  git branch rama-frank
  # Cambia a la rama especificada.
  git checkout rama-frank
  # Crear y cambiarse a la nueva rama
  git checkout -b rama-frank
  # ver ramas
  git branch
  # ver Todas las ramas (all)
  git branch -a
  # renombrar rama (modify)
  git branch -m nuevo-nombre
  # eliminar rama (delete)
  git branch -d rama-frank

## 3. Agregar Cambios
  git add .
  git commint -m "comentario1"
  # como la rama de seguimiento (upstream) para la rama actual
  git push -u origin rama-frank

## 4. Actualizar el Repositorio Local
  git pull
  git pull origin nameBranch

## 7. Revisar el Historial de Cambios
   git log
   git log --oneline


## Fusionar Cambios
  # Fusiona la rama especificada con la rama actual.
  git checkout main
  git merge feature-nueva


## Resolver Conflictos
  git status
  # Abre una herramienta de fusión para resolver conflictos.
  git mergetool


## Revisar el Estado del Repositorio
  git status


## Colaboración con Pull Requests (GitHub)
  # https://github.com/frank-gp/doc/pulls


## Sincronizar con Cambios en el Repositorio Remoto
  # Descarga cambios del repositorio remoto sin fusionarlos automáticamente.
  git fetch origin

  # Reaplica tus commits en la cima de la rama especificada, útil para mantener un historial de commits limpio.
  git rebase main

  # ocurre cuando Git detecta que las dos ramas que intentas fusionar no comparten un historial común.
  git pull origin dev --allow-unrelated-histories
