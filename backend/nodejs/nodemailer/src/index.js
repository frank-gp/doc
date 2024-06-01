const express = require("express");
const path = require("path");
const emailService = require("./helpers/emailHelper");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.post("/send-email", async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    let info = await emailService.sendEmail(to, subject, text);
    res.status(200).send(`Email sent: ${info.response}`);
  } catch (error) {
    res.status(500).send("Error sending email");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
