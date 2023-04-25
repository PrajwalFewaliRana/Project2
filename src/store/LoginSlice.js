import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginState: false,
};

const LoginSlice = createSlice({
  initialState,
  name: "login",
  reducers: {
    setOpenLogin: (state, action) => {
      state.loginState = action.payload.loginState;
    },
    setCloseLogin: (state, action) => {
      state.loginState = action.payload.loginState;
    },
  },
});

export const { setCloseLogin, setOpenLogin } = LoginSlice.actions;
export const selectLoginState = (state) => state.login.loginState;
export default LoginSlice.reducer;
