import { model, Schema } from "mongoose";

const filterSchema = new Schema({
  priceRange: {
    type: [String],
    enum: ["-50,", "50-100", "100-500", "500-"],
    required: true,
  },
  ratings: { type: [Number], enum: [1, 2, 3, 4, 5] },
  categories: {
    type: [Map],
    validate: {
      validator: (categories) => categories.length > 0,
      message: "there must be atleast one category",
    },
  },
  brands: {
    type: [Map],
    validate: {
      validator: (brands) => brands.length > 0,
      message: "there must be atleast one brand",
    },
  },
  status: {
    type: [String],
    validate: {
      validator: (status) => status.length > 0,
      message: "there must be atleast one status",
    },
  },
  size: {
    type: [String],
    validate: {
      validator: (sizes) => sizes.length > 0,
      message: "there must be atleast one size selected",
    },
  },
  gender: {
    type: [String],
    validate: {
      validator: (genders) => genders.length > 0,
      message: "there must be atleast one gender selected",
    },
  },
  colors: {
    type: [String],
    validate: {
      validator: (colors) => colors.length > 0,
      message: "there must be atleast one color selected",
    },
  },
});

const Filter = model("Filter", filterSchema);

export default Filter;