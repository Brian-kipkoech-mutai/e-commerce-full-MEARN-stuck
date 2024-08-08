import axiosInstance from "@/API/axiosInstance";
import { apiUrls } from "@/API/endpoints";

export const registerUser = async (userData) =>
  await axiosInstance.post(apiUrls.REGISTER_USER, userData);

export const resendEmailLink = async (token) =>
  await axiosInstance.post(apiUrls.RESEND_EMAIL_LINK, token);

export const login = async (userData) =>
  await axiosInstance.post(apiUrls.LOGIN, userData);
