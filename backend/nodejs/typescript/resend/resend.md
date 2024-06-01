# resend

### test.js

```js
import { Resend } from "resend";

const resend = new Resend("re_i8i5rCXG_");

(async function () {
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "user123@gmail.com",
    subject: "Hello World",
    html: "<strong>it works!</strong>",
  });

  if (error) {
    return console.log(error);
  }

  console.log(data);
})();
```

### src/index.ts

```js
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
```

### src/helpers/sendEmail.ts

```js
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY || "");

export const sendEmail = async (to: string, subject: string, text: string): Promise<any> => {
  try {
    const response = await resend.emails.send({
      from: "Frank GP <onboarding@resend.dev>",
      to: to,
      subject: subject,
      text: text,
    });
    console.log("Email sent:", response);
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
```

### .env

```bash
RESEND_API_KEY=re_i8i5rCXG_EPNd66KVmKNtoUdZt
```

### methods.http

```bash
### Send Email
POST http://localhost:3000/send-email
Content-Type: application/json

{
  "to": "fgp555@gmail.com",
  "subject": "Test Email",
  "text": "Hello, this is a test email!"
}

```
