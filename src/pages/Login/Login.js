import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });

    setUsername("");
    setPassword("");
  };
  return (
    <div className="login">
      <div className="loginHeader">
        <h1>Login to Live Ecosystem</h1>
      </div>
      <form className="loginForm">
        <div className="userName">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="password">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          onClick={(e) => {
            Login(e);
          }}
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
