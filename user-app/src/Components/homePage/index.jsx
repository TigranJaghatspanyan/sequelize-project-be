import React, { useState } from "react";
import { Link } from "react-router-dom";
import redirectUrls from "../../const/redirect";
import { logOut } from "../../service/authService.js";
import { useNavigate } from "react-router-dom";

import styles from "./homePage.module.scss";

export default function Home() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const logout = async (email, password) => {
    await logOut(email, password, navigate);
    navigate(`${redirectUrls.login}`);
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
