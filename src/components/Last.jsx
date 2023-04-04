import React from 'react'
import img from "../assets/last.png"
import {IoMdSend} from "react-icons/io"

const Last = () => {
  return (
    <div className='flex items-center justify-center h-[300px] bg-[#fdc400] w-full mb-[100px] relative'>
        <div className='w-auto'>
            <h1 className='poppins font-bold text-[45px] leading-[55px]'>Let us send you offering</h1>
            <div className='flex w-full gap-[10px] mt-[50px]'>
                <input type="email" className='w-[90%] p-[10px] rounded-lg focus:outline-none border-[2px] border-slate-500' placeholder='input your email address here'/>
                <button className='w-[9%] bg-black text-[#fff] rounded-lg text-[23px] flex items-center justify-center'><IoMdSend /></button>
            </div>
        </div>
        <img src={img} alt="some/img" className='absolute -right-[60px] bottom-0 h-[260px] w-auto object-cover' />
    </div>
  )
}

export default Last