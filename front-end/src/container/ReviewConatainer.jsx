import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import ReviewSection from "@/components/ReviewSection";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductReviews } from "@/services/productServices";
import { useSearchParams } from "react-router-dom";

function ReviewConatainer(props) {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("productId");
  const { data, error, isLoading } = useQuery({
    queryKey: ["reviews", productId],
    queryFn: () => getProductReviews(productId),
    staleTime: Infinity,
  });
  return isLoading ? (
    <Loading message={"loading product reviews"} />
  ) : error ? (
    <ErrorComponent message={"Error occured when loading products reviews"} />
  ) : (
    <ReviewSection {...{ data ,productId }} />
  );
}

export default ReviewConatainer;
