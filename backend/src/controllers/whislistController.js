import { addTowWhislistService } from "../services/whislistservices.js";

export const addToWishList = async (req, res, next) => {
  try {
    const userId = req.user.id;
      const data = req.body;
      
    const message = await addTowWhislistService({ ...data,userId });
    return res.status(200).json({ message });
  } catch (error) {
    next(error);
  }
};
