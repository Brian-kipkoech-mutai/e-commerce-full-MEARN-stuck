import User from "../models/user";
import crypto from "crypto";

export const register = async ({ email, name, password }) => {
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
    


};
