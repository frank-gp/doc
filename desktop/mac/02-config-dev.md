```sh
# =========================================
# 🔹 Conexión al Mac mini vía SSH
# =========================================
ssh m1@62.210.166.227

# =========================================
# ✅ 2️⃣ Instalar Homebrew (gestor de paquetes para macOS)
# =========================================
# Solo si no está instalado
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Agregar Homebrew al PATH (Apple Silicon)
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"

# Verificar instalación
brew --version

# =========================================
# ✅ 3️⃣ Instalar Node.js (LTS recomendada) y npm
# =========================================
brew install node
node -v    # Verificar versión de Node.js
npm -v     # Verificar versión de npm

# =========================================
# ✅ 4️⃣ Instalar Watchman (recomendado para React Native)
# =========================================
brew install watchman

# =========================================
# ✅ 5️⃣ Instalar Expo CLI globalmente
# =========================================
npm install -g expo
expo --version

# =========================================
# ✅ 6️⃣ Crear un proyecto Expo
# =========================================
mkdir -p ~/projects
cd ~/projects

# Crear nueva app
npx create-expo-app myApp
cd myApp
npm start

# Levantar proyecto (modo túnel recomendado para dispositivos físicos)
npx expo start --tunnel

# Alternativa para desarrollo local
npx expo start --localhost

# =========================================
# ✅ 7️⃣ Instalar Xcode (OBLIGATORIO para iOS)
# =========================================
# ⚠️ NO se puede instalar por SSH, usar VNC o interfaz gráfica:
# 1. Abrir App Store
# 2. Instalar Xcode
# 3. Abrir Xcode una vez y aceptar licencia

# Luego desde SSH:
sudo xcode-select --switch /Applications/Xcode.app
sudo xcodebuild -license accept
xcodebuild -version

# =========================================
# ✅ 8️⃣ Instalar simuladores iOS
# =========================================
# Listar dispositivos disponibles
xcrun simctl list devices

# Si no hay iPhones disponibles:
xcode-select --install

# Abrir simulador manualmente
open -a Simulator

# =========================================
# ✅ 9️⃣ Instalar VS Code y otras apps útiles
# =========================================
# Instalación usando Homebrew Cask (más limpio)
brew install --cask visual-studio-code    # Editor de código
brew install --cask google-chrome         # Navegador
brew install --cask firefox               # Opcional
brew install --cask iterm2                # Terminal mejorada (opcional)
brew install --cask docker                # Contenedores (opcional)

# Abrir VS Code
open -a "Visual Studio Code"
code --version

# =========================================
# 🔹 Herramientas de desarrollo adicionales
# =========================================
brew install yarn       # Gestor de paquetes alternativo
brew install cocoapods  # Gestión de dependencias iOS

# =========================================
# 🔹 Prebuild y correr proyecto iOS
# =========================================
npx expo prebuild
npx expo run:ios

# =========================================
# 🔹 Cambiar contraseña del usuario actual
# =========================================
passwd
```
