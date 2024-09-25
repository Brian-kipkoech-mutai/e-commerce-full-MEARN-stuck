import { Router } from "express";
import { addToWishList } from "../controllers/whislistController.js";
import { checkAuthMiddware } from "../middlewares/authMiddleware.js";

export const whislistRoutes = Router();

whislistRoutes.post("/add", checkAuthMiddware, addToWishList);
