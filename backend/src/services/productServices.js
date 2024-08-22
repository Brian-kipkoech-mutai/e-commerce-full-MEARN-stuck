import Filter from "../models/filter.js";
import Image from "../models/image.js";
import Product from "../models/product.js";
import generateSearchQuery from "../utils/generateSearchQuery.js";

export const searchServices = async ({ page, Colors, ...query }) => {
  console.log(query);
  const { mongoQuery } = query
    ? generateSearchQuery(query)
    : { mongoQuery: {} };
  const limit = 20;
  console.log(mongoQuery);
  const products = await Product.find(mongoQuery)
    .skip(Number(page) * limit)
    .limit(limit);
  //populate  with images

  const nextPage = Number(page) + 1;
  const populated = await Promise.all(
    products.map(async (prod) => {
      const id = prod._id;
      const { image, alt } = await Image.findOne({
        product: id.toString(),
      }).lean();
      return {
        ...prod.toObject(),
        images: { image, alt },
      };
    })
  );
  return { populated, nextPage };
};

export const getFilterServices = async () => Filter.find().lean();
