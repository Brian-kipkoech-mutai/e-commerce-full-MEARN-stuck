import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import classNames from "classnames";
import { Star } from "lucide-react";

function Review(props) {
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <section>
        <Avatar className="p-2 bg-violet-50 text- text-violet-300 font-semibold">
          <AvatarImage src="" />
          <AvatarFallback className="bg-inherit">B.K</AvatarFallback>
        </Avatar>
      </section>
      <section className="space-y-1">
        <h2 className="font-semibold">Brian Kipkoech</h2>
        <p className="text-xs uppercase text-muted-foreground"> 1 week ago</p>
        <p className="text-sm text-muted-foreground pt-2">
          this company always gose above and beyond to satify their customers
        </p>
      </section>
      <section className="flex gap-2">
        {[...Array(5)].map((el, i) => (
          <Star
            key={i}
            className={classNames({
              "w-4 h-4": true,
              "fill-gray-700": i < 4,
            })}
          />
        ))}
      </section>
    </div>
  );
}

export default Review;
