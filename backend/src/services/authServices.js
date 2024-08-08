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
  const check = await User.findOne({
    emailVerificationToken,
  });
  console.log(
    new Date(check.emailVerificationExpiration).toLocaleString(),
    "<->",
    new Date().toLocaleString()
  );
  const user = await User.findOne({
    emailVerificationToken,
    emailVerificationExpiration: { $gt: Date.now() },
  });
  console.log(user);
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
  const user = await User.findOne({ email });

  if (user) {
    //cheking if  passoword  is the same as the one stored in db
    const isPasswordSame = await User.comparePassword(password);
    if (!isPasswordSame) throw new Error("password is incorrect");
    else return user;
  }
};
