import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true , unique:false},
    gender: { type: String, enum: ["Men", "Women", "Unisex"], required: true },
    price: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    brand: { type: Schema.Types.ObjectId, ref: "Brand", required: true },
    stock: { type: Number, required: true },
    ratingCount: { type: Number, required: true, default: 0 },
    averageCount: { type: Number, required: true, default: 0 },
    size: { type:[ String], enum: ["Small", "Medium", "Large", "X-large"] },
    status: {
      type: String,
      enum: ["in-stock", "out-of-stock", "preorder"],
      required: true,
    },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);
export default Product;
