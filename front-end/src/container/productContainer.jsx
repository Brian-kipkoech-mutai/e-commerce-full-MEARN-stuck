import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import ProductDetails from "@/pages/ProductDetails";
import { postcartData } from "@/services/ cartServices";
import { getProductDetails } from "@/services/productServices";
import { addToWishList } from "@/services/whisListServices";
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
  const { mutate: postCartData } = useMutation({
    mutationFn: (productData) => postcartData(productData),
    mutationKey: ["addTocat"],
    onSuccess: ({ data: { message } }) => {
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
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: (
          <h1>
            description: <h1>{error.message}</h1>,
          </h1>
        ),
        variant: "destructive",
        action: <ToastAction altText="Try again">undo</ToastAction>,
      });
    },
  });
  //post  new wishlist data  to the  serever;

  const { mutate: postWhisListData } = useMutation({
    mutationFn: (data) => addToWishList(data),
    mutationKey: ["addToWhislist"],
    onSuccess: ({ data: { message } }) => {
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
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: <h1>{error.message}</h1>,
        variant: "destructive",
        action: <ToastAction altText="Try again">undo</ToastAction>,
      });
    },
  });

  const handleAddToCart = () => {
    //check if the  the data is invalid
    //we  are  not  cheking  other  props  sine  they have   default  except fott  size
    //  which    is null by default
    if (!options.activeSize) {
      toast({
        title: "Error",
        description: "Please select a size and ",
        variant: "destructive",
      });
      return;
    }

    //  prepare data for the post request to the server
    const { name, price } = data.data;
    const { activeColor: color, activeSize: size, quantity } = options;
    const cartData = {
      color,
      size,
      quantity,
      name,
      price,
      productId,
    };
    //send  data to the server
    postCartData(cartData);
  };
  //  send product to whisList  add endpoint
  const handleAddtoWishList = () => {
    const { name } = data.data;
    postWhisListData({ name, productId });
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
