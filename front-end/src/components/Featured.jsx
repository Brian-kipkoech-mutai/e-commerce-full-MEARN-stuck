import React from "react";
import CardBox from "./cardsBox";
import { useQuery } from "@tanstack/react-query";
import { getFeatured } from "@/services/productServices";
import Loading from "./Loading";

function Featured(props) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["featured"],
    staleTime: Infinity,
    queryFn: getFeatured,
    gcTime: Infinity,
  });
  return isLoading ? (
    <Loading message={"loading please wait"} />
  ) : data ? (
    <CardBox {...{ data }} />
  ) : (
    <p>errror</p>
  );
}

export default Featured;
