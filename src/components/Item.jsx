import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setAddItemToCart } from "../store/CartSlice";
const Item = ({
  id,
  color,
  shadow,
  icon1,
  img,
  title,
  price,
  btn,
  icon2,
  quan,
  text,
}) => {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    const items = { id, color, shadow, img, title, price, text };
    dispatch(setAddItemToCart(items));
  };
  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  return (
    <>
      <div
        className={`h-[300px] w-[270px] bg-gradient-to-b ${color} ${shadow} over relative rounded-lg flex items-center justify-center`}
      >
        <button
          title="Add To Cart"
          type="button"
          onClick={()=>{onAddToCart();onCartToggle();}}
          className="absolute bg-[#fdc400] rounded-full text-[25px] p-[5px] z-[1] top-[15px] right-[10px]"
        >
          {icon1}
        </button>
        <motion.img
          initial={{ rotate: 0, scale: 0 }}
          whileInView={{ rotate: "15deg", scale: 1.1 }}
          className="h-auto w-full rotate-[15deg] object-contain origin-bottom cursor-pointer "
          src={img}
          alt="top/img"
        />
      </div>
      <div className="flex items-center justify-between py-[12px]">
        <h1 className="poppins font-semibold text-[18px] leading-[18px]">
          {title}
        </h1>
        <p className="poppins font-semibold text-[18px] leading-[18px]">
          ${price}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="flex gap-[10px] items-center poppins text-[#fdc400] font-semibold text-[14px] leading-tight">
          {btn}
          <span className="text-[24px] leading-tight">{icon2}</span>
        </h1>
        <p className="poppins font-semibold text-[13px] leading-tight text-[#000000da]">
          {quan}
        </p>
      </div>
    </>
  );
};

export default Item;
