import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getLatest } from "@/services/productServices";
import CardBox from "./cardsBox";
import Loading from "./Loading";

 
function LatestProducts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["latest"],
    queryFn: getLatest,
    staleTime: Infinity
  });
  return isLoading ? (
    <Loading message={"loading please wait "} />
  ) : data ? (
    <CardBox {...{ data, isLoading, error }} />
  ) : (
    <p> error </p>
  );
}

export default LatestProducts;
