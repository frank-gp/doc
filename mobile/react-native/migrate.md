# Migrar a otro proyecto de React Native

### app.json

```json
{
  "expo": {
    "slug": "transpaservic-mobile-2",
    "android": {
      "versionCode": 30,
      "package": "com.systered.transpaservic",
    },
    "extra": {
      "router": {
        "origin": false
      },
      "eas": {
        "projectId": "d768977a-8a11-4235-bc4d-0c60bbbbebee"
      }
    }
  }
}
```
