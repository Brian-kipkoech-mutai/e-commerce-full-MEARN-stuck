import Category from "../models/category.js";
import Product from "../models/product.js";
import Brand from "../models/brand.js";
import Image from "../models/image.js";
import Filter from "../models/filter.js";

const filters = [
  {
    name: "Price Range",
    options: [
      { label: "Under $50", value: "-50" },
      { label: "$50 to $100", value: "50-100" },
      { label: "$100 to $500", value: "100-500" },
      { label: "Above $500", value: "500-" },
    ],
  },
  {
    name: "Rating",
    options: [
      { label: "4 Stars & Up", value: "4" },
      { label: "3 Stars & Up", value: "3" },
      { label: "2 Stars & Up", value: "2" },
      { label: "1 Star & Up", value: "1" },
    ],
  },
];
const getEnums = (schema, path) => {
  const enumPath = schema.path(path);
  return enumPath && enumPath.enumValues
    ? enumPath.enumValues
    : ["Small", "Medium", "Large", "X-large"];
};
const refreshFiltersInDB = async () => {
  try {
    const categories = await Category.find().lean();
    const categoriesOption = [];
    categories.forEach(({ _id: id, name }) => {
      categoriesOption.push({
        label: name,
        value: id.toString(),
      });
    });
    filters.push({ name: "Categories", options: categoriesOption });

    const brandOptions = [];
    const Brands = await Brand.find().lean();
    Brands.forEach(({ _id: id, name }) => {
      brandOptions.push({ label: name, value: id.toString() });
    });
    filters.push({ name: "Brands", options: brandOptions });

    ["status", "size", "gender"].forEach((path) => {
      const enums = getEnums(Product.schema, path).map((el) => ({
        label: el,
        value: el,
      }));
      filters.push({ name: path, options: enums });
    });
    const colors = new Set();
    const imageDocs = await Image.find({}, "image").lean();
    imageDocs.forEach(({ image }) => {
      Object.keys(image).forEach((color) => colors.add(color));
    });
    const colorOptions = [...colors].map((color) => ({
      label: color,
      value: color,
    }));
    filters.push({ name: "Colors", options: colorOptions });
    console.log("filtersssss", filters);
   await Promise.all(
     filters.map((filter) => {

       return Filter.findOneAndUpdate(
         { name: filter.name },
         { $set: filter },
         { new: true, upsert: true }
       );
     })
   );

  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export default refreshFiltersInDB;
