https://docs.expo.dev/router/installation/#setup-entry-point

# Install Expo Router

```sh
npx create-expo-app --template
npx create-expo-app@latest --template --blank-typescript

npx expo start

npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

### package.json

```json
{
  "main": "expo-router/entry"
}
```

### app.json

```json
{
  "scheme": "your-app-scheme"
}
```

Rename `App.tsx` to `app/index.tsx` or `src/app/index.tsx`

```tsx
// src/app/_layout.tsx
import { Stack } from "expo-router";

export default function Layout() {
  return <Stack />;
}
```

## Clear bundler cache

```sh
npx expo start --clear
```
