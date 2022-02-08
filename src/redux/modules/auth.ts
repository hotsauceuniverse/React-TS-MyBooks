// 인증관리

import { createActions, handleActions } from "redux-actions"

// state 구상
interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null
};

// 모듈에서 prefix 설정
const prefix = "my-books/auth";

export const {pending, success, fail} = createActions(
  "PENDING", 
  "SUCCESS", 
  "FAIL", 
  {prefix}
);

// reducer 만들기
// handleActions의 제네릭 넣기
// 제네릭: 함수나 클래스를 선언할 때 타입을 고정하지 않고, 사용할 때 명시해 타입을 유연하게 사용할 수 있게 하는 타입.
const reducer = handleActions<AuthState, string>({
  PENDING: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  SUCCESS: (state, action) => ({
    token: action.payload,
    loading: false,
    error: null,
  }),
  FAIL: (state, action: any) => ({
    ...state,
    loading: false,
    error: action.payload,
  })
}, initialState, {prefix});

export default reducer;

// saga
export function authSaga() {
  
}