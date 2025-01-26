```sh
npx expo prebuild
npx expo run:android -d

eas init
eas build:configure
eas credentials
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

🔹Generar el archivo AAB

```sh
npx expo prebuild
cd android
./gradlew bundleRelease
# Si estás en Windows, usa:
gradlew.bat bundleRelease
# android/app/build/outputs/bundle/release/app-release.aab
```

🔹Generar el archivo APK

```sh

npx expo prebuild
cd android
./gradlew assembleRelease
# Si estás en Windows, usa:
gradlew.bat assembleRelease
# android/app/build/outputs/apk/release/app-release.apk
```
