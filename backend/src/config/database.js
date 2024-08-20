import mongoose from "mongoose";
import { MONGO_URI } from "./env.js";
import generateFakeData from "../utils/generateFakeData.js";
import refreshFiltersInDB from "../utils/refreshFilters.js";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("conection to the cloud db successfull");
    // generateFakeData()
  // refreshFiltersInDB()
  } catch (error) {
    console.error(error.message);
  }
};

export default connectDB;
