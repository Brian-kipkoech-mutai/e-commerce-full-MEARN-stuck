import DetailSection from "@/components/DetailSection";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { getProductDescription } from "@/services/productServices";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

function DetailsContainer() {
  const [getSearchParams] = useSearchParams();
  const productId = getSearchParams.get("productId");

  const { isLoading, data, error } = useQuery({
    queryKey: ["productDescription", productId],
    queryFn: () => getProductDescription(productId),
    staleTime: Infinity,
  });
  return isLoading ? (
    <Loading message={"loading product details"} />
  ) : error ? (
    <ErrorComponent message={"failed to load product details"} />
  ) : (
    <DetailSection {...{ data }} />
  );
}

export default DetailsContainer;
