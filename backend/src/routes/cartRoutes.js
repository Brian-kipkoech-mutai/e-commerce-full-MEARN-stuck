import { Router } from "express";
import { addProductsToCart } from "../controllers/cartContollers.js";

 export const cartRoutes = Router()

cartRoutes.post("/add",addProductsToCart) 