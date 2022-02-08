// 여러 리듀서모듈을 관리

import { combineReducers } from "redux";
import auth from "./auth";

const reducer = combineReducers({
  auth,
})

export default reducer;