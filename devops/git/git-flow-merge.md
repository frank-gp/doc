```sh
git reset --hard HEAD@{1}
git merge --abort

git fetch origin
git checkout -b feature/general origin/feature/general
git checkout -b gio origin/gio2
git checkout -b ivana origin/ivana-formulario

git checkout -b ivana origin/main

git branch gio2 origin/gio2

git checkout main
git merge ivana
git merge gio2


git diff dev..feature/general
git diff dev..franco

git branch -D feature/general
git branch -D dev


git merge franco --no-commit --no-ff
git merge --no-commit --no-ff origin/feature/general

code .git/config
```
