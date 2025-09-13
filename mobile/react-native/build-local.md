# Generar el archivo AAB (Android App Bundle) & APK (Android Package)

descargar las credenciales de expo, y actualizar el archivo `app.json`

```sh
npx expo prebuild
npx expo prebuild --clean

# android/local.properties
sdk.dir=C:\\Users\\Frank\\AppData\\Local\\Android\\Sdk

npx expo run:android
npx expo run:android -d


# android\gradle.properties
MYAPP_STORE_FILE=../../_credentials/com-frankgp-app-keystore.jks
MYAPP_STORE_PASSWORD=your_password
MYAPP_KEY_ALIAS=upload-key-alias
MYAPP_KEY_PASSWORD=your_password
```

```js
// android\app\build.gradle
    defaultConfig {
        applicationId 'com.frankgp.app'
        versionCode 14
        versionName "25.9.14"
    }

    signingConfigs {
      release {
          if (project.hasProperty('MYAPP_STORE_FILE')) {
              storeFile file(MYAPP_STORE_FILE)
              storePassword MYAPP_STORE_PASSWORD
              keyAlias MYAPP_KEY_ALIAS
              keyPassword MYAPP_KEY_PASSWORD
          }
      }
    }

    buildTypes {
      release {
          signingConfig signingConfigs.release
      }
    }
```

# Generar el archivo AAB (Android App Bundle) & APK (Android Package)

```sh

cd android

#
./gradlew clean

# AAB en git bash
./gradlew bundleRelease

# APK en git bash
./gradlew assembleRelease


# Si estás en Windows, usa:
gradlew.bat bundleRelease

# APK en Windows
gradlew.bat assembleRelease

# android/app/build/outputs/bundle/release/app-release.aab
```
