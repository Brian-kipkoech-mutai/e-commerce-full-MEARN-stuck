import { model, Schema } from "mongoose";

const filterSchema = new Schema({
  name: { type: String, required: true },
  options: {
    type: [
      {
        label: { type: String, required: true },
        value: { type: String, required: true },
      },
    ],
    validate: {
      validator: (n) => n.length > 0,
      message: (props) => `${props.value} .length  cannot be zero `,
    },
  },
});

const Filter = model("Filter", filterSchema);

export default Filter;
