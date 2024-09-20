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
import classNames from "classnames";
import { Label } from "./ui/label";
import useFormData from "@/hooks/useFormData";
import Loading from "./Loading";
import { useMutation, useQuery } from "@tanstack/react-query";
import { checkAuth } from "@/services/authServices";
import { postProductReview } from "@/services/productServices";

function WriteReview({ productId }) {
  const [rating, setRating] = useState(0);
  const { handleChange, formData } = useFormData();
  const [formError, setFormError] = useState(null);
  const { _, error, isLoading } = useQuery({
    queryKey: ["checkAuthForReview"],
    queryFn: checkAuth,
    staleTime: Infinity,
  });

  const handleStarClick = (i) => {
    if (rating === i + 1) setRating(0);
    else setRating(i + 1);
  };

  const { mutate, isSuccess, isPending, isIdle } = useMutation({
    mutationFn: (review) => postProductReview(productId, review),
  });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setFormError(null);
    if (!rating) {
      setFormError("Please select a rating");
      return;
    }
    const review = { ...formData, rating };
    mutate(review);
  };

  return isLoading ? (
    <Loading message={"checking authentication please wait"} />
  ) : (
    <Dialog>
      <DialogTrigger
        className="py-2 px-6 rounded font-medium shadow-sm border"
        disabled={error||isLoading}
      >
        {error ? "log in to write a review" : "Write a review"}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="spac-y-4">Write review</DialogTitle>
          <DialogDescription className="space-y-1"></DialogDescription>
          {formError && (
            <p className="font-semibold text-red-500 ">{formError}</p>
          )}
        </DialogHeader>
        <form className="space-y-2" onSubmit={handleReviewSubmit}>
          <fieldset className="space-y-1">
            <Label htmlFor="review">Review</Label>
            <Textarea
              id="review"
              name="comment"
              placeholder="Write your review here (max 200 characters)"
              maxLength="200"
              value={formData.comment || ""}
              onChange={handleChange}
              required={true}
            />
          </fieldset>

          <div className="flex gap-1 py-2">
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
            <Button type="submit" disabled={isPending||isSuccess}>
              {isIdle
                ? "Send Your Review"
                : isPending
                ? "Sending Review"
                : isSuccess && "review was sent"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default WriteReview;
