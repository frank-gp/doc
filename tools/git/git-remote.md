```bash

git clone https://github.com/user/repo.git
git clone https://github.com/user/repo.git .

# ========== two origin ==========
git remote -v

git remote add origin_tutorial https://github.com/user/repo.git

git push origin_tutorial main --force

git remote remove origin_tutorial

## agregar una rama diferente
    git remote add other_branch https://github.com/user/repo.git