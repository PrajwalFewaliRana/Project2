import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectLoginState, setCloseLogin } from "../store/LoginSlice";
import img from "../assets/Signup.jpg";
import { RxCross2 } from "react-icons/rx";
import img1 from "../assets/Google.png";
import { setOpenSignup } from "../store/SignupSlice";

const Login = () => {
  const dispatch = useDispatch();
  const ifLoginState = useSelector(selectLoginState);
  const onLoginToggle = () => {
    dispatch(
      setCloseLogin({
        loginState: false,
      })
    );
  };
  const onSignupToggle = () => {
    dispatch(
      setOpenSignup({
        SignupState: true,
      })
    );
  };
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-100 w-full h-screen opacity-100 z-[300] flex items-center justify-center
    ${ifLoginState ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      <div className="absolute top-5 right-[130px] flex items-center">
        <button
          onClick={onLoginToggle}
          type="button"
          className="rounded bg-theme-cart active:scale-90 p-0.5 cursor-pointer"
        >
          <RxCross2 className="w-5 h-5 text-white stroke-[1]" />
        </button>
      </div>
      <div className="h-[90%] w-[80%] bg-white flex justify-between">
        <div className="px-[60px] py-[50px] flex-1 min-w-[42%] ">
          <div className="text-center">
            <h1 className="text-[24px] font-semibold leading-tight mb-[5px]">
              Welcome Back, Olivia
            </h1>
            <p className="text-[13px] font-semibold leading-tight text-[#00000070] tracking-wide">
              Continue with Google or enter your details.
            </p>
          </div>

          <button className="rounded-md flex items-center gap-2 my-[20px] border-[1px] border-gray-400 py-[10px] w-full justify-center">
            <img className="h-4 w-4" src={img1} alt="icon/google" />
            <p className="font-semibold text-[14px] leading-tight">
              Login with Google
            </p>
          </button>

          <div className="flex items-center mb-4">
            <div className="border-t border-gray-400 flex-grow mr-3"></div>
            <div className="text-gray-500 font-bold">or</div>
            <div className="border-t border-gray-400 flex-grow ml-3"></div>
          </div>
          <form>
            <label
              className="font-semibold text-[13px] leading-tight"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              type="email"
              id="Email"
              name="Email"
              className="border-[1px] border-gray-400 w-full outline-none px-[10px] py-[10px] rounded-md text-[13px] tracking-wide leading-tight font-semibold"
              placeholder="Enter your email"
              required
            />
            <label
              className="font-semibold text-[13px] leading-tight"
              htmlFor="Password"
            >
              Password
            </label>
            <input
              type="password"
              id="Password"
              name="password"
              className="border-[1px] border-gray-400 w-full outline-none px-[10px] py-[10px] rounded-md text-[13px] tracking-wide leading-tight font-semibold"
              placeholder="Enter your password"
              required
            />
            <div className="flex items-center my-[15px] justify-between ">
              <div className="flex items-center gap-1">
                <input type="checkbox" className="cursor-pointer" required />
                <span className="text-[13px] tracking-wide leading-tight font-semibold">
                  Remember for 30 days
                </span>
              </div>
              <p className="text-[13px] tracking-wide leading-tight font-semibold cursor-pointer">
                Forget Password
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-theme-cart text-white tracking-wide leading-tight font-semibold text-[14px] py-[10px] rounded-md active:scale-110 mt-[15px]"
            >
              Log In
            </button>
          </form>
          <div className="flex items-center mt-[20px] gap-[5px] ">
            <p className="text-[13px] tracking-wide leading-tight font-semibold">
              Don't have an account?
            </p>
            <button
              onClick={() => {
                onLoginToggle();
                onSignupToggle();
              }}
              className="text-[13px] tracking-wide leading-tight font-semibold text-blue-500 focus:text-blue-700"
            >
              Sign up for free
            </button>
          </div>
        </div>
        <div className="flex-1 min-w-[58%] ">
          <img
            className="rounded-l-[15%] object-cover w-full h-full"
            src={img}
            alt="img/login"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
