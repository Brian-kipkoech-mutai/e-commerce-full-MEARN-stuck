import express from "express";
import connectDB from "./src/config/database";

const app = express();
connectDB();

app.use(express.json());



export default app;
