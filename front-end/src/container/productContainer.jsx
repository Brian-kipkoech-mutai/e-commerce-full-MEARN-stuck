import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import ProductDetails from "@/pages/ProductDetails";
import { getProductDetails } from "@/services/productServices";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSearchParams } from "react-router-dom";

function ProductContainer(props) {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("productId");

  // fetch product details using productId
  const { data, error, isLoading } = useQuery({
    queryKey: ["productDetails", productId],
    queryFn: () => getProductDetails(productId),
  });

  return isLoading ? (
    <Loading message={"loading product details..."} />
  ) : error ? (
    <ErrorComponent message={"error loading product details"} />
  ) : (
    <ProductDetails
      {...{
        productId,
        data,
      }}
    />
  );
}

export default ProductContainer;
