import { registrationService } from "../services/authServices.js";
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
