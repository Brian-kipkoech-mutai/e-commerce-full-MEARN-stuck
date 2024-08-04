import mongoose from "mongoose";
import { MONGO_URI } from "./env.js";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("conection to the cloud db successfull");
  } catch (error) {
    console.error(error.message);
  }
};
 
export default connectDB;
