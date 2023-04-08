import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { topsellingapi } from "../data/data";
import "@splidejs/react-splide/css";
import "../arrow.css"
import { motion } from "framer-motion";

const Top = () => {
  const splideOptions = {
    perPage: 4,
    perMove: 4,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "4.3rem",
    pagination: true,
    padding: "1.5rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
    <div id="product" className=" mt-[120px] px-[90px]">
      <div className="text-center">
        <h1 className="poppins font-bold text-[50px] leading-[58px]">
          A Top-Selling Products
        </h1>
        <p className="poppins font-semibold text-[#000000c0] text-[18px] leading-[22px] mt-[5px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
          nam? Asperiores doloremque cupiditate eveniet quaerat
        </p>
      </div>
      <div className="mt-[80px]">
        <Splide options={splideOptions}>
          {topsellingapi.map((item, index) => (
            <SplideSlide key={item.id}>
              <div>
                <div 
                  className={`h-[300px] w-[270px] bg-gradient-to-b ${item.color} ${item.shadow} over relative rounded-lg flex items-center justify-center`}
                >
                  <button className="absolute bg-[#fdc400] rounded-full text-[25px] p-[5px] z-[1] top-[15px] right-[10px]">{item.icon1}</button>
                  <motion.img initial={{rotate:0, scale:0}} whileInView={{rotate:"15deg",scale:1.1}}
                    className="h-auto w-full rotate-[15deg] object-contain origin-bottom cursor-pointer "
                    src={item.img}
                    alt="top/img"
                  />
                </div>
                <div className="flex items-center justify-between py-[12px]">
                  <h1 className="poppins font-semibold text-[18px] leading-[18px]">{item.title}</h1>
                  <p className="poppins font-semibold text-[18px] leading-[18px]">${item.price}</p>
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="flex gap-[10px] items-center poppins text-[#fdc400] font-semibold text-[14px] leading-tight">
                    {item.btn}<span className="text-[24px] leading-tight">{item.icon2}</span>
                  </h1>
                  <p className="poppins font-semibold text-[13px] leading-tight text-[#000000da]">{item.quan}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Top;
