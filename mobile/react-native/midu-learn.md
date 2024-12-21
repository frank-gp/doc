```sh
npx create-expo-app@latest

npm run web

npx create-expo-app@latest my-expo-app-blank --template blank

npm start

# install react components
npx expo install react-dom react-native-web @expo/metro-runtime

# eslint
npx expo lint

# prettier
npx expo install -- --save-dev prettier eslint-config-prettier eslint-plugin-prettier

```

install plugin eslint of microsoft

```js
// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugin: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  ignorePatterns: ["/dist/*"],
};
```
