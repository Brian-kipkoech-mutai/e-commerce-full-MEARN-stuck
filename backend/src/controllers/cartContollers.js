import { addProductsToCatService } from "../services/cartServices.js";

export const addProductsToCart = async (req, res, next) => {
  console.log('hellllllllllo');
  try {
    const userId = req.user.id;
    const data = { ...req.body, userId };
    console.log('data',data);

    const response = await addProductsToCatService(data);
    console.log(response);  
    return res.status(200).json({ message: response });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
