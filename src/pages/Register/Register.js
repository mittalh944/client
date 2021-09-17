import React, { useState } from "react";
import "./Register.css";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState([]);

  async function registerUser(e) {
    e.preventDefault();
    setResponse([]);
    try {
      const r = await axios.post("http://localhost:3001/register", {
        email: email,
        password: password,
        name: name,
      });
      console.log(r);
      setResponse([r]);
    } catch (error) {
      console.log(error);
      setResponse([{ data: { message: error } }]);
    }

    setEmail("");
    setPassword("");
    setName("");
  }
  return (
    <div className="Register">
      <div className="RegisterHeader">
        <h1>Sign Up</h1>
      </div>
      <form className="RegisterForm">
        <div className="name">
          <label>Name</label>
          <input
            type="text"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="email">
          <label>Email</label>
          <input
            type="email"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="userName">
          <label>Username</label>
          <input type="text" />
        </div>

        <div className="password">
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" onClick={(e) => registerUser(e)}>
          Register
        </button>
        {response.length === 0 ? (
          <h1></h1>
        ) : (
          <h1 style={{ color: "red" }}> {response[0].data.message} </h1>
        )}
      </form>

      <div className="register__logIn">
        <hr />
        <a href="/login">Log In</a>
      </div>
    </div>
  );
}

export default Register;
