import { Router } from "express";
import {
  bestselling,
  filters,
  search,
  latest,
  featured,
  similarProducts,
  ProductDetails,
  ProductReviews,
  ProductDescription,
  ProductAddReview,
} from "../controllers/productController.js";
import { checkAuthMiddware } from "../middlewares/authMiddleware.js";

export const productsRoutes = Router();
productsRoutes.get("/search", search);
productsRoutes.get("/filters", filters);
productsRoutes.get("/bestselling", bestselling);
productsRoutes.get("/latest", latest);
productsRoutes.get("/featured", featured);
productsRoutes.get("/details", ProductDetails);
productsRoutes.get("/similar", similarProducts);
productsRoutes.get("/reviews", ProductReviews);
productsRoutes.get("/description", ProductDescription);
productsRoutes.post("/add/review", checkAuthMiddware, ProductAddReview);
