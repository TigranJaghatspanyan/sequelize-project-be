import env from "../const/env.js";
import axios from "axios";
console.log(env,"env");
const axiosInstance = axios.create({
  baseURL: env.host,
});

export default axiosInstance;
