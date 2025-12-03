# EAS (Expo Application Services)

```sh
# https://expo.dev/accounts/username
npm install -g eas-cli
eas login
eas build:configure
eas whoami
eas init
eas credentials

eas build
eas build:status
eas build --platform android

npx expo prebuild
npx expo run:android -d

```

### app.json

```json
{
  "expo": {
    "name": "Tutorial App",
    "slug": "com-frankgp-tutorial",
    "android": {
      "versionCode": 4,
      "package": "com.frankgp.tutorial"
    },
    "extra": {
      "eas": {
        "projectId": "bcacba6c-7b16-4f77-a5ce-9bbfdd281dd1"
      }
    }
  }
}
```
