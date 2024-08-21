import {
  getFilterServices,
  searchServices,
} from "../services/productServices.js";

export const search = async (req, res, next) => {
  try {
    const { query } = req;
    await searchServices({ query });
    return res.status(200).json(req.query);
  } catch (error) {
    next(error);
  }
};

export const filters = async (req, res, next) => {
  try {
    const filters= await getFilterServices();
    const resFilters = filters.map(({ _id,__v, ...rest }) => ({ ...rest }));
    res.status(200).json(resFilters);
  } catch (error) {
    next(error);
  }
};
