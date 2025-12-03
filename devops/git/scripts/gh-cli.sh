gh --version
gh --help

gh auth login
gh auth status
gh auth logout

gh config --help
gh config list

# https://gist.github.com/fgp555
gh gist list
gh gist create gh-cli.sh
gh gist create gh-cli.sh -d "description"
gh gist create gh-cli.sh -d "description" --public
gh gist create index.html style.css -d "web desing"
gh gist create gh-cli.sh -w
gh gist create gh-cli.sh --web
gh gist delete 1c4cf9d0875ff3219b5904bc737ac738

# repo
gh repo list
gh repo create repo_name --public
gh repo create repo_name --public --source=.
gh repo view fgp555/repo_name
gh repo view fgp555/repo_name --web

gh repo delete fgp555/repo_name
# gh auth refresh -h github.com -s delete_repo


# pull resques
gh pr list