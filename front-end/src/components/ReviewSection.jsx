import { motion } from "framer-motion";
import React from "react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Review from "./Review";
import WriteReview from "./writeReview";

function ReviewSection({ data: { data } }) {
 
  const tapVariance = { scale: 0.9 };
  return (
    <section className=" w-full md:w-[70%]  md:pl-10 space-y-4 pb-20">
      <div>
        {/* <h2 className="font-semibold text-2xl">Details</h2> */}
        <div className="mt-6">
          <h2 className="font-semibold text-2xl">Reviews</h2>
          <div className="flex  items-baseline">
            <div className="  font-bold text-xl">4.2</div>
            <hr className="w-4 ml-2  block" />{" "}
            <div className=" block text-muted-foreground text-xs  ml-1 tracking-wide ">
              54 Reviews
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-10 ">
        <div className="space-y-4">
          <motion.section className="w-fit" whileTap={tapVariance}>
            {/* <Button className=" py-5 px-6   shadow-sm border">
              Write a review
            </Button> */}
            <WriteReview/>
          </motion.section>
          <section className="space-y-4">
            <section className="flex justify-end">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Latest</SelectItem>
                  <SelectItem value="dark">Stars</SelectItem>
                  <SelectItem value="system">Arliest</SelectItem>
                </SelectContent>
              </Select>
            </section>
            <hr className="w-full" />
            <section className="flex flex-col gap-6">
              {data.map((review, i) => (
                <Review key={i} {...{ review }} />
              ))}
            </section>
          </section>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
