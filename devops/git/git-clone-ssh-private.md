# Clonar un repositorio privado de GitHub en Ubuntu o CPanel

```sh
# Generate an SSH key (if you don’t already have one)
ssh-keygen -t ed25519 -C "GitHub fgp555@gmail.com"
ssh-keygen -t ed25519 -C "Personal Laptop"

# Show the public key (copy the entire content)
cat ~/.ssh/id_ed25519.pub

# Add the public key to GitHub here:
# https://github.com/settings/ssh/new

# Make sure the private key has the correct permissions
chmod 600 ~/.ssh/id_ed25519

# Test authentication to confirm the SSH connection works
ssh -T git@github.com

# Clone the private repository using SSH
git clone git@github.com:fgp555/tutorial.git

# (Optional) Change the "origin" remote URL to SSH
git remote set-url origin git@github.com:fgp555/tutorial.git

# Verify the remote URL
git remote -v

```
