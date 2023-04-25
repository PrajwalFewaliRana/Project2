import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setDecreaseItemQTY, setIncreaseItemQTY, setRemoveItemFromCart } from "../../store/CartSlice";

const CartItem = ({
  item: { id, title, img, text, color, shadow, price, cartQuantity },
}) => {
  const dispatch = useDispatch()
  
  const onRemoveItems = ()=>{
    dispatch(setRemoveItemFromCart({id, title, img, text, color, shadow, price, cartQuantity}))
  }

  const onIncreaseItemQTY = () =>{
    dispatch(setIncreaseItemQTY( { id, title, img, text, color, shadow, price, cartQuantity }))
  }
  const onDecreaseItemQTY = () =>{
    dispatch(setDecreaseItemQTY( { id, title, img, text, color, shadow, price, cartQuantity }))
  }
  return (
    <>
      <div className="flex items-center justify-between w-full px-5">
        <div className="flex items-center gap-5">
          <div
            className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}
          >
            <img
              src={img}
              alt={`img/cart-item/${id}`}
              className="w-36 h-auto object-fill"
            />
          </div>
          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h1 className="font-semibold text-lg text-slate-900">{title}</h1>
              <p className="text-sm text-slate-800 ">{text}</p>
            </div>
            <div className="flex items-center justify-around w-full">
              <button
                onClick={onDecreaseItemQTY}
                type="button"
                className="bg-theme-cart rounded w-6 h-6 flex items-center justify-center active:scale-90 cursor-pointer"
              >
                <BiMinus className="w-5 h-5 text-white stroke-[2]" />
              </button>
              <div className="bg-theme-cart rounded text-white font-medium w-7 h-6 flex items-center justify-center">{cartQuantity}</div>
              <button
                onClick={onIncreaseItemQTY}
                type="button"
                className="cursor-pointer bg-theme-cart rounded w-6 h-6 flex items-center justify-center active:scale-90"
              >
                <BiPlus className="w-5 h-5 text-white stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5">
          <div className="grid items-center justify-center">
            <h1 className="text-lg ltext-slate-900 font-semibold">${price * cartQuantity}</h1>
          </div>
          <div className="grid items-center justify-center">
            <button onClick={onRemoveItems} type="button" className="bg-theme-cart rounded p-1 grid items-center cursor-pointer">
              <BsTrashFill className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
