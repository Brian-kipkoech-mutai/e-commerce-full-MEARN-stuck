import { model, Schema } from "mongoose";

const imageSchema = new Schema({
  image: {
    type: Map,
    of: [String],
    validate: {
      validator: (v) => v.size > 0,
      message: "images cannot be empty",
    },
  },
  alt: { type: String, required: true },
  product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
});

const Image = model("Image", imageSchema);
export default Image;
