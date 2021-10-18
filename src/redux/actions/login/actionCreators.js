import axios from "axios";
import { setAuthToken } from "../authUser/actionCreators";
const {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} = require("./actionTypes");

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const loginSuccess = (status) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { status },
  };
};

const loginFailure = (error, status) => {
  return {
    type: LOGIN_FAILURE,
    payload: { error, status },
  };
};

export const userLogin = (data) => {
  return function (dispatch) {
    dispatch(loginRequest());
    axios
      .post("http://localhost:3001/login", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        switch (response.status) {
          case 200:
            window.localStorage.setItem("name", response.data.name);
            dispatch(loginSuccess(200));
            dispatch(setAuthToken(200, response.data.token));
            break;
          case 201:
            dispatch(loginFailure(response.data.message, 201));
            break;
          case 202:
            dispatch(loginFailure(response.data.message, 202));
            break;
          case 203:
            dispatch(loginFailure(response.data.message, 203));
            break;
          default:
            console.log("Default: loginUser action creator");
        }
      })
      .catch((error) => {
        console.log(error, "Catch block of userLogin action creator");
        dispatch(loginFailure(error.message));
      });
  };
};
