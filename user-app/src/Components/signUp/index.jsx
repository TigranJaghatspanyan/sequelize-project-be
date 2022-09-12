import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../service/authService";

import styles from "./signup.module.scss";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <h1>Sign Up</h1>
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
        <button
          className={styles.confirmButton}
          onClick={() => {
            login(name, email, password, navigate);
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
