```bash


# Deploy a PRIVATE repository
# https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

# Checking for existing SSH keys
ls -al ~/.ssh

# Generating a new SSH key
ssh-keygen -t ecdsa -f ~/.ssh/key123 -b 521 -C "user@gmail.com"

# open "key123.pub" in .ssh folder, and copy key code
cat key123.pub
# example key code: ecdsa-sha2... ...@gmail.com

# go to https://github.com/user/repo/settings/keys/new
# paste and save key code

# start the ssh-agent in the background
eval "$(ssh-agent -s)"
# > Agent pid 59566

# Adding your SSH key to the ssh-agent (github)
ssh-add ~/.ssh/key123

# CLONE REPO
git clone git@github.com:frank-gp/temp.git

# Update repository
git pull
git fetch


# ==========  ==========
# Most used commands

# To remove files
rm *

# To remove a non-empty folder
rm -rf *

# To remove.git folder
rm -rf .git

# To remove all hidden files and folders
rm -rf .*

```

