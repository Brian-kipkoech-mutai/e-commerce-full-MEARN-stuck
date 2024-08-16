import axiosInstance from "@/API/axiosInstance";
import { apiUrls } from "@/API/endpoints";

export const searchProducts = async (pageParam, searchParams) =>
  await axiosInstance.get(
    `${apiUrls.GET_SEARCH_PRODUCTS}?${searchParams}&cusor=${pageParam}`
    );
  
