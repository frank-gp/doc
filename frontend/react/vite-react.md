## Commands

```bash
npm create vite

npm create vite@latest proyectJS -- --template react

npm create vite@latest proyectTS -- --template react-ts

```

## .eslintrc.cjs
```js
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}

```

### Redux DevTools
https://chromewebstore.google.com/detail/lmhkpmbekcpmknklioeibfkpmmfibljd

### React Developer Tools
https://chromewebstore.google.com/detail/fmkadmapgofadopljbjfkapdkoienihi