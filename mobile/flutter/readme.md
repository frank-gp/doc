# Install the Flutter SDK

https://docs.flutter.dev/get-started/install/windows/mobile

- **Tutorial: Install Flutter** https://youtu.be/n2uK9RWdGrw?t=847
- Install C++ en Visual Studio
- Install in Android Studio > ✅ Android SDK Command-line Tools
  - `SDK Manager > Settings > Languages & Frameworks > Android SDK > SDK Tools`
- Install in Android Studio > ✅ NDK (Side by Side)
  - `SDK Manager > Settings > Languages & Frameworks > Android SDK > SDK Tools`
- To accept the SDK licenses

```sh
flutter doctor --android-licenses
```

# Check Flutter

```sh
# C:\bin\flutter\bin

flutter doctor
flutter doctor -v
flutter --version
where flutter dart
flutter create myapp
flutter create myapp --empty
flutter create myapp --empty --org com.frankgp --platforms android,ios 
flutter create . --empty --org com.frankgp --platforms android

flutter create --org com.tuempresa --project-name mylogin --platforms=android,ios mylogin
flutter create --template app --overwrite .
flutter create --template app --overwrite --org com.example.app app

flutter run

flutter devices
flutter run -d ZY32CNV9PG

#add to environment variables: %LOCALAPPDATA%\Android\Sdk\platform-tools\
adb uninstall com.frankgp.app

```

| Tecla | Acción                                                |
| ----- | ----------------------------------------------------- |
| `r`   | 🔁 **Hot reload** (cambia UI sin reiniciar el estado) |
| `R`   | 🔄 **Hot restart** (reinicia app completamente)       |
| `q`   | ❌ **Salir / Parar la ejecución de la app**           |
| `h`   | ℹ️ Mostrar ayuda de comandos interactivos             |

# Install extensions VSCode

> Flutter > Dart Code > dartcode.org
