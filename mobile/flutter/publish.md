# Build and release an Android app

https://docs.flutter.dev/deployment/android

```sh
# bash
keytool -genkey -v -keystore ./upload-keystore.jks \
  -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 \
  -alias upload

# powershell
keytool -genkey -v -keystore ./upload-keystore.jks `
        -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 `
        -alias upload
```

# /android/key.properties

```sh
storePassword=your_password
keyPassword=your_password
keyAlias=upload
storeFile=<keystore-file-location>
```

# /android/app/build.gradle.kts

Define and load the keystore properties file before the android property block.

```sh
import java.util.Properties
import java.io.FileInputStream

val keystoreProperties = Properties()
val keystorePropertiesFile = rootProject.file("key.properties")
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(FileInputStream(keystorePropertiesFile))
}
```

Add the signing configuration before the buildTypes property block inside the android property block.

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

```sh
# 🗑️ Limpiar el proyecto
flutter clean
# descargar e instalar todas las dependencias que están listadas en tu archivo pubspec.yaml.
flutter pub get
# 🚀 Ejecutar la aplicación
flutter run

flutter clean
flutter pub get
flutter build appbundle --release
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

# Review or change the Gradle build configuration

### /android/app/build.gradle.kts

```js
defaultConfig {
    applicationId = "com.frankgp.flutter"
}
```

# Build the app for release

```sh
# 🟢 Para AAB (recomendado por Google):
flutter build appbundle
flutter build appbundle --release
# build\app\outputs\bundle\release\app-release.aab

# 📦 Para APK (menos recomendado para la Play Store):
flutter build apk --release
```

# splash screen

✅ Recomendaciones para imágenes:
Archivo Tamaño sugerido Detalles
assets/icon.png 512x512 Ícono general
assets/icon_foreground.png 432x432 Logo con fondo transparente
assets/icon_background.png 108x108+ Fondo sólido o imagen (no debe tener transparencia)
assets/splash.png 300x300 Imagen centrada para splash

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
```

### alias

```sh
alias flutter:release="node bump_version.js && flutter build appbundle --release"
```
