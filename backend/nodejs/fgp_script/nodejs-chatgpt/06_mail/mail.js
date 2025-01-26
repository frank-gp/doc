const nodemailer = require('nodemailer');

// Create a transporter object using your email service provider's SMTP settings.
const transporter = nodemailer.createTransport({
  service: 'Gmail', // You can change this to your email provider (e.g., 'Outlook', 'Yahoo', etc.)
  auth: {
    user: 'fgp555@gmail.com', // Your email address
    pass: 'vtzlfposuavsxpdj', // Your email password or app-specific password
  },
});

// Define the email content.
const mailOptions = {
  from: 'fgp555@gmail.com',
  to: 'franklingomez.pe@gmail.com',
  subject: 'Hello from Node.js',
  text: 'This is a test email sent from Node.js using nodemailer.',
};

// Send the email.
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
