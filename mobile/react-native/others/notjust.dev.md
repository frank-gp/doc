https://youtu.be/FBXUPJ9_Xl0
https://github.com/notJust-dev/FullstackEcommerce
https://notjust.notion.site/Full-stack-ecomm-Expo-123b0ec93c5a803b9fe9eca3c0939fe3
```sh

npm create-expo-app . --example
npx create-expo-app@latest ecommerce-mobile --template

npm start

# https://docs.expo.dev/router/installation/#install-dependencies
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

npx expo install react-native-web react-dom

#  package.json
#   "main": "expo-router/entry",

# app.json
# "scheme": "notJust-ecom1", 


npm start -- --clear

# 26:00  exp://qbb96ba-anonymous-8081.exp.direct
npm start -- --clear --tunnel 


# commit step 2: min 38:00


# https://gluestack.io/ui/docs/home/getting-started/installation
npx gluestack-ui init
npx gluestack-ui add box
# https://gluestack.io/ui/docs/components/button
npx gluestack-ui add button


# ========== commit step 3: min 51:00 ==========

# https://gluestack.io/ui/docs/components/card
npx gluestack-ui add card
npx gluestack-ui add image text vstack heading

# ========== commit step 4: Card Products min 1:06:00 ==========

# ========== commit step 5: min 1:24:00 > Product details ==========

# https://gluestack.io/ui/docs/hooks/use-break-point-value
npx gluestack-ui add useBreakPointValue


# ========== commit step 6: min 1:50:00 > Resposive ==========
npm install cross-env --save-dev

# "scripts": {
#   "dev": "cross-env NODE_ENV=dev node --import=tsx --watch --env-file=.env src/index.ts"
# }

npm run dev

# base de datos postgres online
# https://genezio.com/
# https://app.genez.io/databases

# DATABASE_URL=postgresql://postgres:admin@localhost:5432/temp2

# http://localhost:3001/products


npm i genezio -g

genezio deploy

ipconfig

# http://192.168.18.21:3000/products


# https://tanstack.com/query/latest/docs/framework/react/installation

npm i @tanstack/react-query


# ========== commit step 7: min 2:27:00 > API TanStack Query ==========


# https://zustand.docs.pmnd.rs/getting-started/introduction
npm install zustand


# https://gluestack.io/ui/docs/components/icon
npx gluestack-ui add icon

# https://lucide.dev/guide/packages/lucide-react-native
npm install lucide-react-native

npx gluestack-ui add hstack


# ========== commit step 8: min 3:01:00 > Shopping cart with global state using Zustand ==========


# https://gluestack.io/ui/docs/components/input
npx gluestack-ui add input

# https://gluestack.io/ui/docs/components/form-control
npx gluestack-ui add form-control

# ========== commit step 9: min 3:14:00 > Login screen UI ==========


# https://docs.expo.dev/versions/latest/sdk/async-storage/
npx expo install @react-native-async-storage/async-storage


# ========== commit step 10: min 3:37:00 > Auth ==========

# ========== commit step 11: min 3:48:00 > Submit order ==========