import { Router } from "express";
import { addProductsToCart } from "../controllers/cartContollers.js";
import { checkAuthMiddware } from "../middlewares/authMiddleware.js";

export const cartRoutes = Router();

cartRoutes.post("/add", checkAuthMiddware, addProductsToCart);
