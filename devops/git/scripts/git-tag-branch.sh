# Asegúrate de estar en la rama principal
git checkout main

# Asegúrate de tener los últimos cambios
git pull origin main

# Realiza tus cambios y confírmalos
git add .
git commit -m "Mensaje de commit"

# Etiqueta la versión
git tag v1.0
git tag -a v1.0.0 -m "Versión 1.0.0"

# Sube los cambios y la etiqueta a GitHub
git push origin v1.0.0
git push origin main --tags
git push --tags

# lista de etiquetas (tags) 
git tag
git show v1.0.0

# Elimina la etiqueta anterior (opcional):
git tag -d v1.0.0

# clonar solo esa version
git clone --branch v1.0.0 --depth 1 https://github.com/fgp555/tutorial.git
# to clone the full history of the repository, you can omit the --depth 1 
git clone --branch v1.0.0 https://github.com/fgp555/tutorial.git


# Fetch the latest information from the remote repository
git fetch

# List all branches, including remote branches
git branch
git branch -a

# Create and switch to a new branch
git checkout -b nombre_de_rama
# Create and switch to a new branch using 'git switch'
git switch -c nombre_de_rama

# push branch
git push origin basic

# Push All Branches:
git push --all

# Push All Tags:
git push --tags

# Push Everything (Branches and Tags):
git push --all --tags

# select main branch
git checkout main
# merger branch_basic to main
git merge branch_basic

