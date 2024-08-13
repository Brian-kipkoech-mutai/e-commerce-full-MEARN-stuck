import React from "react";
import CardContainer from "./card";

function CardBox() {
  return (
    <div className=" max-w-screen-lg  mx-auto  py-20 ">
      <div className=" flex justify-center  sm:gap-6 flex-wrap   gap-2    ">
        {[...Array(4)].map((el, i) => (
          <CardContainer key={i} />
        ))}
      </div>
    </div>
  );
}

export default CardBox;
