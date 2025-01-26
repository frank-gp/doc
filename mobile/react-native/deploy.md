```sh
# ========== Build APK ==========
# https://expo.dev/accounts/username
npm i -g eas-cli

# eas init
eas whoami
eas login

eas build:configure
# https://expo.dev/accounts/fgp555/projects/login2--fgp

# eas build:status

# eas build --platform android --profile preview

# eas.json
eas build -p android --profile preview
eas build --platform android

# https://expo.dev/accounts/fgp555/projects/login2--fgp/builds/3d7810b8-8d91-403d-bc97-f3fb2ea66c25

expo doctor


```

### app.json

```json
    "android": {
      "versionCode": 4,
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.fgp555.transpaservic"
    },
```

### eas.json

```json
{
  "cli": {
    "version": ">= 14.5.0",
    "appVersionSource": "remote"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      },
      "ios": {
        "simulator": true
      }
    },
    "production": {
      "autoIncrement": true
    }
  },
  "submit": {
    "production": {}
  }
}
```
