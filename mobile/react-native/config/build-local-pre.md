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

# Filtrar solo tus apps
adb shell pm list packages | grep ivana
adb shell pm list packages | grep frank

# android\gradle.properties
MYAPP_STORE_FILE=../../_credentials/app/keystore.jks
MYAPP_STORE_PASSWORD=15d559dd98b993___d2dc2965d42a287a38
MYAPP_KEY_ALIAS=030530c3fdd6535f1e6___ce0ba1cbb23a1
MYAPP_KEY_PASSWORD=4c7cf319e49593ae___7918e76d46c618ce

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
