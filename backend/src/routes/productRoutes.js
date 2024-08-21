import { Router } from "express";
import { filters, search } from "../controllers/productController.js";

export const productsRoutes = Router();
productsRoutes.get("/search", search);
productsRoutes.get('/filters',filters)
