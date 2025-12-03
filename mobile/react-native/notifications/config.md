# Expo push notifications setup (code example)

https://docs.expo.dev/push-notifications/push-notifications-setup/

```sh
npx expo install expo-notifications expo-device expo-constants

eas build
```

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

### Config Google Service Account Keys using FCM V1

https://docs.expo.dev/push-notifications/fcm-credentials/

```sh
# config > user123-firebase-adminsdk.json
eas credentials

# > Android > production
# > 2. Google Service Account
# > 2. Manage your Google Service Account Key for Push Notifications (FCM V1)
# > 1. Set up a Google Service Account Key for Push Notifications (FCM V1)
# > 2. Upload a new service account key

npx expo run:android
```

# Run the application

```sh
npx expo prebuild

# android/local.properties
sdk.dir=C:\\Users\\Frank\\AppData\\Local\\Android\\Sdk

npx expo run:android
npx expo run:android -d
```

# Notificaciones de la Expo (code example)

https://docs.expo.dev/push-notifications/push-notifications-setup/
https://docs.expo.dev/versions/latest/sdk/notifications/

# Push notifications tool

https://expo.dev/notifications
