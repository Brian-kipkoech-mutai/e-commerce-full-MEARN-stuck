import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, Share2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Trasition from "@/components/Trasition";
import classNames from "classnames";
import SimilarProducts from "@/components/SimilarProducts";
import QunatityComponent from "@/components/qunatityComponent";

const ProductDetails = ({
  productId,
  data,
  options,
  setOptions,
  handleAddToCart,
  handleAddtoWishList,
}) => {
  
  const {
    name,
    status,
    price,
    image: imgObject,
    size,
    ratingCount,
    averageCount,
  } = data.data;

  const { activeSize, activeColor, quantity, availabeColors } = options;

  const { search } = useLocation();
  const tapVariance = { scale: 0.9 };
  const quantityButtonVariance = {
    tap: {
      scale: 2,
    },
  };
  const sizeAbbreviations = {
    Medium: "m",
    Small: "s",
    Large: "l",
    "X-large": "xl",
  };

  const isReview = useLocation().pathname.includes("reviews");

  const images = imgObject[activeColor];

  return (
    <div>
      <section className=" flex  flex-col lg:flex-row gap-2 md:gap-10 lg:gap-20 items-center  max-w-screen-lg mx-auto  pb-20">
        <div className="  lg:w-[60%]">
          {images && (
            <Carousel className=" h-full">
              <CarouselContent className=" h-full">
                {images.map((url, i) => (
                  <CarouselItem key={i}>
                    <Card>
                      <CardContent className=" bg-gray-100  h-full ">
                        <img
                          src={url}
                          alt=""
                          className="h-72 lg:h-[80vh]     w-full object-cover"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="top-[90%] left-[72%] text-bold" />
              <CarouselNext className="top-[90%] left-[85%] text-bold" />
            </Carousel>
          )}
        </div>
        {/* down here */}
        <div className="flex  lg:flex-col   flex-wrap lg:flex-nowrap  justify-between  gap-y-6 lg:gap-y-6 md:gap-y-20  gap-x-10 lg:gap-x-0  lg:w-[45%] w-full px-3">
          <div className="flex  w-full justify-between gap-2 items-center  mt-5 ">
            <h1 className="font-semibold  text-2xl lg:text-3xl  ">{name}</h1>
            <motion.div
              className="cursor-pointer"
              whileHover={{
                rotate: [0, 10, -10, 5, -5, 0],
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
            >
              {" "}
              <Share2 />
            </motion.div>
          </div>
          <div className="space-y-4">
            <section className="flex gap-2 bg-gray-100 px-3 py-1 rounded-full w-fit items-center text-sm text-muted-foreground font-semibold tracking-wide">
              <Star className="text-gray-800 h-4 w-4 " />{" "}
              <span>
                {" "}
                {averageCount} - {ratingCount} reviews
              </span>{" "}
              <span>{status}</span>
            </section>
            <section className="font-semibold text-xl">$ {price}</section>
          </div>
          <div className="space-y-4">
            <h2 className="uppercase   text-muted-foreground text-sm font-semibold tracking-wide">
              Available Colors
            </h2>
            <div className="flex gap-4">
              {availabeColors.map((color, i) => (
                <section
                  key={i}
                  onClick={() => setOptions({ ...options, activeColor: color })}
                  className={classNames({
                    "hover:ring-1 rounded-full cursor-pointer": true,
                    "ring-1 rounded-full": activeColor == color,
                  })}
                >
                  <section
                    style={{ background: color }}
                    className={`h-6 w-6 rounded-full m-1 `}
                  ></section>
                </section>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <section>
              <p className="uppercase   text-muted-foreground text-sm font-semibold tracking-wide">
                Select Size
              </p>
            </section>
            <section className="flex gap-3  rounded-sm px-3 py-2 w-fit">
              {size.map((el, i) => (
                <motion.div
                  key={i}
                  className={classNames({
                    "h-10 w-10 grid place-items-center border rounded-md text-xs font-semibold cursor-pointer hover:border-2 hover:border-gray-800": true,
                    "border-gray-600 border-2": activeSize == el,
                  })}
                  whileTap={tapVariance}
                  onClick={() => setOptions({ ...options, activeSize: el })}
                >
                  {sizeAbbreviations[el]?.toUpperCase()}
                </motion.div>
              ))}
            </section>
          </div>
          <div className="space-y-4   text-muted-foreground text-lg">
            <p className="uppercase  text-muted-foreground text-sm font-semibold tracking-wide">
              Quantity
            </p>
            <section>
              <QunatityComponent {...{ setOptions, quantity }} />
            </section>
          </div>
          <div className="w-full md:w-3/4 max-w-lg    flex gap-4 justify-between lg:items-center sm:items-end   ">
            <motion.div className="flex-1 " whileTap={tapVariance}>
              <Button className="w-full py-6" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </motion.div>

            <motion.button
              onClick={handleAddtoWishList}
              className="grid place-items-center p-3 border rounded group cursor-pointer "
              whileTap={tapVariance}
            >
              <Heart className="group-hover:fill-gray-800" />
            </motion.button>
          </div>
          <p className="uppercase  text-muted-foreground font-semibold  text-sm tracking-wider">
            — Free shipping on orders $100+
          </p>
        </div>
      </section>
      <section className=" px-3 max-w-screen-lg mx-auto">
        <section className="flex flex-col  md:flex-row ">
          <section className=" w-full md:w-[30%] flex flex-row  md:flex-col  justify-between md:justify-center gap-4">
            <Link
              to={{
                pathname: "details",
                search,
              }}
              className="block"
            >
              <div
                className={classNames({
                  "flex gap-3 items-center rounded-md cursor-pointer px-6 py-2": true,
                  " bg-gray-100  ": !isReview,
                })}
              >
                <DotsHorizontalIcon />
                <p className="font-semibold">Details</p>
              </div>
            </Link>
            <Link
              to={{
                pathname: "reviews",
                search,
              }}
              className="block"
            >
              <div
                className={classNames({
                  "flex gap-3 items-center active:bg-gray-100 px-6 py-2 rounded-md cursor-pointer text-muted-foreground": true,
                  " bg-gray-100  ": isReview,
                })}
              >
                <Star className="h-4 w-4" />
                <p className="font-semibold  ">Reviews</p>
              </div>
            </Link>
          </section>
          <Outlet />
        </section>
      </section>
      <motion.section
        className="w-fit mx-auto my-4 mb-20"
        whileTap={tapVariance}
      >
        {" "}
        <Button className=" py-6 px-8 bg-transparent text-gray-800  shadow-lg border hover:bg-gray-100 ">
          Load More Reviews
        </Button>
      </motion.section>
      <section
        className="max-w-screen-xl mx-auto 
      "
      >
        <section>
          <section>
            <div className="space-y-4 max-w-screen-lg mx-auto px-3">
              <h2 className="font-bold text-2xl">You might also like</h2>
              <p className="text-xs tracking-wide text-muted-foreground">
                SIMILAR PRODUCTS
              </p>
            </div>
            <SimilarProducts productId={productId} />
          </section>
        </section>
      </section>
      <Trasition />
    </div>
  );
};
export default ProductDetails;
