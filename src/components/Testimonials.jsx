import React from "react";
import { testimonialsapi } from "../data/data";

const Testimonials = () => {
  return (
    <div className="mt-[135px] px-[100px]">
      <div className="text-center">
        <h1 className="poppins font-bold text-[50px] leading-[58px]">
          What Our Customer Says
        </h1>
        <p className="poppins font-semibold text-[#000000c0] text-[18px] leading-[22px] mt-[5px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
          temporibus commodi eum quod!
        </p>
      </div>
      <div className="flex mt-[110px] items-center justify-between gap-[20px]">
        {
            testimonialsapi.map((item)=>(
                <div key={item.id}>
                    <div className="relative h-[240px] bg-[#fdc400] rounded-xl dot flex flex-col justify-end">
                        <img src={item.img} alt="user/profile" className="absolute -top-[70px] left-[80px] h-[150px] w-[150px] object-cover rounded-full" />
                        <h1 className="text-center uppercase font-bold text-[20px] leading-[22px]">{item.name}</h1>
                        <p className="poppins font-semibold text-[15px] leading-[20px] text-center text-[#000000d3] py-[15px] tracking-[0.2px]">{item.text}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Testimonials;
