const schemaProp = {
  "Price Range": "price",
  Rating: "averageCount",
  Brands: "brand",
  gender: "gender",
  Categories: "category",
  status: "status",
  size: "size",
};
function generateSearchQuery(query) {
  const mongoQuery = {};
  for (const [key, value] of Object.entries(query)) {
    if (key === "Price Range") {
      const priceQueries = [];
      value.split(",").map((range) => {
        const [list, highest] = range.split("-").map(Number);
        priceQueries.push({
          [schemaProp[key]]: {
            $gte: list || 0,
            $lte: highest || Number.MAX_VALUE,
          },
        });
      });
      mongoQuery["$or"] = priceQueries;
    } else if (key == 'Rating') { 
       mongoQuery[schemaProp[key]]={"$gte":value};
    } else  {
      const queries = value.split(",");
      mongoQuery[schemaProp[key]] = { $in: queries };
    }
  }
  return { mongoQuery };
}

export default generateSearchQuery;
