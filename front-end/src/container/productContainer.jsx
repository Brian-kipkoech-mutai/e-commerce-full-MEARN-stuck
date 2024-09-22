import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import ProductDetails from "@/pages/ProductDetails";
import { getProductDetails, postcatData } from "@/services/productServices";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

function ProductContainer(props) {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("productId");
  const [options, setOptions] = useState({
    activeSize: null,
    activeColor: null,
    quantity: 1,
    availabeColors: null,
  });

  // fetch product details using productId
  const { data, error, isLoading } = useQuery({
    queryKey: ["productDetails", productId],
    queryFn: () => getProductDetails(productId),
  });

  //toast hook for  showing  hook
  const { toast } = useToast();

  const availabeColors = useMemo(
    () => (data ? Object.keys(data.data.image) : []),
    [data]
  );

  useEffect(() => {
    if (availabeColors.length) {
      setOptions({
        ...options,
        activeColor: availabeColors[0],
        availabeColors,
      });
    }
  }, [availabeColors, data]);

  //post prod new  cat data  to  the server
  const {
    mutate: postCartData,
    isSuccess,
    isPending,
    isIdle,
  } = useMutation({
    mutationFn: (productData) => postcatData(productData),
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: `${data.data.name} added to your cart successfully `,
        variant: "success",
        action: (
          <ToastAction altText="Try again" className="hover:bg-gray-600">
            undo
          </ToastAction>
        ),
      });
    },
    onError: (err) => {
      toast({
        title: "Error",
        description: (
          <h1>
            There was a problem adding {data.data.name} to your cart. Please try
            again later.
          </h1>
        ),
        variant: "destructive",
        action: (
          <ToastAction altText="Try again">undo</ToastAction>
        ),
      });
    },
  });

  const handleAddToCart = () => {
    //check if the  the data is invalid
    
    //  send  request to the server
    const data = {
      ...options,
      productId,
    };
    postCartData(data);
  };
  const handleAddtoWishList = () => {
    const message = `${data.data.name} added to wishList successfully `;
    toast({
      title: "Success",
      description: message,
      variant: "success",
      action: (
        <ToastAction altText="Try again" className="hover:bg-gray-600">
          undo
        </ToastAction>
      ),
    });
  };
  return isLoading ? (
    <Loading message={"loading product details..."} />
  ) : error ? (
    <ErrorComponent message={"error loading product details"} />
  ) : (
    options.availabeColors?.length && (
      <ProductDetails
        {...{
          productId,
          data,
          options,
          setOptions,
          handleAddToCart,
          handleAddtoWishList,
        }}
      />
    )
  );
}

export default ProductContainer;
