import React, { useState, useEffect } from "react";
import styles from "./Register.module.css";
import { userRegister } from "../../redux/actions/Register/actionCreators";
import Loading from "../../components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../../redux/actions/authUser/actionCreators";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registerUser(e) {
    e.preventDefault();
    dispatch(userRegister({ email, password, name }));
    setEmail("");
    setPassword("");
    setName("");
  }

  const [count, setCount] = useState(0);
  const token = document.cookie.split("=")[1];
  useEffect(() => {
    dispatch(authUser(token));
  }, []);

  useEffect(() => {
    setCount((prevState) => prevState + 1);
  }, [state.authUserReducer.loading]);

  if (count === 3) {
    if (state.authUserReducer.authorize) {
      return <Redirect to="/login" />;
    }
    return (
      <div className={styles.register}>
        <div className={styles.register__header}>
          <h1>Sign Up</h1>
        </div>
        <form className={styles.register__form}>
          <div className={styles.registerForm__name}>
            <label>Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={styles.registerForm__email}>
            <label>Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.registerForm__password}>
            <label>Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button
            className={styles.registerButton}
            type="submit"
            onClick={(e) => registerUser(e)}
          >
            Register
          </button>
          <h1 className={styles.failureRegister}>
            {state.registerReducer.error}
          </h1>
          <h1 className={styles.successRegister}>
            {state.registerReducer.successMessage}
          </h1>
        </form>

        <div className={styles.register__login}>
          <p>Already have an account?</p>
          <Link className={styles.link} to="/login">
            Log In
          </Link>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default Register;
