import { addProductsToCatService } from "../services/cartServices.js";


export const addProductsToCart = async (req, res, next) => {
  try {
    const data = req.body;
    const userId = req.user.id;
    const result = await addProductsToCatService(data, userId);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
