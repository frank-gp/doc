```bash

git clone https://github.com/user/repo.git

# Clone the repository from GitHub into the current directory
git clone https://github.com/user/repo.git .

# ========== remote ==========

git remote -v
git remote remove origin
git remote add origin https://github.com/user/repo.git

git branch -M main
git push -u origin main
git push origin main --force

## Change the remote URL
git remote set-url origin https://github.com/user/repo.git

## add other origin
git remote add origin2 https://github.com/user/repo.git
git push origin2 main

# pushear todas las ramas locales
git push --all origin

# sacar todos los archivos del staging area (es decir, deshacerlos de la etapa preparada para el commit),
git restore --staged .
git restore . && git clean -fd

# 3️⃣ Fuerza que main sea igual a frank18
git push origin2 frank18:main --force
```
