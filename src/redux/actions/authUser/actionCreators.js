import {
  AUTH_USER_FAILURE,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  SET_AUTH_TOKEN,
} from "./actionTypes";

import axios from "axios";

export const authUserRequest = () => {
  return {
    type: AUTH_USER_REQUEST,
  };
};

export const authUserSuccess = (status) => {
  return {
    type: AUTH_USER_SUCCESS,
    payload: { status },
  };
};

export const authUserFailure = (error, status) => {
  return {
    type: AUTH_USER_FAILURE,
    payload: { error, status },
  };
};

export const setAuthToken = (status, token) => {
  return {
    type: SET_AUTH_TOKEN,
    payload: {
      status,
      token,
    },
  };
};

export const authUser = (token) => {
  return function (dispatch) {
    dispatch(authUserRequest());

    axios
      .post("http://localhost:3001/auth", { token })
      .then((response) => {
        dispatch(authUserSuccess(response.status));
      })
      .catch((error) => {
        dispatch(authUserFailure(error.message, 404));
      });
  };
};
