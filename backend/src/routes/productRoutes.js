import { Router } from "express";
import { bestselling, filters, search ,latest, featured } from "../controllers/productController.js";

export const productsRoutes = Router();
productsRoutes.get("/search", search);
productsRoutes.get('/filters', filters)
productsRoutes.get("/bestselling", bestselling);
productsRoutes.get('/latest', latest);
productsRoutes.get('/featured', featured);
