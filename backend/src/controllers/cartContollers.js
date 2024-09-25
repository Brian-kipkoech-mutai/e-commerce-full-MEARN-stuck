import { addProductsToCatService } from "../services/cartServices.js";

export const addProductsToCart = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const data = { ...req.body, userId };

    const response = await addProductsToCatService(data);
    return res.status(200).json({ message: response });
  } catch (error) {
    next(error);
  }
};
