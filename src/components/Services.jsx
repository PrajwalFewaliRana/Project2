import React from 'react'
import { servicesapi } from '../data/data'

const Services = () => {
  return (
    <div className='flex bg-[#f1eeff] gap-[170px] pl-[100px] py-[30px]'>
      {
        servicesapi.map((item)=>(
          <div key={item.id} className='flex items-center gap-[24px]'>
            <div className='bg-[#fdc400] text-[47px] p-[10px] rounded-md'>{item.icon}</div>
            <div>
              <h1 className='poppins font-semibold text-[30px] leading-tight'>{item.title}</h1>
              <p className='poppins text-[14px] font-semibold text-[#000000b6]'>{item.text}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Services