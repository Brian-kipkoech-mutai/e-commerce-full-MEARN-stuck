import { GOOGLE_CLIENT_ID } from "../config/env.js";
import { client } from "../config/google.js";

const getGoogledata = async (idToken) => {

  const ticket = await client.verifyIdToken({
    idToken,
    audience: GOOGLE_CLIENT_ID,
  });
  const { sub: googleId, email, name, picture } = ticket.getPayload();
  return { googleId, email, name, picture };
};
export default getGoogledata;
  