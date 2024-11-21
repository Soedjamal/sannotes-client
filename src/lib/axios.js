import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:2007",
});

export default axiosInstance;
