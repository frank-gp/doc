To manage environment variables using EAS CLI, you can use the eas env:create, eas env:update, eas env:list, and eas env:delete commands.

You can additionally use eas env:pull command to pull environment variables from EAS servers to your local .env file for development.

```sh
eas env:create --name development --platform android
eas env:create --environment development
eas env:update --name development --platform android
eas env:list --platform android
eas env:delete --name development --platform android

eas env:pull --name development --platform android
```

https://expo.dev/accounts/%5Baccount%5D/projects/%5Bproject%5D/environment-variables

https://expo.dev/accounts/fgp555/projects/com-frankgp-app/environment-variables
