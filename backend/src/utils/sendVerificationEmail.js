import nodemailer from "nodemailer";
import { EMAIL_PASS, PORT, USER_EMAIL } from "../config/env.js";

const sendVerificationEmail = async (verificationToken = "real token ",email = "kbrianmutai@gmail.com") => {
  const verificationLink = `http://localhost:5001/api/auth/verifyemail?q=${verificationToken}`;
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8c65ab75056a31",
      pass: "4394225ab65fa4",
    },
  });

  //
  const mailOptions = {
    from: "kbrianmutai@gmail.com",
    to: email,
    subject: "request to verify your email",
    text: `Hello,\n\nPlease click the link below to verify your account:\n\n${verificationLink}\n\nIf you did not request this verification, please ignore this email.\n\nThank you,\nYour Company Name`,
    html: `<div style="font-family: Arial, sans-serif; line-height: 1.5;">
               <p style="font-size: 16px;">Hello from  trend hive </p>
               <p style="font-size: 16px;">Please click the link below to verify your account:</p>
               <p><a href="${verificationLink}" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: #ffffff; background-color: #007bff; text-decoration: none; border-radius: 5px;">Verify your account</a></p>
               <p style="font-size: 16px;">If you did not request this verification, please ignore this email.</p>
               <p style="font-size: 16px;">Thank you,<br>trendHive</p>
               </div>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("sent");
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export default sendVerificationEmail;
