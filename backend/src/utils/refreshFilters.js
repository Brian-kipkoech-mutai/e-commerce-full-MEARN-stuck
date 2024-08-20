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
  return enumPath && enumPath.enumValues ? enumPath.enumValues : ["Small", "Medium", "Large", "X-large"];
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
    const imageDocs = await Image.find({}, "image").lean();
    imageDocs.forEach(({ image }) => {
        
      Object.keys(image).forEach((color) => colors.add(color));
    });

    filters.colors = [...colors];
    console.log('filtersssss', filters);
    await Filter.findOneAndUpdate(
     {},
     { $set: filters },
     { new: true, upsert: true }
   );
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export default refreshFiltersInDB;
