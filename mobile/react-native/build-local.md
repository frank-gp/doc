# Generar el archivo AAB (Android App Bundle) & APK (Android Package)

```sh
npx expo prebuild
npx expo prebuild --clean

# android/local.properties
sdk.dir=C:\\Users\\Frank\\AppData\\Local\\Android\\Sdk

npx expo run:android
npx expo run:android -d


# android\gradle.properties
MYAPP_UPLOAD_STORE_FILE=../../_credentials/@frankgp__com-frankgp-app-keystore.bak.jks
MYAPP_UPLOAD_KEY_ALIAS=upload-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=your_password
MYAPP_UPLOAD_KEY_PASSWORD=your_password
```

```js
// android\app\build.gradle
    defaultConfig {
        applicationId 'com.ivanagbarreto.wardrobe'
        versionCode 7
        versionName "25.9.12"
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

# Generar el archivo AAB

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

### Configura local.properties

```sh
# ./android/local.properties
sdk.dir=C:\\Users\\TU_USUARIO\\AppData\\Local\\Android\\sdk

npx expo run:android -d
```
