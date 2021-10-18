import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { Redirect } from "react-router";
import { userLogin } from "../../redux/actions/login/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { authUser } from "../../redux/actions/authUser/actionCreators";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["jwt"]);
  const state = useSelector((state) => {
    return state;
  });

  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(userLogin({ email, password }));
    setUsername("");
    setPassword("");
  };

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
      if (token) {
        setCookie("jwt", token);
      } else {
        setCookie("jwt", state.authUserReducer.authToken);
      }

      return <Redirect to="/" />;
    }
    return (
      <div className={styles.login}>
        <div className={styles.loginHeader}>
          <h1>Login to Live Ecosystem</h1>
        </div>
        <form className={styles.loginForm}>
          <div className={styles.userName}>
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          <div className={styles.password}>
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
            className={styles.logInButton}
            type="submit"
            onClick={(e) => {
              handleLogin(e);
            }}
          >
            Log In
          </button>

          <h1 className={styles.loginFailure}>{state.loginReducer.error}</h1>
        </form>

        <div className={styles.signUp}>
          <p>Don't have an account?</p>
          <Link className={styles.link} to="/register">
            Sign Up
          </Link>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default Login;
