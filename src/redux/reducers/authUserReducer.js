import {
  AUTH_USER_FAILURE,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  SET_AUTH_TOKEN,
} from "../actions/authUser/actionTypes";

const initialState = {
  authorize: false,
  authToken: "",
  loading: false,
  error: "",
  status: null,
};

export const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case AUTH_USER_SUCCESS:
      return {
        ...state,
        authorize: true,
        error: "",
        loading: false,
        status: action.payload.status,
      };

    case AUTH_USER_FAILURE:
      return {
        ...state,
        authorize: false,
        error: action.payload.error,
        loading: false,
        status: action.payload.status,
      };

    case SET_AUTH_TOKEN:
      return {
        ...state,
        authorize: true,
        error: "",
        loading: false,
        status: action.payload.status,
        authToken: action.payload.token,
      };
    default:
      return { ...state };
  }
};
