import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://elegance-bistro-server.onrender.com",
});

const useAxiosSecure = () => {
  return axiosInstance;
};

export default useAxiosSecure;
