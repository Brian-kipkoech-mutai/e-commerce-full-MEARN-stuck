import Category from "../models/category.js";
import Product from "../models/product.js";
import Brand from "../models/brand.js";
import Image from "../models/image.js";
import Filter from "../models/filter.js";

const filters = {
  priceRange: ["-50,", "50-100", "100-500", "500-"],
  ratings: [1, 2, 3, 4, 5],
};
const getEnums = (schema, path) => {
  const enumPath = schema.path(path);
  return enumPath && enumPath.enumValues ? enumPath.enumValues : [];
};
const refreshFiltersInDB = async () => {
  try {
    const categories = await Category.find().lean();
    filters.categories = categories.map(({ _id: id, name }) => ({
      name,
      id,
    }));

    const Brands = await Brand.find().lean();
    filters.brands = Brands.map(({ _id: id, name }) => ({
      name,
      id,
    }));

    ["status", "size", "gender"].forEach((path) => {
      filters[path] = getEnums(Product.schema, path);
    });
    const colors = new Set();
    const imageDocs = await Image.find({}, "image");
    imageDocs.forEach(({ imageData }) => {
      Object.keys(imageData).forEach((color) => colors.add(color));
    });

    filters.colors = [...colors];
    const storedFilters = await Filter.findOne();
    if (!storedFilters) {
      await Filter.create(filters);
    } else {
      for (const [key, _] of Object.entries(storedFilters)) {
        storedFilters[key] = filters[key];
      }
      await storedFilters.save();
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export default refreshFiltersInDB;
