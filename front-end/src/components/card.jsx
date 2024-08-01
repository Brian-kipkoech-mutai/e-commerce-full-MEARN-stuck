import { CardFooter } from "@/components/ui/card";
import placeHolderImg from "../assets/images/pexels-mart-production-9558581.jpg";
import { HeartIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function CardContainer(props) {
  return (
     
    <div className=" border shadow-lg  w-[45%]  max-w-60 rounded-md flex-shrink-0 cursor-pointer group ">
      <Link to={'/product'} > 
      <section className=" relative    rounded-t-md overflow-hidden  ">
        <img
          src={placeHolderImg}
          alt="img of a fahion model"
          srcset=""
          className=" w-full h-full  object-cover max-h-48 lg:max-h-64"
        />
        <section className=" absolute  opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 top-0 w-full h-full  flex  flex-col justify-between  bg-gray-50 bg-opacity-60 ">
          <section className="self-end m-3 text-muted-foreground">
            {" "}
            <HeartIcon className=" h-5 w-5" />
          </section>
          <section>
            <Button className="w-full py-6 rounded-t-none rounded-b-sm">
              Add to Cart{" "}
              <span className="ml-3">
                <ShoppingCart />
              </span>
            </Button>
          </section>
        </section>
      </section>
      <CardFooter className="flex-col gap-3 w-full items-start p-2 mt-2 lg:mt-4   rounded-md">
        <h2 className="font-semibold">Classic Monochrome Tees</h2>
        <div className="flex gap-4 w-full">
          <span className="py-1 px-3 rounded-full border  uppercase text-xs font-semibold text-muted-foreground">
            in stock
          </span>{" "}
          <span className="text-muted-foreground font-semibold">$35.00</span>
        </div>
        </CardFooter>
        </Link> 
    </div>
  );
}

export default CardContainer;
