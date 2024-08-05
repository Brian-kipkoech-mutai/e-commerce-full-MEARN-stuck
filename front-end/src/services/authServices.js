import axiosInstance from "@/API/axiosInstance";
import { apiUrls } from "@/API/endpoints";

export const registerUser = async (userData) =>
  await axiosInstance.post(apiUrls.REGISTER_USER, userData);
