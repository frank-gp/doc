```bash
touch Create.jsx List.jsx Template.jsx

mkdir newFolder


#   in LOCALHOST global mode with Git Bash
# Checking for existing SSH keys
ls -al ~/.ssh

#or go to folder .ssh
cd C:\Users\Thinkpad\.ssh
ls

# Generating a new SSH key
ssh-keygen -t ed25519 -C "user@gmail.com"

# open "id_ed25519.pub" in .ssh folder, and copy key code
cat id_ed25519.pub
# example key code: ssh-ed25519 ... @gmail.com

# go to https://github.com/settings/ssh/new
# paste and save key code

# start the ssh-agent in the background
eval "$(ssh-agent -s)"
# > Agent pid 123

# Adding your SSH key to the ssh-agent (github)
ssh-add ~/.ssh/id_ed25519


# CLONE REPO
git clone git@github.com:frank-gp/temp.git

# Update repository
git pull
git fetch


# Basic commands

# List files and directories in the current directory.
ls

# List all.
ls -la

# Change directory
cd directory_name
cd ..

# Print the current working directory
pwd

# Create a new directory
mkdir directory_name

# Remove/delete a file.
rm file_name

# Remove/delete an empty directory.
rmdir directory_name

# Copy a file or directory.
cp source_file destination_file

# Move or rename a file or directory.
mv source_file destination_file

# View the contents of a file.
cat file_name

# Open a text editor to create or edit a file.
nano file_name

# Download a file from a URL.
wget file_url

# Change the permissions of a file or directory.
chmod permissions file_name

# Change the ownership of a file or directory.
chown user_name file_name

# Disconnect from the SSH session and exit.
exit

```