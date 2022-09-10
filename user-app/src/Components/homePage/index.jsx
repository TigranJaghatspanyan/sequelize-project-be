import React from "react";
import { Link } from "react-router-dom";
import styles from "./homePage.module.scss";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [userName, setUserName] = useState("");
  axios.get("http://localhost:5000/user").then((res) => {
    console.log(res.data);
  });

  const token = window.localStorage.getItem("token");

  axios
    .get("http://localhost:5000/user", {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      setUserName(res.data.name);
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });

  const logOut = () => {
    window.localStorage.removeItem("token");
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Welcome {userName}</h1>
        <Link to="/signUp" className={styles.logOut} onClick={logOut}>
          Log Out
        </Link>
      </div>
    </div>
  );
}
