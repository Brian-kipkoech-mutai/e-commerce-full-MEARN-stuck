import axiosInstance from "@/API/axiosInstance";
import { apiUrls } from "@/API/endpoints";

export const searchProducts = async (pageParam, searchParams) =>
  await axiosInstance.get(
    `${apiUrls.GET_SEARCH_PRODUCTS}?${searchParams}&page=${pageParam}`
  );

export const getFilters = async () =>
  await axiosInstance.get(apiUrls.GET_PRODUCTS_FILTERS);

export const getBestSelling = async () =>
  axiosInstance.get(apiUrls.GET_PRODUCTS_BESTSELLING);

export const getLatest = async () =>
  axiosInstance.get(apiUrls.GET_PRODUCTS_LATEST);
export const getFeatured = async () => axiosInstance.get(apiUrls.GET_PRODUCTS_FEATURED);
