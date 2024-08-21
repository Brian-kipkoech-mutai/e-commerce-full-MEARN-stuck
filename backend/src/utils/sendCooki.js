import { JWT_SECRET_KEY, NODE_ENV } from "../config/env.js";
import jwt from "jsonwebtoken";

const sendCookie = (res, id) => {
  const token = jwt.sign({ id }, JWT_SECRET_KEY, {
    expiresIn: "1w",
  });

  const ifproduction = NODE_ENV === "production";
  res
    .cookie("auth_token", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      httpOnly: true,
      secure: false,
      sameSite: ifproduction ? "Strict" : "Lax",
    })
    .status(200)
    .json({ message: "Login successful" });
};

export default sendCookie;
