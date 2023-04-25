import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userState: false,
};

const UserSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setOpenUser: (state, action) => {
      state.userState = action.payload.userState;
    },
    setCloseUser: (state, action) => {
      state.userState = action.payload.userState;
    },
  },
});

export const { setCloseUser, setOpenUser} = UserSlice.actions;
export const selectUserState = (state) => state.user.userState;
export default UserSlice.reducer;
