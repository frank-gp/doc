# To-Do list demo app

```sh
git clone https://github.com/fgp555/nodejs-todolist.git .
rm -rf .git && git init && git add . && git commit -m 'initial commit'
npm install
node index.js
```

## Azure CLI

https://learn.microsoft.com/es-es/cli/azure/install-azure-cli

## Commands

```sh

az --version

az login --use-device-code

RESOURCE_GROUP="rg-tutorial-nodejs-2412003"
LOCATION="canadacentral"
APP_NAME="app-nodejs-2412003"
PLAN_NAME="plan-nodejs-2412003"

az group create --name $RESOURCE_GROUP --location $LOCATION
az appservice plan create --name $PLAN_NAME --resource-group $RESOURCE_GROUP --sku B1 --is-linux
az webapp create --resource-group $RESOURCE_GROUP --plan $PLAN_NAME --name $APP_NAME --runtime "NODE|20-lts" --startup-file "npm start"

# Go to Azure Portal
git remote add originAzure https://app-nodejs-2412003.scm.azurewebsites.net:443/app-nodejs-2412003.git
git remote -v
git push originAzure main:master
git push originAzure main:master --force

# Go to Web App Site
az webapp browse --resource-group $RESOURCE_GROUP --name $APP_NAME
```

# Azure Deploy Course

https://fgp.one/azure-deploy-course

# Azure Playlist

https://fgp.one/azure-playlist
