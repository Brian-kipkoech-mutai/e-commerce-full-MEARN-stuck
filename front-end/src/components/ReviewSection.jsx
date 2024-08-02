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


function ReviewSection(props) {
  const tapVariance = { scale: 0.9 };
  return (
    <div className="space-y-4">
      <motion.section className="w-fit" whileTap={tapVariance}>
        <Button className=" py-5 px-6   shadow-sm border">
          Write a review
        </Button>
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
          {[...Array(5)].map((el, i) => (
            <Review key={i} />
          ))}
        </section>
      </section>
    </div>
  );
}

export default ReviewSection;
