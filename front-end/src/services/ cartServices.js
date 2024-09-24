import axiosInstance from "@/API/axiosInstance";
import { apiUrls } from "@/API/endpoints";
export const postcartData = async (productData) =>
  axiosInstance.post(apiUrls.ADD_TO_CART, productData);

