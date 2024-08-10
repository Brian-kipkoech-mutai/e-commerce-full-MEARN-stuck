import express from "express";
import connectDB from "./src/config/database.js";
import authRoutes from "./src/routes/authRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.resolve(__dirname, "public")));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.path, req.cookies.auth_token);
  next();
});

 connectDB();
//serve  static  content
app.use(express.static(path.join(__dirname, "public")));

//api routes 
app.use("/api/auth", authRoutes);

// serve  index .html for any request
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

//error hadnling middllware
app.use((error, req, res, next) => {
  console.error(error.message);
  console.error(error.stack);
  return res.status(error.statusCode || 500).json({ message: error.message });
});

export default app;
