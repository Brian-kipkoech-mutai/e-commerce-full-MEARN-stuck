import express from "express";
import { register, verifyEmail } from "../controllers/authContollers.js";

const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.get("/verifyemail",verifyEmail);

export default authRoutes;
