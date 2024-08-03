import React from "react";
import Trasition from "./Trasition";

function DetailSection(props) {
  return (
    <section className=" w-full md:w-[70%]  md:pl-10 space-y-4 pb-20">
      <div>
        <h2 className="font-semibold text-2xl">Details</h2>
      </div>
      <div className="space-y-10 ">
        <div>
          <p className=" text-sm leading-relaxed tracking-wide text-muted-foreground">
            Elevate your everyday style with our Men\'s Black T-Shirts, the
            ultimate wardrobe essential for modern men. Crafted with meticulous
            attention to detail and designed for comfort, these versatile black
            tees are a must-have addition to your collection. The classic black
            color never goes out of style. Whether you're dressing up for a
            special occasion or keeping it casual, these black t-shirts are the
            perfect choice, effortlessly complementing any outfit.
          </p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground  space-y-3">
            <li>Tailored Fit</li>
            <li>Premium Quality</li>
            <li>Versatile Wardrobe Staple</li>
            <li>Available in Various Sizes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DetailSection;
