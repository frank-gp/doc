// notification.js
const expoPushToken = "ExponentPushToken[9lDPC2PBY4KiDpjBhJjWjD]"; // Cambia por tu token

async function sendPushNotification() {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "From Backend",
    body: "And here is the body!",
    data: { someData: "goes here" },
  };

  try {
    const res = await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
      },
      body: JSON.stringify(message),
    });

    const data = await res.json();
    console.log("Response from Expo:", data);
  } catch (error) {
    console.error("Error sending notification:", error);
  }
}

sendPushNotification();
