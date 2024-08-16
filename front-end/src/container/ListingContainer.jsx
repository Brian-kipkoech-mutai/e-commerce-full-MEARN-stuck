import Listing from "@/pages/Listing";
import { searchProducts } from "@/services/productServices";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSearchParams } from "react-router-dom";

function ListingContainer() {
  const [filters, setFilters] = useState({});
  const [selectedValues, setSelectedValues] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const { ref, inView } = useInView();
  const memoisedFilter = useMemo(()=>filters, [filters]);

  const { status, data, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["search", memoisedFilter],
    queryFn: ({ pageParam }) =>
      searchProducts(pageParam, searchParams.toString()),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCusor,
  });
  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

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

  return (
    <Listing
      {...{
        handleSelect,
        selectedValues,
        ref,
        data,
        isFetchingNextPage,
        status,
      }}
    />
  );
}

export default ListingContainer;
