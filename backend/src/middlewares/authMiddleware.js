import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config/env.js";

export const checkAuthMiddware = async (req, res, next) => {
  try {
    const { auth_token } = req.cookies;
    if (!auth_token) {
      return res.status(401).json({
        message: "Unauthorized. user dose not have an account",
      });
    }
    const decoded = jwt.verify(auth_token, JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Unauthorized. Token has expired.",
      });
    }
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        message: "Unauthorized. Invalid token.",
      });
    }

    next(error);
  }
};
