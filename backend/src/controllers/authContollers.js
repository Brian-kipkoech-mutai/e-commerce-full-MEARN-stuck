import {
  loginService,
  registrationService,
  resendEmailVerificationLinkService,
  verfiyEmailService,
} from "../services/authServices.js";

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
  console.log(token);

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
    await loginService(userData);
    
  } catch (error) {
    next(error);
  }
};
