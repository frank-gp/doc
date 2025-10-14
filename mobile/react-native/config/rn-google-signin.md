# Intall

```sh
# https://react-native-google-signin.github.io/
npm install @react-native-google-signin/google-signin
```

# build

```sh
npx expo prebuild

# android/local.properties
sdk.dir=C:\\Users\\Frank\\AppData\\Local\\Android\\Sdk

npx expo run:android
```

# keystore

```sh
keytool -keystore android/app/debug.keystore -list -v -keypass android
# 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25

```

# Credenciales

```sh

# android\gradle.properties
MYAPP_STORE_FILE=../../_credentials/my_keystore_pkcs12.jks
MYAPP_STORE_PASSWORD=my_key_store_password
MYAPP_KEY_ALIAS=my_key_alias
MYAPP_KEY_PASSWORD=my_key_store_password
```

```js
// android\app\build.gradle
    defaultConfig {
        applicationId 'com.frankgp.app'
        versionCode 29
        versionName "2025.10.29"
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

# AAB en git bash
./gradlew bundleRelease

# android/app/build/outputs/bundle/release/app-release.aab
```
