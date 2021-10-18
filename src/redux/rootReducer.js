import { combineReducers } from "redux";
import { authUserReducer } from "./reducers/authUserReducer";
import { loginReducer } from "./reducers/loginReducer";
import { registerReducer } from "./reducers/registerReducer";
export const rootReducer = combineReducers({
  authUserReducer,
  loginReducer,
  registerReducer,
});
