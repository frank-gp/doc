# Build and release an Android app

```sh
# create
flutter create app --org com.frankgp --platforms android,ios --empty
```

https://docs.flutter.dev/deployment/android

# /android/key.properties

```sh
storePassword=your_password
keyPassword=your_password
keyAlias=upload-key-alias
storeFile=../../_credentials/upload-keystore.jks
```

# Generate the keystore

```sh
# powershell
keytool -genkey -v -keystore ./_credentials/upload-keystore.jks `
        -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 `
        -alias upload-key-alias

# bash
keytool -genkey -v -keystore ./_credentials/upload-keystore.jks \
  -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 \
  -alias upload-key-alias
```

# /android/app/build.gradle.kts

Define and load the keystore properties file before the `android` property block.

```sh
import java.util.Properties
import java.io.FileInputStream

val keystoreProperties = Properties()
val keystorePropertiesFile = rootProject.file("key.properties")
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(FileInputStream(keystorePropertiesFile))
}
```

Add the signing configuration before the `buildTypes` property block inside the android property block.

```sh
signingConfigs {
    create("release") {
        keyAlias = keystoreProperties["keyAlias"] as String
        keyPassword = keystoreProperties["keyPassword"] as String
        storeFile = keystoreProperties["storeFile"]?.let { file(it) }
        storePassword = keystoreProperties["storePassword"] as String
    }
}

buildTypes {
    release {
        signingConfig = signingConfigs.getByName("release")
    }
}
```

### /android/app/build.gradle.kts

```js
defaultConfig {
    applicationId = "com.frankgp.app"
}
```

# Review the app manifest

### /android/app/src/main/AndroidManifest.xml

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <application
        android:label="My App">
    </application>
    <uses-permission android:name="android.permission.INTERNET"/>
</manifest>
```

# pubspec.yaml

```yaml
version: 25.7.15+8
```

### ✅ Recomendaciones para imágenes:

```yaml
  flutter_launcher_icons: ^0.13.1
  flutter_native_splash: ^2.4.0

flutter:
  uses-material-design: true

  assets:
    - assets/icon.png
    - assets/splash.png
    - assets/icon_foreground.png
    - assets/icon_background.png

flutter_icons:
  android: true
  ios: true
  image_path: "assets/icon.png"
  adaptive_icon_background: "assets/icon_background.png"
  adaptive_icon_foreground: "assets/icon_foreground.png"

flutter_native_splash:
  color: "#ffffff"
  image: assets/splash.png
  android: true
  ios: true
```

#### Archivo Tamaño sugerido Detalles

> - `assets/icon.png` 512x512 Ícono general
> - `assets/icon_foreground.png` 432x432 Logo con fondo transparente
> - `assets/icon_background.png` 108x108+ Fondo sólido o imagen (no debe tener transparencia)
> - `assets/splash.png` 300x300 Imagen centrada para splash

# Build the app for release

```sh
# Esto genera todos los íconos necesarios automáticamente
# Esto modifica automáticamente archivos nativos (launch_background.xml, Info.plist, etc.).
flutter pub get
flutter pub run flutter_launcher_icons:main
flutter pub run flutter_native_splash:create

flutter clean
flutter run

flutter clean
flutter pub get
flutter build appbundle --release

# para limpiar splash
flutter pub run flutter_native_splash:remove

# 🟢 Para AAB (Play Store):
flutter build appbundle
flutter build appbundle --release
# build\app\outputs\bundle\release\app-release.aab

# 📦 Para APK (Instalador local):
flutter build apk --release
```

### alias

```sh
alias flutter:release="node bump_version.js && flutter build appbundle --release"
```
