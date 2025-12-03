# To-Do list demo app

```sh
git clone https://github.com/fgp555/MERN-Stack-ToDoList.git .
npm run install:all
npm start
```

## Azure CLI

https://learn.microsoft.com/es-es/cli/azure/install-azure-cli

## Commands

```sh
az --version

az login --use-device-code
az account list --output table

subscriptionId=$(az account show --query id --output tsv)
echo $subscriptionId

query_string="{clientId: appId, tenantId: tenant, clientSecret: password, subscriptionId: '$subscriptionId'}"
echo $query_string

az ad sp create-for-rbac --name "my-app" --role contributor --scopes "./subscriptions/$subscriptionId" --query "$query_string"

az ad sp create-for-rbac --name "github-actions-sp2" --role contributor --scopes "./subscriptions/$subscriptionId" --sdk-auth

```

# Variables

```sh
# vars
AZ_APP=app-mern-241218
AZ_LOCATION=canadacentral
AZ_PLAN=plan-mern-241218
AZ_RG=rg-mern-241218

# secrets
AZURE_CREDENTIALS={}
MONGODB_URI=mongodb+srv://username:password@cluster0.abcde.mongodb.net/database
AZURE_PUBLISH_PROFILE=<publishData></publishData>
```
