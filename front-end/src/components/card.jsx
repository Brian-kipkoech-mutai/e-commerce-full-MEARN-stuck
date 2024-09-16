import { CardFooter } from "@/components/ui/card";
import placeHolderImg from "../assets/images/pexels-mart-production-9558581.jpg";
import { HeartIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function CardContainer({ price, name, status, image, id }) {
  return (
    <div className=" rounded-lg overflow-hidden border shadow-lg w-[45%] max-w-56  group  flex-shrink-0 ">
      <div className="relative" style={{ paddingBottom: "100%" }}>
        <img
          src={image}
          lazy="true"
          alt={"image failed to load"}
          
          className="w-full h-full absolute object-cover"
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
      </div>
      <Link className="block" to={`/product/details?productId=${id}`}>
        <div className="p-2">
          <div className="flex-col gap-3 w-full items-start      rounded-md space-y-2 ">
            <h2 className="font-semibold  truncate">{name}</h2>
            <div className="flex  justify-between w-full">
              <span className="py-1 px-3 rounded-full border  uppercase text-xs font-semibold text-muted-foreground  ">
                {status}
              </span>{" "}
              <span className="text-muted-foreground font-semibold">
                ${price}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardContainer;
