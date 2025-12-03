# Generar el archivo AAB (Android App Bundle) & APK (Android Package)

descargar las credenciales de expo, y actualizar el archivo `app.json`

```sh
adb uninstall com.ivanagbarreto.wardrobe
npx expo prebuild
npx expo run:android

adb uninstall com.ivanagbarreto.wardrobe
adb shell am start -a android.intent.action.VIEW -d "https://play.google.com/store/apps/details?id=com.ivanagbarreto.wardrobe"

# ./gradlew bundleRelease

npx expo prebuild
npx expo prebuild --clean

# android/local.properties
sdk.dir=C:\\Users\\Frank\\AppData\\Local\\Android\\Sdk
sdk.dir=C:\\Users\\Ivana\\AppData\\Local\\Android\\Sdk

npx expo run:android
npx expo run:android -d

npx expo run:android --variant devDebug
npx expo run:android --variant prodRelease


cd android
./gradlew assembleDevDebug
./gradlew assembleProdRelease

# Uninstall
adb uninstall com.ivanagbarreto.wardrobe.dev
adb uninstall com.ivanagbarreto.wardrobe

# Listar todas las apps
adb shell pm list packages

# Filtrar solo tus apps
adb shell pm list packages | grep ivana
adb shell pm list packages | grep frank

# Solo apps de usuario
adb shell pm list packages -3

# Solo apps del sistema
adb shell pm list packages -s

```

```js
// android\app\build.gradle
    signingConfigs {
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
<!-- android/app/src/dev/res/values/strings.xml -->
<resources>
    <string name="app_name">MM pre</string>
</resources>

<!-- android\app\src\main\AndroidManifest.xml -->
<intent-filter>
    <data android:scheme="ivanamixmatchdev"/>
</intent-filter>

```

