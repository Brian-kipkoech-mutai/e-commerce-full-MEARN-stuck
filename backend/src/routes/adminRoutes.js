import { Router } from "express";
import { createProduct } from "../controllers/adminController.js";

export const adminRoutes = Router();

adminRoutes.post("/create", createProduct);
