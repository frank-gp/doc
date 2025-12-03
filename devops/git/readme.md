```bash
## Mas usados 
    git init
    git add .
    git add file.txt file2.txt
    git commit -m "mensaje"
    git push

    git push --force
    git pull --rebase

    # editando el mensaje del último commit
    git commit --amend -m "nuevo mensaje para el último commit"

    # sin editar el mensaje del último commit
    git commit --amend --no-edit

## Status
    git status
    git log --oneline



## Restore 
    git restore .
    git restore file.txt

    # Delete untracked files
    git clean -f
    # Eliminará archivos y directorios no rastreados.
    git clean -fd

    # para resetear todos los cambios y dejar el repositorio en el estado del último commit:
    git reset --hard HEAD

    git checkout main
    git checkout X5F3
    git checkout head~1

## Mixed
    git restore . && git clean -fd
    git add . && git commit -m "03 commit"
    git status && git log --oneline && git remote -v
    git add . && git commit --amend --no-edit
    git add . && git commit --amend --no-edit && git push --force
    git add . && git commit --amend --no-edit && git push origin main --force