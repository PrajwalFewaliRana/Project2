import React from "react";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import { useDispatch,useSelector } from "react-redux";
import { selectCartState, setCloseCart } from "../store/CartSlice";


const Cart = () => {

  const dispatch = useDispatch()

  const ifCartState = useSelector(selectCartState)

  const onCartToggle = () => {
    dispatch(setCloseCart({
      cartState:false,
    }))
  }

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] 
        ${ifCartState ? 'opacity-100 translate-x-0 visible' : 'opacity-0 translate-x-8 invisible'}`}
      >
        <div
          className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 `}
        >
          <CartCount onCartToggle={onCartToggle} />
          <CartEmpty onCartToggle={onCartToggle} />
          <CartItem />
        </div>
      </div>
    </>
  );
};

export default Cart;