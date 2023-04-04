import React from 'react'
import {IoMdSend} from "react-icons/io"

const Footer = () => {
  return (
    <div className='mx-[100px]'>
        <div className='flex'>
            <div className='w-[35%]'>
                <h1 className='font-bold text-[26px] leading-[28px] mb-[20px]'>Infinity</h1>
                <p className='text-[#00000083] text-[16px] leading-[20px] tracking-wide font-semibold'>Our company is a shoe company, <br /> basically our service provide product <br /> sneakers</p>
            </div>
            <div className='w-[15%]'>
                <h1 className='font-bold text-[18px] leading-[20px] mb-[20px]'>Product</h1>
                <div className='flex flex-col gap-[15px]'>
                <p className='text-[#00000083] text-[16px] leading-[20px] tracking-wide font-bold'>Watch</p>
                <p className='text-[#00000083] text-[16px] leading-[20px] tracking-wide font-bold'>Road</p>
                <p className='text-[#00000083] text-[16px] leading-[20px] tracking-wide font-bold'>Listen</p>
                </div>
            </div>
            <div className='w-[15%]'>
                <h1 className='font-bold text-[18px] leading-[20px] mb-[20px]'>Media Group</h1>
                <div className='flex flex-col gap-[15px]'>
                <p className='text-[#00000083] text-[16px] leading-[20px] tracking-wide font-bold'>Nice Studio</p>
                <p className='text-[#00000083] text-[16px] leading-[20px] tracking-wide font-bold'>Nice News</p>
                <p className='text-[#00000083] text-[16px] leading-[20px] tracking-wide font-bold'>Nice Tv</p>
                </div>
            </div>
            <div className='w-[20%]'>
                <h1 className='font-bold text-[18px] leading-[20px] mb-[20px]'>Sitemap</h1>
                <div className='flex flex-col gap-[15px]'>
                <p className='text-[#00000083] text-[16px] leading-[20px] tracking-wide font-bold'>About</p>
                <p className='text-[#00000083] text-[16px] leading-[20px] tracking-wide font-bold'>Careers</p>
                <p className='text-[#00000083] text-[16px] leading-[20px] tracking-wide font-bold'>Press</p>
                </div>
            </div>
            <div className='w-[35%]'>
                <h1 className='font-bold text-[18px] leading-[20px] mb-[20px]'>Join a Newsletter</h1>
                <div className='flex w-full'>
                    <input type="email" className='bg-[#ecf3fe] p-[15px] w-[85%] focus:outline-none border-[2px] border-[#88b5fd]' placeholder='Input your email here'/>
                    <button className='bg-[#fdc400] text-[25px] w-[15%] p-[16px] h-full'><IoMdSend /></button>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-between mt-[50px] mb-[10px]'>
            <p className='text-[#00000083] text-[16px] leading-[20px] tracking-wide font-semibold'>2023 Infinity Sneakers</p>
            <div className='flex items-center gap-[70px]'>
                <p className='text-[#00000083] text-[16px] leading-[20px] tracking-wide font-bold'>Privacy Policy</p>
                <p className='text-[#00000083] text-[16px] leading-[20px] tracking-wide font-bold'>Term of Use</p>
                <p className='text-[#00000083] text-[16px] leading-[20px] tracking-wide font-bold'>Partner</p>
            </div>
        </div>
    </div>
  )
}

export default Footer