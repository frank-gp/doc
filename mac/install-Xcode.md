Perfecto, podemos hacer **un script de instalación automatizada** para macOS (M1/M2) que instale Xcode (con simulador de iPhone), VS Code, Chrome y otras herramientas comunes.

Lo mejor es usar **Homebrew** y, para apps GUI, Homebrew Cask. Así puedes instalar todo desde la Terminal sin abrir manualmente la App Store.

---

## **1️⃣ Instalar Homebrew (si no lo tienes)**

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Después agrega Homebrew al PATH:

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

---

## **2️⃣ Instalar Xcode Command Line Tools (necesario para builds)**

```bash
xcode-select --install
```

> Esto instalará `clang`, `git`, `make` y herramientas esenciales.

---

## **3️⃣ Instalar Xcode completo con mas (App Store CLI)**

Primero instala `mas`:

```bash
brew install mas
```

Luego busca Xcode y obtén el ID (normalmente `497799835`):

```bash
mas install 497799835
```

> Esto instalará Xcode con simuladores de iPhone/iPad.
> Después configura la versión activa:

```bash
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
sudo xcodebuild -license accept
```

---

## **4️⃣ Instalar apps GUI con Homebrew Cask**

```bash
brew install --cask visual-studio-code
brew install --cask google-chrome
brew install --cask firefox          # opcional
brew install --cask iterm2           # terminal mejorada, opcional
brew install --cask docker           # si vas a usar contenedores, opcional
```

---

## **5️⃣ Instalar otras herramientas de desarrollo (CLI)**

```bash
brew install node        # Node.js
brew install yarn        # gestor de paquetes
brew install watchman    # para React Native
brew install cocoapods   # gestión de dependencias iOS
```

---

## **6️⃣ Comando todo en uno (script)**

Si quieres, puedo generar un **script listo para pegar en tu Mac M2**, que haga **toda la instalación automáticamente**, incluyendo Xcode, simuladores, VS Code, Chrome y herramientas de desarrollo, con comprobaciones de errores y progreso.

Esto te permite tener tu Mac lista para desarrollo sin tocar nada manualmente.

¿Quieres que haga ese script completo?
