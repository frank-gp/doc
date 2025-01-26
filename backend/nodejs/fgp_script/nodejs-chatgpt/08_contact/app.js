const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

// Set up EJS as the view engine
app.set("view engine", "ejs");

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create a nodemailer transporter with your cPanel email SMTP settings
const transporter = nodemailer.createTransport({
  host: "server251.web-hosting.com", // Replace with your SMTP server address
  port: 465, // The port for outgoing mail
  secure: true, // true for 465, false for other ports
  auth: {
    user: "tutorial@fgp.one", // Your email address
    pass: "Electron5.pe", // Your email password
  },
});

app.get("/", (req, res) => res.redirect("/contact"));

// Define a route for the contact form
app.get("/contact", (req, res) => {
  res.render("contact");
});

// Handle form submissions
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Create email data
  const mailOptions = {
    from: '"Fred Foo 👻" <tutorial@fgp.one>',
    to: "franklingomez.pe@gmail.com", // Replace with the recipient's email address
    subject: "Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email: " + error);
      res.send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Form submitted successfully!");
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
