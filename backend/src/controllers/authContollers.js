import {
  googleLoginServices,
  googleRegisterServices,
  loginService,
  registrationService,
  resendEmailVerificationLinkService,
  verfiyEmailService,
} from "../services/authServices.js";
import jwt from "jsonwebtoken";
import sendCookie from "../utils/sendCooki.js";
import { JWT_SECRET_KEY } from "../config/env.js";
import getGoogledata from "../utils/googleData.js";

export const register = async (req, res, next) => {
  try {
    const user = await registrationService(req.body);
    const { name, emailVerificationExpiration, email } = user;

    const message = {
      message: `Hello ${name}, 
             we have sent a verification link to ${email}. 
             Click the link to verify your identity.
             The link will expire at ${emailVerificationExpiration.toLocaleString()}`,
    };
    res.status(201).json(message);
  } catch (error) {
    next(error);
  }
};

export const verifyEmail = async (req, res, next) => {
  const token = req.query.token;

  try {
    const user = await verfiyEmailService(token);
    if (user) {
      res.redirect("http://localhost:5173/verification/success");
    } else {
      res.redirect(`http://localhost:5173/verification/failed?token=${token}`);
    }
  } catch (error) {
    next(error);
  }
};

export const resendEmailVerificationLink = async (req, res, next) => {
  try {
    const { token } = req.body;
    const user = await resendEmailVerificationLinkService(token);
    const message = {
      message: `Link was resent  check  your gmail ${user.email}`,
    };
    res.status(201).json(message);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const userData = req.body;
    const { user, isPasswordSame } = await loginService(userData);

    if (!user) {
      res
        .status(401)
        .json({ message: "User dose not exist try signing up instead" });
    }
    if (!isPasswordSame) {
      res.status(401).json({ message: "password is  incorrect" });
    }

    sendCookie(res, user._id);
  } catch (error) {
    next(error);
  }
};

export const checkAuth = async (req, res, next) => {
  try {
    const { auth_token } = req.cookies;
    if (!auth_token) {
      return res.status(401).json({
        message: "Unauthorized. user dose not have an account",
      });
    }
    jwt.verify(auth_token, JWT_SECRET_KEY);
    return res.status(200).json({ message: "authorized" });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Unauthorized. Token has expired.",
      });
    }
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        message: "Unauthorized. Invalid token.",
      });
    }

    next(error);
  }
};

export const googleRegister = async (req, res, next) => {
  try {
    const { idToken } = req.body;

    const { googleId, picture, name, email } = await getGoogledata(idToken);

    const { id } = await googleRegisterServices({
      googleId,
      email,
      name,
      picture,
    });
    sendCookie(res, id);
  } catch (error) {
    if (error.name === "UserExists") {
      return res.status(409).json({
        message: error.message,
      });
    }
    if (error.name === "GoogleAccountAlreadyExists") {
      return res.status(409).json({
        message: error.message,
      });
    }
    if (error.name === "GoogleAccountLinkedToDifferentEmail") {
      return res.status(409).json({
        message: error.message,
      });
    }
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Unauthorized. Token has expired.",
      });
    } else if (
      error.name === "JsonWebTokenError" ||
      error.message === "Invalid ID token"
    ) {
      return res.status(401).json({
        message: "Unauthorized. Invalid token.",
      });
    }
    next(error);
  }
};

export const googleLogin = async (req, res, next) => {
  try {
    const { idToken } = req.body;

    const { googleId } = await getGoogledata(idToken);
    const { id } = await googleLoginServices({ googleId });
    sendCookie(res, id);
  } catch (error) {
    if (error.name === "noUser") {
      return res.status(401).json({ message: error.message });
    }
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Unauthorized. Token has expired.",
      });
    } else if (
      error.name === "JsonWebTokenError" ||
      error.message === "Invalid ID token"
    ) {
      return res.status(401).json({
        message: "Unauthorized. Invalid token.",
      });
    }
    next(error);
  }
};
