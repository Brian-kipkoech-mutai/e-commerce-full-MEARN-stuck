import { Schema, Types, model } from "mongoose";

const whishListItemSchema = new Schema({
  productId: { type: Types.ObjectId, ref: "Product", required: true },
  addedAt: { type: Date, default: Date.now },
});

const whishListSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: "User", required: true },
    items: [whishListItemSchema],
  },
  {
    timestamps: true,
  }
);


const WhishList = model("WhishList", whishListSchema);
export default WhishList;

 