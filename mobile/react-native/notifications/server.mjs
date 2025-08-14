// server.js
import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Simulación de almacenamiento de tokens en memoria
let deviceTokens = [];

// Ruta raíz
app.get("/tokens", (req, res) => {
  res.json({ tokens: deviceTokens });
});

// Recibir y guardar el token
app.post("/save-token", (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(400).json({ error: "Token requerido" });
  }

  if (!deviceTokens.includes(token)) {
    deviceTokens.push(token);
  }

  console.log("Tokens guardados:", deviceTokens);
  res.json({ success: true, tokens: deviceTokens });
});

// Enviar notificación
app.post("/send-notification", async (req, res) => {
  const { title, body, data } = req.body;

  if (deviceTokens.length === 0) {
    return res.status(400).json({ error: "No hay tokens guardados" });
  }

  try {
    const messages = deviceTokens.map((token) => ({
      to: token,
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
