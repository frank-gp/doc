# Expo push notifications setup

https://docs.expo.dev/push-notifications/push-notifications-setup/

```sh
npx expo install expo-notifications expo-device expo-constants
```

# Push notifications tool

https://expo.dev/notifications

# Firebase

https://console.firebase.google.com/

# app.json

```json
{
  "expo": {
    "android": {
      "googleServicesFile": "./google-services.json"
    }
  }
}
```

# android/local.properties

```sh
sdk.dir=C:\\Users\\Frank\\AppData\\Local\\Android\\Sdk
```

# Probar el envío de notificaciones

```sh

npx expo prebuild

npx expo run:android

# Iniciar el emulador mostrando los dispositivos disponibles
npx expo run:android -d

```

# Firebase

### Obtain Google Service Account Keys using FCM V1

https://docs.expo.dev/push-notifications/fcm-credentials/
