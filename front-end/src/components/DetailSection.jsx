import React from "react";

function DetailSection({ data:{data:{description}} }) {
  // console.log("hello", data);
  return (
    <section className=" w-full md:w-[70%]  md:pl-10 space-y-4 pb-20">
      <div>
        <h2 className="font-semibold text-2xl">Details</h2>
      </div>
      <div className="space-y-10 ">
        <div>
          <p className=" text-sm leading-relaxed tracking-wide text-muted-foreground">
            {description}
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
