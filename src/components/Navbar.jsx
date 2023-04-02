import React from 'react'
import { navlink } from '../data/data'

const Navbar = () => {
  return (
    <header className='flex items-center pl-[100px] py-[25px]  justify-between'>
        <ul className='flex items-center gap-[55px] '>
          {
            navlink.map((item,index)=>(
              <li key={index} className={`poppins cursor-pointer ${index === 3 ?"font-bold text-[#7b29dd] text-[26px] leading-[28px] px-[90px] " :"hover:text-[#7b29dd] font-semibold text-[#33312f] text-[15px] leading-[18px]"}`}>{item.title}</li>
            ))
          }
        </ul>
        <ul className='flex gap-[40px] '>
          {
            navlink.map((item)=>(
              <li key={item.id} className="text-[22px] cursor-pointer">{item.icon}</li>
            ))
          }
        </ul>
    </header>
  )
}

export default Navbar