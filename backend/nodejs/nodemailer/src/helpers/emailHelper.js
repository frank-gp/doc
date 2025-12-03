const nodemailer = require("nodemailer");

const emailHelper = async (to, subject, text) => {
  // Create a transporter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "fgp555@gmail.com",
      pass: "ipms kxls gooo adma",
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

module.exports = { sendEmail: emailHelper };
