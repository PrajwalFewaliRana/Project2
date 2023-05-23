import React from "react";
import { navlink } from "../data/data";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { RiShoppingBasketFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { selectTotalQTY, setOpenCart } from "../store/CartSlice";
import { useSelector } from "react-redux";
import { selectUserState, setOpenUser ,setCloseUser} from "../store/UserSlice";
import { setOpenSignup } from "../store/SignupSlice";
import { setOpenLogin } from "../store/LoginSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const ifUserState = useSelector(selectUserState);
  const onUserToggle = () => {
    if (ifUserState) {
      dispatch(setCloseUser({
        userState:false,
      }));
    } else {
      dispatch(setOpenUser({
        userState:true,
      }));
    }
  };

  const onSignupToggle = ()=>{
    dispatch(setOpenSignup({
      SignupState:true
    }))
  }
  const onLoginToggle = ()=>{
    dispatch(setOpenLogin({
      loginState:true,
    }))
  }

  const totalQTY = useSelector(selectTotalQTY);

  return (
    <header className="w-full bg-[#f0eee5] flex items-center px-[100px] py-[25px] sticky top-0 z-[99] justify-between shadow-lg ">
      <ul className="flex items-center gap-[55px] ">
        {navlink.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className={`poppins cursor-pointer ${
              index === 3
                ? "font-bold text-[#7b29dd] text-[26px] leading-[28px] 2xl:px-[20px] px-[90px] "
                : "hover:text-[#7b29dd] font-semibold text-[#33312f] text-[15px] leading-[18px]"
            }`}
          >
            {item.title}
          </a>
        ))}
      </ul>
      <div className="flex gap-[40px]">
        <button className="text-[22px] cursor-pointer" type="button">
          <BiSearch />
        </button>
        <div className="relative">
          <button
            onClick={onUserToggle}
            className="text-[22px] cursor-pointer"
            type="button"
          >
            <AiOutlineUser />
          </button>
          <div
            className={`text-[#ffffff] font-bold text-[18px] leading-[30px] py-[10px] px-[16px] rounded-md bg-gradient-to-b from-blue-500 to-cyan-500 shadow-lg shadow-cyan-500 w-[100px] opacity-100 -left-8 absolute ${
              ifUserState
                ? "opacity-100 visible duration-500 ease-in top-[50px]"
                : "opacity-0 invisible top-[150px] "
            }`}
          >
            <button type="button" onClick={()=>{onLoginToggle();onUserToggle();}} className="active:scale-110">Log In</button>
            <button type="button" onClick={()=>{onSignupToggle();onUserToggle();}} className="active:scale-110 ">Sign Up</button>
          </div>
        </div>
        <div className="relative">
          <button
            className="text-[22px] cursor-pointer"
            type="button"
            onClick={onCartToggle}
          >
            <RiShoppingBasketFill />
          </button>
          <span className="absolute bg-green-500 shadow-sm shadow-green-500 h-4 w-4 rounded-full text-[10px] font-bold text-center -top-[1px] text-white">
            {totalQTY}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
