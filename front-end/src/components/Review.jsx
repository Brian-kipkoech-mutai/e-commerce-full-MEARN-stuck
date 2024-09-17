import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import classNames from "classnames";
import { Star } from "lucide-react";

function Review({ review:{name, rating, comment, apriviation, picture} }) {
      
  return (
    <div className="flex flex-col gap-8 justify-between md:flex-row">
      <section>
        <Avatar className="p-2 bg-violet-50  text-violet-300 font-semibold">
          <AvatarImage src={picture} />
          <AvatarFallback className="bg-inherit">{apriviation}</AvatarFallback>
        </Avatar>
      </section>
      <section className="space-y-1 flex-1">
        <h2 className="font-semibold">{name}</h2>
        <p className="text-xs uppercase text-muted-foreground"> 1 week ago</p>
        <p className="text-sm text-muted-foreground pt-2">{comment}</p>
      </section>
      <section className="flex gap-2">
        {[...Array(Number(5))].map((el, i) => (
          <Star
            key={i}
            className={classNames({
              "w-4 h-4": true,
              "fill-gray-700": i < rating,
            })}
          />
        ))}
      </section>
    </div>
  );
}

export default Review;
