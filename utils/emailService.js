const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();


const transporter = nodemailer.createTransport({
    host: "mail.pushdynamics.co",
    port: 587,
    secure: false,
    auth: {
    user: process.env.SUPPORT_EMAIL,
    pass: process.env.SUPPORT_EMAIL_PASSWORD,
    },
});




exports.sendVerificationEmail = async (email, link) => {

  await transporter.sendMail({
    from: "support@onisac.com",
    to: email,
    subject: "Verify your email",
    html: `
      <h2>Email Verification</h2>
      <p>Click below to verify your email</p>
      <a href="${link}">Verify Email</a>
      <p>If you didn't ask to verify this address, you can ignore this email.
      <br/>
      Thanks,
      <br/>
      ONISAC Team.
      </p>
    `
  });

};