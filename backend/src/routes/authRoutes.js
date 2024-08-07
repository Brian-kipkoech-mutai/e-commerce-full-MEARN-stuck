import express from "express";
import { register, resendEmailVerificationLink, verifyEmail } from "../controllers/authContollers.js";

const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.get("/verifyemail", verifyEmail);
authRoutes.post('/resendLink',resendEmailVerificationLink)

export default authRoutes;
