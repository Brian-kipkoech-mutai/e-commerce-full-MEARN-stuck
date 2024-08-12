import express from "express";
import {
  checkAuth,
  googleLogin,
  googleRegister,
  login,
  register,
  resendEmailVerificationLink,
  verifyEmail,
} from "../controllers/authContollers.js";

const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.get("/verifyemail", verifyEmail);
authRoutes.post("/resendLink", resendEmailVerificationLink);
authRoutes.post("/login", login);
authRoutes.get("/checkAuth", checkAuth);
authRoutes.post('/google/register',googleRegister)
authRoutes.post("/google/Login", googleLogin);

export default authRoutes;
