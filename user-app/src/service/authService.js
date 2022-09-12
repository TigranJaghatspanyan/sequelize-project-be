import redirect from "../const/redirect.js";
import axiosInstance from "./axiosInstance.js";

export const login = async (name, email, password, navigate) => {
  try {
    const response = await axiosInstance.post(`${redirect.signUp}`, {
      name: name,
      email: email,
      password: password,
    });
    navigate(`/${redirect.login}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    const response = await axiosInstance.post(`${redirect.login}`, {
      email: email,
      password: password,
    });
    window.localStorage.setItem("token", response.data.access_token);
    navigate(`/${redirect.home}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
