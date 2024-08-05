import nodemailer from "nodemailer";
import { EMAIL_PASS, PORT, USER_EMAIL } from "../config/env.js";

const sendVerificationEmail = async (verificationToken, email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: USER_EMAIL,
      pass: EMAIL_PASS,
    },
  });
  const userOptions = {
    from: USER_EMAIL,
    to: email,
    subject: "Email verfication  from trend Hive",
    Text: `Please verify your email by clicking on the following link: http://localhost:${PORT}/api/auth/verify-email?token=${verificationToken}`,
  };

  await transporter.sendMail(userOptions);
};

export default sendVerificationEmail;