import Filter from "../models/filter.js";
import generateSearchQuery from "../utils/generateSearchQuery.js";

export const searchServices = async ({ query }) => {
  const { mongoQuery } = generateSearchQuery(query);
  console.log(mongoQuery);
};

export const getFilterServices = async () => Filter.find().lean();
