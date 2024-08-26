import Listing from "@/pages/Listing";
import { getFilters, searchProducts } from "@/services/productServices";
import advacedFilter from "@/utils/advacedFilter";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import React, { useEffect, useMemo, useState } from "react";
import { InView, useInView } from "react-intersection-observer";
import { useSearchParams } from "react-router-dom";

function ListingContainer() {
  const [filters, setFilters] = useState({});
  const [selectedValues, setSelectedValues] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const { ref, inView } = useInView();
  const memoisedFilter = useMemo(() => filters, [filters]);

  const { status, data, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["search", memoisedFilter],
    queryFn: ({ pageParam }) =>
      searchProducts(pageParam, searchParams.toString()),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.data.nextPage,
  });
  // the   filtersData  is from the DB  not  to be  confused with  filters   in frontend ;
  const {
    data: filtersData,
    error: filtersError,
    isFetching: isFetchingFilters,
  } = useQuery({
    queryKey: ["filters"],
    queryFn: getFilters,
    staleTime: Infinity,
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
      //this  is util function to hadle the edge case  for  star-rating &&  price-rating
      advacedFilter({ name, updatedFilters, updatedValues, value });
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
        data,
        isFetchingNextPage,
        status,
        filtersData,
        filtersError,
        isFetchingFilters,
         
      }}
      ref={ref}
    />
  );
}

export default ListingContainer;
