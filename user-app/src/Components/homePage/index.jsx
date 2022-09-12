import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import redirect from "../../const/redirect";
import env from "../../const/env.js";

import styles from "./homePage.module.scss";

export default function Home() {
  const [userName, setUserName] = useState("");
  axios.get(`${env}/user`).then((res) => {
    console.log(res.data);
  });

  const token = window.localStorage.getItem("token");

  axios
    .get(`${env.host}/user`, {
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
    axios.post(`${env.host}/logout`).then((res) => {
      window.localStorage.removeItem("token");
    });
  };
  return (
    <div className={styles.container}>
      <div>
        <h1>Welcome {userName}</h1>
        <Link to={redirect.signUp} className={styles.logOut} onClick={logOut}>
          Log Out
        </Link>
      </div>
    </div>
  );
}
