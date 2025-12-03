## nodemailer

### App Passwords GMail

https://myaccount.google.com/apppasswords

### nodemailerTest.js

```js
const nodemailer = require("nodemailer");
// import nodemailer from "nodemailer";

const userGmail = "fgp555@gmail.com";
const passAppGmail = "bjul tlrx nmec eydx";

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: userGmail,
    pass: passAppGmail,
  },
});

// Define a route for sending emails
// Set up email options
const mailOptions = {
  from: userGmail,
  to: userGmail,
  subject: "Test Email 222",
  text: "This is a test email from Node.js!",
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  }
  console.log("Email sent: " + info.response);
});
```

### index.js

```js
const express = require("express");
const emailHelper = require("./helpers/emailHelper");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.post("/send-email", async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    let info = await emailHelper(to, subject, text);
    res.status(200).send(`Email sent: ${info.response}`);
  } catch (error) {
    res.status(500).send("Error sending email");
  }
});

// Start the server
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
```

### helpers/emailHelper.js

```js
const nodemailer = require("nodemailer");

const emailHelper = async (to, subject, text) => {
  // Create a transporter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "fgp555@gmail.com",
      pass: "bjul tlrx nmec eydx",
    },
  });

  // Set up email options
  let mailOptions = {
    from: "fgp555@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };

  // Send the email
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = emailHelper;
```
