# Notifications in React Native

https://docs.expo.dev/versions/latest/sdk/notifications/

```tsx
useEffect(() => {
  if (expoPushToken) {
    fetch("http://192.168.18.21:3000/save-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: expoPushToken, email: "user123@gmail.com" }),
    });
  }
}, [expoPushToken]);
```
