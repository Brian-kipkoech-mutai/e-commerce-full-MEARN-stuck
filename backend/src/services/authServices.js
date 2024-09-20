import ErrorHandler from "../ErrorHandler.js";
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
    provider: "local",
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

  if (user && user.provider === "google") {
    throw new ErrorHandler("Use Google sign-in instead", 400);
  }

  const isPasswordSame = user && (await user.comparePassword(password));

  return { user, isPasswordSame };
};

export const googleRegisterServices = async ({
  googleId,
  email,
  name,
  picture,
}) => {
  const { email: existingEmail } = (await User.findOne({ googleId })) || {};

  if (existingEmail) {
    if (existingEmail === email) {
      const error = new Error(
        "This Google account is already associated with an existing account."
      );
      error.name = "GoogleAccountAlreadyExists";
      throw error;
    } else {
      const error = new Error(
        "This Google account is linked to a different email address."
      );
      error.name = "GoogleAccountLinkedToDifferentEmail";
      throw error;
    }
  }
  const existingUser = await User.findOne({ email, provider: "local" });
  if (existingUser) {
    const error = new Error(
      "An account with this email already exists. Please log in using your email."
    );
    error.name = "UserExists";
    throw error;
  }

  const user = new User({
    googleId,
    email,
    name,
    picture,
    emailVerified: true,
    provider: "google",
  });
  const { _id: id } = await user.save();
  return { id };
};

export const googleLoginServices = async ({ googleId }) => {
  const { _id: id } = (await User.findOne({ googleId })) || {};

  if (!id) {
    const error = new Error(" you don't have an  account please register");
    error.name = "noUser";
    throw error;
  }

  return { id };
};
