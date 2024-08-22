import React, { forwardRef } from "react";
import CardContainer from "./card";
import Loading from "./Loading";
import { ListEnd } from "lucide-react";

const CardBox = forwardRef(({ data: { pages }, isFetchingNextPage }, ref) => {
  return (
    <div className="max-w-screen-lg mx-auto py-20">
      <div className="flex justify-center sm:gap-6 flex-wrap gap-2">
        {pages.map(({ data: { products } }) => {
          return products.map(
            ({ averageCount, images, name, price, status, _id: id }) => (
              <CardContainer
                key={id}
                averageCount={averageCount}
                images={images}
                name={name}
                price={price}
                status={status}
                id={id}
              />
            )
          );
        })}
      </div>
      <div ref={ref}>
        {isFetchingNextPage ? (
          <Loading message={"fetching next page"} />
        ) : (
          <p className=" flex gap-2 justify-center uppercase py-4">End of products <ListEnd/></p>
        )}{" "}
      </div>
    </div>
  );
});

export default CardBox;
