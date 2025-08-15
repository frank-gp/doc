```sh

cd android && ./gradlew clean

cd ..
npx expo prebuild
npx expo run:android -d

eas build
eas build --clear-cache
```
