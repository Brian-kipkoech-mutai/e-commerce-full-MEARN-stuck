import Filter from "../models/filter.js";
import Image from "../models/image.js";
import Product from "../models/product.js";
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
    .select("avatar name price status id")
    .limit(4)
    .lean();
  return products;
};

export const getLatestServices = async () => {
  const products = await Product.find({})
    .select("avatar name price status id")
    .sort({ createdAt: -1 })
    .limit(4)
    .lean();
  return products;
};
