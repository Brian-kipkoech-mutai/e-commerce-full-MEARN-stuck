import express from "express";
import connectDB from "./src/config/database.js";
import authRoutes from "./src/routes/authRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { productsRoutes } from "./src/routes/productRoutes.js";
import { adminRoutes } from "./src/routes/adminRoutes.js";
 

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.resolve(__dirname, "public")));
app.use((req, res, next) => {
  console.log(req.method, req.path, req.hostname);
  next();
});
 

app.use(
  cors({
    origin: ["http://localhost:5173", "http://192.168.1.101:5001"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
 
connectDB();
//serve  static  content
app.use(express.static(path.join(__dirname, "public")));

//api routes 
app.use("/api/auth", authRoutes);
app.use('/api/products/', productsRoutes);
app.use('/api/admin',adminRoutes)

// serve  index .html for any request
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

//error handling middllware
app.use((error, req, res, next) => {
  console.error(error.message);
  console.error(error.stack);
  return res.status(error.statusCode || 500).json({ message: error.message });
});

export default app;
