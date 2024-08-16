import { Router } from "express";
import { search } from "../controllers/productController.js";

export const productsRoutes = Router();
productsRoutes.get("/search", search);
