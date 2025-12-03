```sh
## 2️⃣ Instalar Xcode Command Line Tools
# Estas herramientas son necesarias para compilaciones y desarrollo.
# Incluyen: `clang` (compilador), `git`, `make` y utilidades esenciales de desarrollo.
xcode-select --install


## 3️⃣ Instalar Xcode completo mediante la App Store CLI (mas)
# Esto instalará la versión completa de Xcode, incluyendo los simuladores de iPhone y iPad.

# 3.1️⃣ Instalar la herramienta `mas` (Mac App Store CLI)
brew install mas

# 3.2️⃣ Buscar Xcode en la App Store y obtener su ID
# Normalmente, el ID de Xcode es: 497799835
mas install 497799835

# 3.3️⃣ Configurar la versión de Xcode como activa
# Esto asegura que las herramientas de línea de comando usen esta instalación
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer

# 3.4️⃣ Aceptar la licencia de Xcode
# Necesario para poder usar `xcodebuild` y otras herramientas de desarrollo
sudo xcodebuild -license accept

# Abre Xcode
open -a Xcode

# Abrir el Simulador directamente (terminal)
open -a Simulator

# Elegir un iPhone específico (muy útil)
xcrun simctl list devices
# Encender ese iPhone
xcrun simctl boot "iPhone 15"
# Luego abre la UI:
open -a Simulator

# Verifica que Xcode está bien configurado
xcode-select -p

# Y confirma que hay simuladores:
xcrun simctl list runtimes

# Actualizar Xcode
mas upgrade 497799835
# o
sudo xcodebuild -version

# Ver qué versiones tienes ahora
xcodebuild -version
xcrun simctl list runtimes
xcrun simctl list devices

# ❗ Si algo falla
sudo xcodebuild -license accept

# Y reinicia el simulador:
killall Simulator
open -a Simulator


# Monitorear la descarga con "activity monitor"
```
