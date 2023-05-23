import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { topsellingapi } from "../data/data";
import "@splidejs/react-splide/css";
import "../arrow.css"
import Item from "./Item";


const Top = () => {
  const splideOptions = {
    perPage: 4,
    perMove: 4,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "3rem",
    pagination: true,
    padding: "1rem",
    breakpoints: {
      1280: { perPage: 3.5 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };

 

  return (
    <div id="product" className=" mt-[120px] px-[80px]">
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
              <Item {...item} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Top;
