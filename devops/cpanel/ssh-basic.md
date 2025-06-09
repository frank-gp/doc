https://docs.github.com/es/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

```bash
# 1. Check if you already have an SSH key
ls -al ~/.ssh

# 2. Generate a new SSH key (if necessary)
ssh-keygen -t ed25519 -C "fgp555@gmail.com"

# 3. Add the SSH key to the SSH agent
# Start the SSH agent:
eval "$(ssh-agent -s)"
# Add your SSH key to the agent:
ssh-add ~/.ssh/id_ed25519

# 4. Copy your SSH public key
cat ~/.ssh/id_ed25519.pub

# 5. Add the SSH key to GitHub
# https://github.com/settings/keys

# 6. Test the connection to GitHub
ssh -T git@github.com

# If everything is set up correctly, you should see a message like:
# Hi username! You've successfully authenticated, but GitHub does not provide shell access.


git clone git@github.com:frank-gp/repo-private.git
git remote set-url origin git@github.com:frank-gp/repo-private.git


# ========== notes ==========

# C:\Users\Frank GP\.ssh

cd .ssh
explorer .

git config --list

# ==========  ==========