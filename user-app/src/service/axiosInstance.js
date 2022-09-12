import env from "../const/env.js";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: env.host,
});

export default axiosInstance;