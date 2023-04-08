import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { favouriteapi } from "../data/data";
import { motion } from "framer-motion";


const Favourates = () => {
  const splideOptions = {
    perPage: 1,
    perMove: 1,
    type: "loop",
    rewind: false,
    keyboard: "global",
    gap: "4.3rem",
    pagination: false,
    padding: "1.5rem",
    breakpoints: {
      1200: { perPage: 1 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
    <div className="mt-[180px] px-[100px]">
      <div className="text-center">
        <h1 className="poppins font-bold text-[50px] leading-[58px]">
          Our Favorite Collections
        </h1>
        <p className="poppins font-semibold text-[#000000c0] text-[18px] leading-[22px] mt-[5px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
          temporibus commodi eum quod!
        </p>
      </div>
      <div id="collection" className="my-[60px]">
        <Splide options={splideOptions}>
          {favouriteapi.map((item) => (
            <SplideSlide key={item.id}>
              <div className="w-full ">
                <div className="w-full flex items-center justify-between h-[42.5vh] gap-[32px] mb-[32px] overflow-hidden">
                  <motion.img initial={{x:"-100%",opacity:0}} whileInView={{x:0,opacity:1}}
                    src={item.Image_1}
                    alt="img_1"
                    className="object-cover h-full w-[25%] rounded-lg cursor-pointer "
                  />
                  <motion.img initial={{y:"-100%",opacity:0}} whileInView={{y:0,opacity:1}}
                    src={item.Image_2}
                    alt="img_2"
                    className="flex-1 object-cover h-full w-50% rounded-lg cursor-pointer "
                  />
                  <motion.img initial={{x:"100%",opacity:0}} whileInView={{x:0,opacity:1}}
                    src={item.Image_3}
                    alt="img_3"
                    className="object-cover h-full w-[25%] rounded-lg cursor-pointer "
                  />
                </div>
                <div className="w-full h-[42.5vh] flex items-center justify-between px-[230px] gap-[32px]">
                  <motion.img initial={{y:"100%",opacity:0}} whileInView={{y:0,opacity:1}}
                    src={item.Image_4}
                    alt="img_4"
                    className="object-cover h-full w-[50%] rounded-lg cursor-pointer"
                  />
                  <motion.img initial={{y:"100%",opacity:0}} whileInView={{y:0,opacity:1}}
                    src={item.Image_5}
                    alt="img_5"
                    className="object-cover h-full w-[50%] rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Favourates;
