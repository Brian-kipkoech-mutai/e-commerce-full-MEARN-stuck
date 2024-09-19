import ErrorHandler from "../ErrorHandler.js";
import Filter from "../models/filter.js";
import Image from "../models/image.js";
import Product from "../models/product.js";
import Review from "../models/review.js";
import generateSearchQuery from "../utils/generateSearchQuery.js";

export const searchServices = async ({ page, Colors, ...query }) => {
  const colors = Colors?.split(",");
  const limit = 20;
  let totalDocuments = null;
  let data = [];

  const { mongoQuery } = query
    ? generateSearchQuery(query)
    : { mongoQuery: {} };

  if (colors) {
    //we are   finding images  with this colors  exist in the query
    const colorQueris = colors.map((color) => ({
      [`image.${color}`]: { $exists: true },
    }));
    const images = await Image.find({ $or: colorQueris }).lean();
    const productData = {};
    //looping through the images , extractig needed data to  productData map
    images.forEach(({ product: productId, image }) => {
      productData[productId] = image[colors.find((color) => color in image)][0];
    });
    //finding total documents count
    totalDocuments = await Product.countDocuments({
      ...mongoQuery,
      _id: { $in: Object.keys(productData) },
    });

    const products = await Product.find({
      ...mongoQuery,
      _id: { $in: Object.keys(productData) },
    })
      .skip(Number(page) * limit)
      .limit(limit)
      .lean();
    data = products.map(({ price, name, status, _id: prodId }) => ({
      price,
      name,
      status,
      image: productData[prodId],
      id: prodId,
    }));
  } else {
    //total documents count
    totalDocuments = await Product.countDocuments(mongoQuery);
    const products = await Product.find(mongoQuery)
      .skip(Number(page) * limit)
      .limit(limit)
      .lean();
    //final data
    data = products.map(({ price, name, status, _id: prodId, avatar }) => ({
      price,
      name,
      status,
      image: avatar,
      id: prodId,
    }));
  }

  const nextPage = Number(page) + 1;
  const totalPages = Math.ceil(totalDocuments / limit);
  const hasNextPage = nextPage < totalPages ? true : false;

  return { data, nextPage: hasNextPage ? nextPage : null };
};

export const getFilterServices = async () => Filter.find().lean();

export const getBestsellingServices = async () => {
  const products = await Product.find({})
    //  .sort({ sold: -1 })
    .select("avatar name price status _id")
    .sort({ createdAt: 1 })
    .limit(4)
    .lean();
  return products;
};

export const getLatestServices = async () => {
  const products = await Product.find({})
    .select("avatar name price status _id")
    .sort({ createdAt: -1 })
    .limit(4)
    .lean();
  return products;
};

export const getFeaturedServices = async (params) => {
  // this is  fake service    becouse  i have not  implemented the featured
  //product logic yet
  const products = await Product.find()
    .select("avatar name price status _id")
    .skip(10)
    .limit(4)
    .lean();
  return products;
};

export const getProductDetails = async (productId) => {
  const product = await Product.findById(productId)
    .populate({
      path: "category",
      select: "name",
    })
    .populate({
      path: "brand",
      select: "name",
    })
    .lean();
  const image = await Image.findOne({ product: productId })
    .select("image")
    .lean();

  if (!product) throw new ErrorHandler("Product not found", 400);
  return { ...product, ...image };
};

export const getSimilarProducts = async (productId) => {
  const product = await Product.findById(productId);
  if (!product) throw new ErrorHandler("Product not found", 400);
  const similarProducts = await Product.find({
    _id: { $ne: productId },
    category: product.category,
  })
    .select("avatar name price status _id")
    .limit(4)
    .lean();
  return similarProducts;
};

export const getProductReviews = async (productId) => {
  const reviews = await Review.find({ productId }).populate("userId").lean();
  const parsedReviews = reviews.map((review) => {
    const {
      rating,
      comment,
      userId: { name, picture },
    } = review;
    const apriviation = name
      .split(" ")
      .map((word) => word[0])
      .join(".");
    return { rating, comment, name, picture, apriviation };
  });

  return parsedReviews;
};

export const getProductDescription = async (productId) => {
  const productDescription = await Product.findById(productId)
    .select("description")
    .lean();

  return productDescription;
};
export const postProductReview = async (review) => {
  await Review.create(review);
  return review;
};
