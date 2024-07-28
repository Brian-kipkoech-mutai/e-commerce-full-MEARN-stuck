import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http/localhost:5000",
  timeout: 1000,
});

axiosInstance.interceptors.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
        return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (config) => config,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
