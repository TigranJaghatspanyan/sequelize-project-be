import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import redirectUrls from "../../const/redirect";
import env from "../../const/env.js";
import { logOut } from "../../service/authService.js";

import styles from "./homePage.module.scss";

export default function Home() {
  const [userName, setUserName] = useState("");

  const logout = async () => {
    await logOut(email, password, navigate);
    navigate(`${redirectUrls.home}`);
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Welcome {userName}</h1>
        <Link
          to={redirectUrls.signUp}
          className={styles.logOut}
          onClick={logout}
        >
          Log Out
        </Link>
      </div>
    </div>
  );
}
