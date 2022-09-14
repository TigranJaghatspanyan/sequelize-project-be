import env from "../const/env.js";
import axios from "axios";
console.log(env,"env");
const axiosInstance = axios.create({
  baseURL: env.host,
  Authorization: env.token,
});

export default axiosInstance;
