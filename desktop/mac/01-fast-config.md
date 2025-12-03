### Open Devolutions Remote Desktop Manager

vnc://62.210.166.227:59010

```sh
mkdir -p ~/.ssh
chmod 700 ~/.ssh
vim ~/.ssh/authorized_keys
sudo systemsetup -setremotelogin on

ssh m1@62.210.166.227
passwd
```

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"

brew install node
brew install watchman
npm install -g expo
brew install --cask visual-studio-code
brew install --cask google-chrome

brew install mas
mas install 497799835
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
sudo xcodebuild -license accept
xcodebuild -downloadPlatform iOS
xcrun simctl list devices
xcrun simctl boot "iPhone 16 Pro"

```

# Monitorear la descarga con "activity monitor"
