import redirectUrls from "../const/redirect.js";
import axiosInstance from "./axiosInstance.js";

export const login = async (name, email, password, navigate) => {
  try {
    const response = await axiosInstance.post(`${redirectUrls.signUp}`, {
      name: name,
      email: email,
      password: password,
    });
    navigate(`/${redirectUrls.login}`);
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

const token = window.localStorage.getItem("token");

export const logOut = async () => {
  try {
    const response = await axiosInstance.post(`${redirectUrls.logOut}`, {
      token,
    });
    window.localStorage.removeItem("token");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const users = async (name) => {
  try {
    const response = await axiosInstance.post(`${redirectUrls.user}`, {
      headers: {
        Authorization: token,
      },
      name: name,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
