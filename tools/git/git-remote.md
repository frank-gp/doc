```bash

git clone https://github.com/user/repo.git
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
git remote add other_origin https://github.com/user/repo.git
git push other_origin main
