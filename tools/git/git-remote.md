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

# To install dependencies in production mode
npm install --only=production

# if you want to install fresh with only production dependencies
npm ci --only=production
