import { getBestSelling } from "@/services/productServices";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import CardBox from "./cardsBox";
import Loading from "./Loading";
function BestSelling(props) {
  const { error, data, isLoading } = useQuery({
    queryFn: getBestSelling,
    queryKey: ["bestSelling"],
    staleTime: Infinity,
  });
  return isLoading ? (
    <Loading message={"loading please wait"} />
  ) : data ? (
    <CardBox {...{ data }} />
  ) : (
    <p> error loading data </p>
  );
}

export default BestSelling;
