import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SignupState: false,
};

const SignupSlice = createSlice({
  initialState,
  name: "signup",
  reducers: {
    setOpenSignup: (state, action) => {
      state.SignupState = action.payload.SignupState;
    },
    setCloseSignup: (state, action) => {
      state.SignupState = action.payload.SignupState;
    },
  },
});

export const { setCloseSignup, setOpenSignup } = SignupSlice.actions;
export const selectSignupState = (state) => state.signup.SignupState;
export default SignupSlice.reducer;
