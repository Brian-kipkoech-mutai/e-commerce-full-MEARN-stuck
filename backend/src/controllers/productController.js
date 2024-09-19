import ErrorHandler from "../ErrorHandler.js";
import {
  getBestsellingServices,
  getFeaturedServices,
  getFilterServices,
  getLatestServices,
  getProductDescription,
  getProductDetails,
  getProductReviews,
  getSimilarProducts,
  postProductReview,
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

export const ProductDetails = async (req, res, next) => {
  try {
    const { productId } = req.query;

    const product = await getProductDetails(productId);
    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
export const similarProducts = async (req, res, next) => {
  try {
    const { productId } = req.query;
    const similarProducts = await getSimilarProducts(productId);
    return res.status(200).json(similarProducts);
  } catch (error) {
    next(error);
  }
};

export const ProductReviews = async (req, res, next) => {
  try {
    const { productId } = req.query;

    const reviews = await getProductReviews(productId);
    if (!reviews.length) {
      throw new ErrorHandler("no reviews found for this product", 204);
    }
    return res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};

export const ProductDescription = async (req, res, next) => {
  try {
    const { productId } = req.query;

    const description = await getProductDescription(productId);
    if (!description) {
      throw new ErrorHandler("no description found for this product", 204);
    }
    return res.status(200).json(description);
  } catch (error) {
    next(error);
  }
};

export const ProductAddReview = async (req, res, next) => {
  try {
    const { productId } = req.query;
    const review = req.body;
    const userId = req.user.id;

    if (!review.rating || !review.comment) {
      throw new ErrorHandler("please provide rating and comment", 400);
    }

    const newReview = await postProductReview({ ...review, userId, productId });
    return res.status(201).json(newReview);
  } catch (error) {
    next(error);
  }
};
