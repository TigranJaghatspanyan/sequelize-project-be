import env from "../const/env.js";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: env.host,
  Authorization: env.token,
  timeout: 100000,
});

export default axiosInstance;
