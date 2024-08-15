import Listing from "@/pages/Listing";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function ListingContainer() {
  const [filters, setFilters] = useState({});
  const [selectedValues, setSelectedValues] = useState({});
  const [_, setSearchParams] = useSearchParams();

  const handleSelect = ({ name, value }) => {
    const updatedFilters = { ...filters };
    const updatedValues = { ...selectedValues };

    if (value in updatedValues) {
      delete updatedValues[value];

      updatedFilters[name] = updatedFilters[name].filter((v) => v !== value);

      if (updatedFilters[name].length === 0) delete updatedFilters[name];
    } else {
      updatedValues[value] = value;

      if (name in updatedFilters) updatedFilters[name].push(value);
      else updatedFilters[name] = [value];
    }

    setSelectedValues(updatedValues);
    setFilters(updatedFilters);

    const searchQueries = {};
    for (const [key, values] of Object.entries(updatedFilters))
      searchQueries[key] = values.join(",");

    setSearchParams(searchQueries);
  };
    

  return <Listing {...{ handleSelect, selectedValues }} />;
}

export default ListingContainer;
