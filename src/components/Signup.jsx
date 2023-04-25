import React from "react";
import { useDispatch, useSelector } from "react-redux";
import img from "../assets/login.jpg";
import { selectSignupState, setCloseSignup } from "../store/SignupSlice";
import img1 from "../assets/google.png";
import { RxCross2 } from "react-icons/rx";
import { setOpenLogin } from "../store/LoginSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const ifSignupState = useSelector(selectSignupState);
  const onSignupToggle = () => {
    dispatch(
      setCloseSignup({
        SignupState: false,
      })
    );
  };
  const onLoginToggle = () => {
    dispatch(
      setOpenLogin({
        loginState: true,
      })
    );
  };
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-100 w-full h-screen opacity-100 z-[300] flex items-center justify-center
    ${ifSignupState ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      <div className="absolute top-5 right-[165px] flex items-center">
        <button
          onClick={onSignupToggle}
          type="button"
          className="rounded bg-theme-cart active:scale-90 p-0.5 cursor-pointer"
        >
          <RxCross2 className="w-5 h-5 text-white stroke-[1]" />
        </button>
      </div>
      <div className="h-[90%] w-[75%] bg-white flex justify-between">
        <div className="px-[100px] py-[50px] flex-1 min-w-[50%] ">
          <div className="text-center">
            <h1 className="text-[24px] font-semibold leading-tight mb-[5px]">
              Create your account
            </h1>
            <p className="text-[13px] font-semibold leading-tight text-[#00000070] tracking-wide">
              Let's get started with your 30 days free trial
            </p>
          </div>

          <button className="rounded-full flex items-center gap-2 my-[20px] border-[1px] border-gray-400 py-[8px] w-full justify-center">
            <img className="h-4 w-4" src={img1} alt="icon/google" />
            <p className="font-semibold text-[14px] leading-tight">
              Signup with Google
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
              htmlFor="name"
            >
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-[1px] border-gray-400 w-full outline-none px-[10px] py-[9px] rounded-full text-[13px] tracking-wide leading-tight font-semibold"
              placeholder="Enter your name"
              required
            />
            <label
              className="font-semibold text-[13px] leading-tight"
              htmlFor="email"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-[1px] border-gray-400 w-full outline-none px-[10px] py-[9px] rounded-full text-[13px] tracking-wide leading-tight font-semibold"
              placeholder="Enter your email"
              required
            />
            <label
              className="font-semibold text-[13px] leading-tight"
              htmlFor="password"
            >
              Password*
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border-[1px] border-gray-400 w-full outline-none px-[10px] py-[9px] rounded-full text-[13px] tracking-wide leading-tight font-semibold"
              placeholder="Enter your password"
              required
            />
            <div className="flex items-center gap-3 my-[15px]">
              <input type="checkbox" className="cursor-pointer" required />
              <span className="text-[13px] tracking-wide leading-tight font-semibold">
                I agree to all Terms and Conditions.
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-theme-cart text-white tracking-wide leading-tight font-semibold text-[14px] py-[8px] rounded-full active:scale-110"
            >
              Sign Up
            </button>
          </form>
          <div className="flex items-center mt-[8px] gap-[5px]">
            <p className="text-[13px] tracking-wide leading-tight font-semibold">
              Already have an account?
            </p>
            <button
              onClick={() => {
                onSignupToggle();
                onLoginToggle();
              }}
              className="text-[13px] tracking-wide leading-tight font-semibold text-blue-500 focus:text-blue-700"
            >
              Log in
            </button>
          </div>
        </div>
        <div className="flex-1 min-w-[50%] p-[10px] ">
          <img
            className="rounded-3xl object-cover w-full h-full"
            src={img}
            alt="signup/img"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
