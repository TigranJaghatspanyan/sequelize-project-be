import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./signup.module.scss";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const login = () => {
    axios({
      method: "post",
      url: `http://localhost:5000/register`,
      data: {
        name,
        email,
        password,
      },
    })
      .then((res) => {
        navigate("/");
      })
      .catch((res) => {
        alert(res.response.data.error);
      });
  };

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      <div className={styles.loginContainer}>
        <input
          type="text"
          placeholder="Enter your name"
          className={styles.nameInput}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your email"
          className={styles.emailInput}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className={styles.passwordInput}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.confirmButton} onClick={login}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
