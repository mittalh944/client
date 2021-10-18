import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../actions/Register/actionTypes";

const initialState = {
  status: null,
  error: "",
  loading: false,
  successMessage: "",
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        error: "",
        successMessage: action.payload.message,
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        status: action.payload.status,
        successMessage: "",
      };

    default:
      return {
        ...state,
      };
  }
};
