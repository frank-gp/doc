import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Almacenamiento en memoria [{ email, token }]
let devices = [];

// Ver todos los registros
app.get("/tokens", (req, res) => {
  res.json({ devices });
});

// Guardar o actualizar token por email
app.post("/save-token", (req, res) => {
  const authorization = req.headers.authorization;
  console.log("authorization", authorization);

  const { token, email } = req.body;
  if (!token || !email) {
    return res.status(400).json({ error: "Token y email son requeridos" });
  }

  const existingIndex = devices.findIndex((d) => d.email === email);
  if (existingIndex !== -1) {
    // Si ya existe el email, actualizamos el token
    devices[existingIndex].token = token;
  } else {
    devices.push({ email, token });
  }

  console.log("Dispositivos guardados:", devices);
  res.json({ success: true, devices });
});

// Enviar notificación a todos o a un email
app.post("/send-notification", async (req, res) => {
  const { title, body, data, email } = req.body;

  // Si envían email, filtra por ese usuario
  let targetDevices = devices;
  if (email) {
    targetDevices = devices.filter((d) => d.email === email);
    if (targetDevices.length === 0) {
      return res.status(404).json({ error: "No se encontró ese email" });
    }
  }

  try {
    const messages = targetDevices.map((device) => ({
      to: device.token,
      sound: "default",
      title: title || "Título por defecto",
      body: body || "Mensaje por defecto",
      data: data || {},
    }));

    const response = await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messages),
    });

    const result = await response.json();
    console.log("Respuesta de Expo:", result);

    res.json({ success: true, result });
  } catch (error) {
    console.error("Error enviando notificación:", error);
    res.status(500).json({ error: "Error enviando notificación" });
  }
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
