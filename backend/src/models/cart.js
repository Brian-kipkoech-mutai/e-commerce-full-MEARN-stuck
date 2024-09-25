import { model, Schema, Types } from "mongoose";

const cartItemSchema = new Schema({
  productId: { type: Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }, //price at the time of creation
  addedAt: { type: Date, default: Date.now },
  color: { type: String, required: true },
  size: { type: String, required: true },
});

const cartSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: "User", required: true },
    items: [cartItemSchema],
  },
  { timestamps: true }
);

const Cart = model("Cart", cartSchema);
export default Cart;
