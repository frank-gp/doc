```sh
sudo apt update

curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

sudo apt install -y nodejs

sudo apt remove nodejs

node -v
npm -v

# NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc
nvm install 20
nvm install 22

nvm use 20


```
