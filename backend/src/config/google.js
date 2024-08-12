import { OAuth2Client } from "google-auth-library";
import { GOOGLE_CLIENT_ID } from "./env.js";


export const client = new OAuth2Client(GOOGLE_CLIENT_ID);
