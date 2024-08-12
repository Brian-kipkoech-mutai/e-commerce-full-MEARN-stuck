import dotenv from "dotenv";
dotenv.config();

export const MONGO_URI = process.env.MONGO_URI;
export const PORT = process.env.PORT;
export const EMAIL_PASS = process.env.EMAIL_PASS;
export const USER_EMAIL = process.env.EMAIL_PASS;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export const NODE_ENV = process.env.NODE_ENV;
export const
    GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
