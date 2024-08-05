import express from "express";
import { register } from "../controllers/authContollers.js";

const authRoutes = express.Router();

authRoutes.post("/register", register);

export default authRoutes;
