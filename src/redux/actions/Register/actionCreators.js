import axios from "axios";
import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionTypes";

const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

const registerSuccess = (status, message) => {
  return {
    type: REGISTER_SUCCESS,
    payload: { status, message },
  };
};

const registerFailure = (error, status) => {
  return {
    type: REGISTER_FAILURE,
    payload: { error, status },
  };
};

export const userRegister = (data) => {
  return function (dispatch) {
    dispatch(registerRequest());
    axios
      .post("http://localhost:3001/register", {
        email: data.email,
        password: data.password,
        name: data.name,
      })
      .then((response) => {
        switch (response.status) {
          case 200:
            dispatch(registerSuccess(200, response.data.message));
            break;
          case 201:
            dispatch(registerFailure(response.data.message, 201));
            break;
          default:
            console.log("Default: registerUser action creator");
        }
      })
      .catch((error) => {
        console.log(error, "Catch block of userLogin action creator");
        dispatch(registerFailure(error.message));
      });
  };
};
