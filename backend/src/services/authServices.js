import User from "../models/user.js";
import crypto from "crypto";
import sendVerificationEmail from "../utils/sendVerificationEmail.js";

export const registrationService = async ({ email, name, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exist");
  }
  const emailVerificationToken = crypto.randomBytes(32).toString("hex");
  const emailVerificationExpiration = Date.now() + 3600000;

  const user = new User({
    name,
    email,
    emailVerificationToken,
    emailVerificationExpiration,
  });
  await user.setPassword(password);
  await user.save();
  await sendVerificationEmail(email, emailVerificationToken);
  return user;
};

export const verfiyEmailService = async (emailVerificationToken) => {
  const user = await User.findOne({
    emailVerificationToken,
    emailVerificationExpiration: { $gt: Date.now },
  });

  return user;
};
