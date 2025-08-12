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

# 🔹Generar el archivo AAB

```sh
npx expo prebuild
cd android
./gradlew bundleRelease
# Si estás en Windows, usa:
gradlew.bat bundleRelease
# android/app/build/outputs/bundle/release/app-release.aab
```

# 🔹Generar el archivo APK

```sh

npx expo prebuild
cd android
./gradlew assembleRelease
# Si estás en Windows, usa:
gradlew.bat assembleRelease
# android/app/build/outputs/apk/release/app-release.apk
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

1️⃣ Verifica que tienes el SDK de Android instalado

- Abre Android Studio.
- Ve a SDK Manager (En la configuración).
- Asegúrate de que tienes instalado el Android SDK.

2️⃣ Configura la variable de entorno ANDROID_HOME

```sh
setx ANDROID_HOME "C:\Users\TU_USUARIO\AppData\Local\Android\sdk"
setx PATH "%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\emulator;%ANDROID_HOME%\tools;%ANDROID_HOME%\tools\bin;%PATH%"
# C:\Users\fgp55\AppData\Local\Android\Sdk
```

3️⃣ Configura local.properties

```sh
# ./android/local.properties
sdk.dir=C:\\Users\\TU_USUARIO\\AppData\\Local\\Android\\sdk

npx expo run:android -d
```
