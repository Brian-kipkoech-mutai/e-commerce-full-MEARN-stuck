import axiosInstance from "@/API/axiosInstance";
import { apiUrls } from "@/API/endpoints";

export const addToWishList = async (data) =>
  axiosInstance.post(apiUrls.ADD_TO_WHISHLIST, data);
