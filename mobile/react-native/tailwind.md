# 1. Install NativeWind

https://www.nativewind.dev/getting-started/react-native

```sh
npx expo install nativewind tailwindcss react-native-reanimated react-native-safe-area-context

```

### tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### global.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### babel.config.js

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxImportSource: "nativewind" }], "nativewind/babel"],
  };
};
```

```js
import "../global.css";
```
