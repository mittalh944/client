import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authUser } from "../../redux/actions/authUser/actionCreators";
import Loading from "../Loading/Loading";

function ProtectedRoute({ Component, path }) {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  const token = document.cookie.split("=")[1];
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(authUser(token));
  }, []);

  useEffect(() => {
    setCount((prevState) => prevState + 1);
  }, [state.authUserReducer.loading]);

  return (
    <Route
      exact
      path={path}
      render={() => {
        if (count === 3) {
          if (!state.authUserReducer.authorize) {
            return <Redirect to="/login" />;
          } else {
            return <Component />;
          }
        } else {
          return <Loading />;
        }
      }}
    />
  );
}

export default ProtectedRoute;
