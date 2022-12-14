import redirectUrls from "../const/redirect.js";
import axiosInstance from "./axiosInstance.js";

const token = window.localStorage.getItem("token");

export const login = async (name, email, password, navigate) => {
  try {
    const response = await axiosInstance.post(`${redirectUrls.signUp}`, {
      name: name,
      email: email,
      password: password,
    });
    window.localStorage.setItem("token", response.data.access_token);
    navigate(`/${redirectUrls.home}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    const response = await axiosInstance.post(`${redirectUrls.login}`, {
      email: email,
      password: password,
    });
    window.localStorage.setItem("token", response.data.access_token);
    navigate(`${redirectUrls.home}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const logOut = async (email, password) => {
  try {
    window.localStorage.removeItem("token");
    const response = await axiosInstance.post(`${redirectUrls.logOut}`, {
      token,
      email,
      password,
    });
    return response.data;
  } catch (err) {
    console.log(err.email);
  }
};

export const users = async (name) => {
  try {
    const response = await axiosInstance.post(`${redirectUrls.user}`, {
      name: name,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
