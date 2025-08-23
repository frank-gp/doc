```sh
# 2️⃣ Actualiza Expo CLI (opcional pero recomendable)
npm install -g expo-cli

# update
rm -rf node_modules package-lock.json
npm install
```

# Update Expo SDK

https://youtu.be/HBPyP4OxVgs (source)

```sh
npx expo install --check

npx expo install expo@latest
npx expo install expo@next

npx expo-doctor

rm -rf node_modules package-lock.json
npm install

npx expo prebuild -p android --clear
npx expo run:android
npx expo run:android -d

```

# Expo SDK 53

https://youtu.be/uXi503z8p-g Expo SDK 53: React 19, Expo UI

## Expo UI

https://docs.expo.dev/versions/latest/sdk/ui/
