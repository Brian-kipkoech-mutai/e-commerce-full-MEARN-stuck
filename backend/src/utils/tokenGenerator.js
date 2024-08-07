import crypto from "crypto";

const generateRandomToken = () => crypto.randomBytes(32).toString("hex");
export default generateRandomToken;
