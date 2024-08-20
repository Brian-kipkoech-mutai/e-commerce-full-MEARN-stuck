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
    const { _id, ...rest } = await getFilterServices();
    const filters = [];
    for (const [key, value] of Object.entries(rest)) {
      filters.push({ [key]: value });
    }
    res.status(200).json(filters);
  } catch (error) {
    next(error);
  }
};
