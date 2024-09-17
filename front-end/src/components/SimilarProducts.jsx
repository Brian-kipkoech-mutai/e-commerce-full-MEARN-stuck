import { getSimilarProducts } from "@/services/productServices";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "./Loading";
import ErrorComponent from "./Error";
import CardBox from "./cardsBox";

function SimilarProducts({ productId }) {
  const { error, data, isLoading } = useQuery({
    queryKey: ["similarProducts", productId],
    queryFn: () => getSimilarProducts(productId),
  });
  return isLoading ? (
    <Loading message={"loading simillar products"} />
  ) : error ? (
    <ErrorComponent message={"Error occured when  loading  similar products"} />
  ) : (
    <CardBox {...{ data }} />
  );
}

export default SimilarProducts;
