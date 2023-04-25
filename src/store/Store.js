import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import UserSlice from "./UserSlice";
import SignupSlice from "./SignupSlice";
import LoginSlice from "./LoginSlice";

const Store = configureStore({
    reducer:{
        user:UserSlice,
        cart:CartSlice,
        signup:SignupSlice,
        login:LoginSlice,
    },

})

export default Store