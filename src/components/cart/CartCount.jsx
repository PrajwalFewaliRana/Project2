import React from 'react'
import {HiChevronDoubleLeft} from "react-icons/hi"
import {RxCross2} from "react-icons/rx"

const CartCount = ({onCartToggle,onClearCart,totalQTY}) => {
  return (
    <div className='bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full'>
      <div className='flex items-center gap-3'>
        <div className='grid items-center cursor-pointer'>
          <HiChevronDoubleLeft onClick={onCartToggle} title='close cart' className='h-5 w-5 text-slate-900 hover:text-orange-500 stroke-[1]'/>
        </div>
        <div className='grid items-center'>
          <h1 className='poppins text-base font-medium text-slate-900'>Your Cart <span className='bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-xs'>({totalQTY}Items)</span></h1>
        </div>
      </div>
      <div className='flex items-center'>
        <button title='Clear Cart' onClick={onClearCart} type='button' className='rounded bg-theme-cart active:scale-90 p-0.5 cursor-pointer'>
          <RxCross2 className='w-5 h-5 text-white stroke-[1]' />
        </button>
      </div>
    </div>
  )
}

export default CartCount