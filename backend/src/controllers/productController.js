import {
  getBestsellingServices,
  getFeaturedServices,
  getFilterServices,
  getLatestServices,
  searchServices,
} from "../services/productServices.js";


//search controller
export const search = async (req, res, next) => {
  try {
    const { query } = req;
    const { data: products, nextPage } = await searchServices(query);
    return res.status(200).json({ products, nextPage });
  } catch (error) {
    next(error);
  }
};
//filter controller
export const filters = async (req, res, next) => {
  try {
    const filters = await getFilterServices();
    const resFilters = filters.map(({ _id, __v, ...rest }) => ({ ...rest }));
    res.status(200).json(resFilters);
  } catch (error) {
    next(error);
  }
};
//bestselling controller
export const bestselling = async (req, res, next) => {
  try {
    const products = await getBestsellingServices();
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
//latest controller
export const latest = async (req, res, next) => {
  try {
    const products = await getLatestServices();
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
//featured controller
export const featured = async (req, res, next) => {
  try {
    const products = await getFeaturedServices();
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
