import express from "express";
import connectDB from "./src/config/database.js";
import authRoutes from "./src/routes/authRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

await connectDB();

app.use("/api/auth", authRoutes);

app.use((error, req, res, next) => {
  console.error(error.message);
  console.error(error.stack);
  return res.status(error.statusCode || 500).json({ message: error.message });
});

export default app;
