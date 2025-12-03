```sh
# 2️⃣ Actualiza Expo CLI (opcional pero recomendable)
npm install -g expo-cli

# update
rm -rf node_modules package-lock.json
npm install
```

# Update Expo SDK

https://youtu.be/HBPyP4OxVgs (source)
https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/

```sh
npm install expo@^54.0.0
npx expo install expo@latest

npx expo install --fix && npx expo-doctor

npx expo install --check

npm install --legacy-peer-deps

npx expo-doctor

# Limpia cache y node_modules
rm -rf node_modules package-lock.json
npm cache clean --force

# Instala las versiones correctas según Expo SDK 54
npx expo install

npx expo prebuild -p android --clear
npx expo run:android
npx expo run:android -d

```

# Expo SDK 53

https://youtu.be/uXi503z8p-g Expo SDK 53: React 19, Expo UI

## Expo UI

https://docs.expo.dev/versions/latest/sdk/ui/
