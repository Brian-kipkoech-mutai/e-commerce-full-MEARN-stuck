import { searchServices } from "../services/productServices.js";

export const search = async (req, res, next) => {
    try {
      const {query}=req
         await searchServices({query})
      return res.status(200).json(req.query)
  } catch (error) {
    next(error);
  }
};
