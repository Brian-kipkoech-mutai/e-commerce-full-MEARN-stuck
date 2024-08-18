const advacedFilter = ({ name, updatedFilters, updatedValues, value }) => {
  if (["Price Range", "Rating"].some((Categorie) => name === Categorie)) {
    //handling  edge cases  for   price rating selection
    if (name == "Price Range") {
      if (["500-", "-50"].some((v) => v == value)) {
        delete updatedFilters[name];
        ["50-100", "100-500", "500-", "-50"].forEach((range) => {
          if (range in updatedValues) {
            delete updatedValues[range];
          }
        });
      } else if (updatedFilters[name]) {
        //we are   removing this  targets  if a  user selects a  rage  that confilts with the targets
        const target = ["500-", "-50"];
        updatedFilters[name] = updatedFilters[name].filter(
          (range) => !target.includes(range)
        );

        if (!updatedFilters[name].length) delete updatedFilters[name];
        target.forEach((range) => {
          if (range in updatedValues) delete updatedValues[range];
        });
      }
    }
    //handling edge cases for  star rating
    //only  one rating can be selected at a time
    if (name === "Rating") {
      delete updatedFilters[name];
      ["3", "4", "1", "2"].forEach((rating) => {
        if (rating in updatedValues) delete updatedValues[rating];
      });
    }
  }
};
export default advacedFilter;
