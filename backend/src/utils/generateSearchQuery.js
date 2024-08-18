function generateSearchQuery(query) {
  const mongoQuery = {};
  for (const [key, value] of Object.entries(query)) {
    if (key === "Price Range") {
      const priceQueries = [];
      value.split(",").map((range) => {
        const [list, highest] = range.split("-").map(Number);
        priceQueries.push({
          [key]: { $gte: list || 0, $lte: highest || Number.MAX_VALUE },
        });
      });
      mongoQuery["$or"] = priceQueries;
    } else {
      const queries = value.split(",");
      mongoQuery[key] = { $in: queries };
    }
  }
  return{mongoQuery};
}

export default generateSearchQuery;
