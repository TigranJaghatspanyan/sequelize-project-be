import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import redirectUrls from "../../const/redirect";
import { signIn } from "../../service/authService";

import styles from "./signin.module.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userSignIn = async () => {
    await signIn(email, password, navigate);
    navigate(`${redirectUrls.home}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <h1>Sign In</h1>
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
        <button className={styles.confirmButton} onClick={userSignIn}>
          Login
        </button>
      </div>
    </div>
  );
}
