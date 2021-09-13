import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="Register">
      <div className="RegisterHeader">
        <h1>Sign Up</h1>
      </div>
      <form className="RegisterForm">
        <div className="name">
          <label>Name</label>
          <input type="text" />
        </div>

        <div className="email">
          <label>Email</label>
          <input type="email" />
        </div>

        <div className="userName">
          <label>Username</label>
          <input type="text" />
        </div>

        <div className="password">
          <label>Password</label>
          <input type="password" />
        </div>

        <button type="submit">Register</button>
      </form>

      <div className="logIn">
        <hr />
        <a href="/login">
          <button id="btn" type="button">
            Log In
          </button>
        </a>
      </div>
    </div>
  );
}

export default Register;
