const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} = require("../actions/login/actionTypes");

const initialState = {
  status: null,
  error: "",
  loading: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        error: "",
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        status: action.payload.status,
      };

    default:
      return {
        ...state,
      };
  }
};
