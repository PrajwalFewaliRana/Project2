import React from "react";
import { navlink } from "../data/data";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { RiShoppingBasketFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setOpenCart } from "../store/CartSlice";

const Navbar = () => {

  const dispatch = useDispatch()
  const onCartToggle = () =>{
    dispatch(setOpenCart({
      cartState:true
    }))
  }

  return (
    <header className="flex items-center bg-[#f0eee5] px-[100px] py-[25px] sticky top-0 z-[99] justify-between shadow-lg ">
      <ul className="flex items-center gap-[55px] ">
        {navlink.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className={`poppins cursor-pointer ${
              index === 3
                ? "font-bold text-[#7b29dd] text-[26px] leading-[28px] px-[90px] "
                : "hover:text-[#7b29dd] font-semibold text-[#33312f] text-[15px] leading-[18px]"
            }`}
          >
            {item.title}
          </a>
        ))}
      </ul>
      <div className="flex gap-[40px] ">
        <button className="text-[22px] cursor-pointer" type="button"><BiSearch /></button>
        <button className="text-[22px] cursor-pointer" type="button"><AiOutlineUser /></button>
        <button className="text-[22px] cursor-pointer" type="button" onClick={onCartToggle} ><RiShoppingBasketFill /></button>
      </div>
    </header>
  );
};

export default Navbar;
