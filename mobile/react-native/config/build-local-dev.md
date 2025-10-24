# Prebuild + Build

```sh
npx expo prebuild

# android/local.properties
sdk.dir=C:\\Users\\Frank\\AppData\\Local\\Android\\Sdk
sdk.dir=C:\\Users\\Ivana\\AppData\\Local\\Android\\Sdk

npx expo run:android
npx expo run:android --variant devDebug
npx expo run:android --variant prodRelease

# Uninstall
adb uninstall com.ivanagbarreto.wardrobe

# Start
adb shell am start -a android.intent.action.VIEW -d "market://details?id=com.ivanagbarreto.wardrobe"

# Open / Stop
adb shell am start -n com.ivanagbarreto.wardrobe/.MainActivity
adb shell am force-stop com.ivanagbarreto.wardrobe

# Filtrar solo tus apps
adb shell pm list packages | grep ivana
adb shell pm list packages | grep frank

# android\gradle.properties
MYAPP_STORE_FILE=../../_credentials/my_keystore_pkcs12.jks
MYAPP_STORE_PASSWORD=my_key_store_password
MYAPP_KEY_ALIAS=my_key_alias
MYAPP_KEY_PASSWORD=my_key_store_password

```

```js
// android\app\build.gradle
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

    flavorDimensions "default"
    productFlavors {
        dev {
            dimension "default"
            applicationId 'com.ivanagbarreto.wardrobe'
            versionNameSuffix "-dev"
            applicationIdSuffix ".dev"
            signingConfig signingConfigs.debug
        }
        prod {
            dimension "default"
            applicationId 'com.ivanagbarreto.wardrobe'
            signingConfig signingConfigs.release
        }
    }
```

```xml
<!-- code ./android/app/src/dev/res/values/strings.xml -->
<resources>
    <string name="app_name">MM pre</string>
</resources>

<!-- code ./android/app/src/main/AndroidManifest.xml -->
<intent-filter>
    <data android:scheme="ivanamixmatchpre"/>
    <data android:scheme="ivanamixmatchdev"/>
</intent-filter>

```

```sh

cd android
# build app-release.aab
./gradlew bundleRelease

# android/app/build/outputs/bundle/release/app-release.aab
```
