```sh
# ✅ Opción 1: Instalar desde Amazon Linux Extras
sudo amazon-linux-extras enable nodejs20
sudo yum clean metadata
sudo yum install -y nodejs

amazon-linux-extras list | grep nodejs

node -v
npm -v


# ✅ Opción 2: Instalar desde el sitio oficial de Node.js

curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs

node -v
npm -v


# ✅ Opción 3: Instalar desde NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
source ~/.nvm/nvm.sh

nvm install 20
nvm use 20

nvm install --lts
nvm use --lts

node -v
npm -v
```
