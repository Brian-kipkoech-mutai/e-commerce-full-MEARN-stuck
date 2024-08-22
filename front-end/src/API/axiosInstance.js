import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.1.101:5001/api",
  timeout: 10000,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response) {
      error.message = error.response.data.message;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
