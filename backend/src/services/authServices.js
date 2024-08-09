import User from "../models/user.js";
import sendVerificationEmail from "../utils/sendVerificationEmail.js";
import generateRandomToken from "../utils/tokenGenerator.js";

export const registrationService = async ({ email, name, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exist please login ");
  }
  const oneHour = 3600000;
  const emailVerificationToken = generateRandomToken();
  const emailVerificationExpiration = new Date(Date.now() + oneHour);

  const user = new User({
    name,
    email,
    emailVerificationToken,
    emailVerificationExpiration,
  });
  await user.setPassword(password);
  await user.save();
  await sendVerificationEmail(emailVerificationToken, email);
  return user;
};

export const verfiyEmailService = async (emailVerificationToken) => {
  const user = await User.findOne({
    emailVerificationToken,
    emailVerificationExpiration: { $gt: Date.now() },
  });
  if (user) {
    user.emailVerificationToken = null;
    user.emailVerificationExpiration = null;
    user.emailVerified = true;
    await user.save();
  }

  return user;
};

export const resendEmailVerificationLinkService = async (
  emailVerificationToken
) => {
  const user = await User.findOne({ emailVerificationToken });
  if (!user) {
    throw new Error("no user found  with matching token");
  }

  const token = generateRandomToken();
  const oneHour = 3600000;
  user.emailVerificationToken = token;
  user.emailVerificationExpiration = new Date(Date.now() + oneHour);
  await user.save();
  await sendVerificationEmail(token, user.email);
  return user;
};

export const loginService = async ({ email, password }) => {
  console.log(email);
  const user = await User.findOne({ email });

  const isPasswordSame =
    user &&
    //correct  simplify tomorrow
    (await new User({ password: user.password }).comparePassword(password));
  return { user, isPasswordSame };
};
