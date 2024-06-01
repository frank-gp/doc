import express, { Request, Response } from "express";
import { sendEmail } from "./helpers/sendEmail";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/send-email", async (req: Request, res: Response) => {
  const { to, subject, text } = req.body;

  try {
    const info = await sendEmail(to, subject, text);
    res.status(200).json({ email_sent: info });
  } catch (error) {
    res.status(500).send("Error sending email");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
