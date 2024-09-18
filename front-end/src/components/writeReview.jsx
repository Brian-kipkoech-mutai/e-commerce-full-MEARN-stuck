import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { Button } from "./ui/button";
import classNames from "classnames"; // Utility to handle conditional class names

function WriteReview(props) {
  const [rating, setRating] = useState(0); // Track the current rating (0 to 5)

  // Handle star click
  const handleStarClick = (i) => {
    if (rating === i + 1) setRating(0);
    else setRating(i + 1);    
  }
    

  return (
    <Dialog>
      <DialogTrigger className="py-2 px-6 rounded font-medium shadow-sm border">
        Write a review
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Write review</DialogTitle>
          <DialogDescription className="space-y-1">
            <Textarea />
            <div className="flex gap-1 py-4">
              {/* Render stars */}
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  onClick={() => handleStarClick(i)}
                  className={classNames(
                    "cursor-pointer",

                    i < rating ? "text-gray-700 fill-gray-700" : "text-gray-400"
                  )}
                />
              ))}
            </div>
            <div>
              <Button>Send Your Review</Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default WriteReview;
