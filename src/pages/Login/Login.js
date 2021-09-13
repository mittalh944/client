import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="loginHeader">
        <h1>Login to Live Ecosystem</h1>
      </div>
      <form className="loginForm">
        <div className="userName">
          <label>Username</label>
          <input type="text" />
        </div>

        <div className="password">
          <label>Password</label>
          <input type="password" />
        </div>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
