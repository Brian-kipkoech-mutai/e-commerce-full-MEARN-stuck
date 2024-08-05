import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api",
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
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
