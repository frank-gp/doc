```bash
# ========== Comandos mas usados ==========
git init
git status
git add .
git commit -m "mensaje"
git add . && git commit -m "03 commit"
git push

git add . && git commit --amend --no-edit && git push --force
git pull --rebase

# restore files that have been modified
git restore .
# delete untracked files
git clean -f
# Este comando eliminará no solo los archivos no rastreados, sino también los directorios no rastreados.
git clean -fd

# para resetear todos los cambios y dejar el repositorio en el estado del último commit:
git reset --hard HEAD


git log --oneline
git log --oneline | cat
git revert head --no-edit
git revert head -n

# ========== two origin ==========
git remote -v

git remote add origin_tutorial https://github.com/fgp555/tutorial.git

git add . && git commit --amend --no-edit && git push origin_tutorial main --force

git add . && git commit -m 'first commit' && git push origin_tutorial main --force

git remote remove origin_tutorial

# ==========  ==========
# config
git config --global user.name "Frank GP"
git config --global user.email "fgp555@gmail.com"

# Delete Repo Git
# https://chat.openai.com/share/5d2fbf59-2626-4cda-a7b2-be656c139146
# To remove a folder named ".git" using Bash
rm -rf .git

# To remove all folders within a directory using Bash
rm -rf */

# To remove all hidden files
rm -rf .*


# clone a Git repository into the same directory
# where you currently are
git clone repoTemp .

# ==========  ==========

#Restaura archivos modificados al ultimo commit
git restore .
git checkout -- .

#Create and change to new branch
git switch -c nameBranch
git checkout -b newBranchChange

#Regresara la version del commit
git checkout X5F3
git checkout head~2

#Elimina archivos creados que no estan en el ultimo commit
git clean -f

#Crear ramas
git branch newBranch
# crea y cambia a la rama
git switch -c nameBranch

#renombrar ramas
git branch -m master main

#ver ramas
git branch
#all
git branch -a
#remote
git branch -r

# sin editar el mensaje del último commit
git commit --amend --no-edit

# editando el mensaje del último commit
git commit --amend -m "nuevo mensaje para el último commit"


# Git Basic
# CTRL+L clean
git init
git add file.txt file2.txt
git commit -am "comment"
git log --oneline


# Git Advanced
# restaura archivos modificados al ultimo commit
git reset --hard
git reset --hard xy12

#eliminar el último commit
git reset --hard HEAD~1

#history
git reflog
git log --stat
git log --all --graph

git log --all --graph --decorate --oneline
git log file.txt

#view commit users
git shortlog
git shortlog -sn
git shortlog -sn --all
git shortlog -sn --all --no-merges

#Cambios realizados
git show

git diff
git diff head~2 head~1
git diff head~2 head



# Git Reset Repository
mv .git/config ~/saved_git_config
rm -rf .git
git init
git branch -M main
git add .
git commit -m "01 Commit inicial"
mv ~/saved_git_config .git/config
# git push --force origin main
git log --oneline



# Git Remote – GitHub
# …or push an existing repository from the command line
git remote add origin https://github.com/fgp555/learn.git
git branch -M main
git push -u origin main

#push all branch
git push -all origin
git remote add origin https://github.com/fgp555/temp.git
git remote -v
git remote
git remote remove origin

#view remote status
git fetch
git pull
git push
git push origin main
git pull origin main
git branch --remote
git branch -r
git branch --all
git branch -a

#search word in files
git grep buscarPalabra
git grep -n buscarPalabra
git grep -c buscarPalabra
git grep -c "p"
git branch
git branch nameBranch123
git checkout nameBranch123
git merge nameBranch123 -m "commit123"
git switch -c "branch2"

#delete new files no commit
git clean --dry-run
git clean -f

#git restore file modify no commit
git restore .


# Git Shortcut
# Esc + L = Clear
# Esc + i = Insert
# Ctrl + Shift + Z + Z = Save and exit
# Q = exit from edit mode



# Git Setting
git config -l
git config --list --show-origin
git config --global user.name "Frank GP"

#add email or change email
git config --global user.email "email@gmail.com"
git config --global alias.nameAlias "log --oneline"

#Change git init default branch name
git config --global init.defaultBranch main

#Change Code Editor vim to vscode
git config --global core.editor "code --wait"



# Git Command
git -v
git rm file.txt
git rm --cached file.txt
git tag -a v1.0 -m "version 1.0" dbf4641
git tag
git show-ref --tags
git push --tags
git push origin --tags
git tag -d v2.0

#delete tag from GitHub
git push origin :refs/tags/v2.0

#view branch and history
git show-branch
git show-branch --all

#view change from users
git blame text.txt

#-c = formater
git blame -c text.txt
git blame text.txt -L1,2
git blame text.txt -L1,2 -c
gitk




# Command Global
history

#history clean
history -c

#repeat command #
!1
alias stat="git status"

#Change Disk Directory
pwd
cd
cd ..
cd /c
cd users
mkdir folder
touch file.txt
>> file.txt
ls
ls -l

#run script in console
./file.sh

#using cat cat > newFile.txt creates and can start appending to file. Ctrl + C = exit edit
cat viewContent.txt

#muestra archivos ocultos
ls -a
ls -al
rm text.txt
code .
code file.txt

```
