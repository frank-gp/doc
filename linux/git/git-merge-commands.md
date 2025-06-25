```sh
git reset --hard HEAD@{1}
git merge --abort


git fetch origin
git checkout -b feature/general origin/feature/general


git fetch origin
git checkout -b franco origin/feature/general

git diff dev..feature/general
git diff dev..franco

git branch -D feature/general
git branch -D dev

git checkout dev
git checkout -b dev

git merge feature/general
git merge franco --no-commit --no-ff
git merge --no-commit --no-ff origin/feature/general

code .git/config