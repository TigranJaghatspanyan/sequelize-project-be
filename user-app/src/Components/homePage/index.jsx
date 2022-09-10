import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h1>This is home page</h1>
      <div>
        <Link to="/login">Log Out</Link>
      </div>
      <h3>If you need new account please create</h3>
      <Link to="/signUp">Sign Up</Link>
    </div>
  );
}
