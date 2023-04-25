import React from "react";
import img from "../assets/nike-adapt-bb.png";
import { motion } from "framer-motion";


const Hero = () => {

  return (
    <div id="home" className="flex pl-[100px] items-center justify-between pr-[80px]">
      <div className=" w-auto">
        <h1 className="poppins font-bold text-[65px] leading-[78px]">
          <span className="text-[#fcc402]">Shoe</span> of The <br /> Best
          Quality
        </h1>
        <p className="poppins font-semibold text-[18px] leading-[22px] my-[25px] text-[#33312fde]">
          Production and sale of the best shoe of various types for <br /> true
          travel lovers. Feel the lightness and comfort of these items
        </p>
        <button className="poppins text-[20px] leading-tight font-normal bg-[#fdc400] py-[15px] px-[25px] rounded-md btnshadow tracking-wide ">
          Open Catalog
        </button>     
      </div>
      <div className="w-[550px] h-auto relative">
        <div init className="w-full  h-auto  shadow1 z-[9]">
          <motion.img initial={{rotate:0}} whileInView={{rotate:"-25deg"}} className="w-full trans h-auto object-contain " src={img} alt="main/img" />
        </div>
        <motion.button whileInView={{x:0,opacity:1}} initial={{x:'-300%',opacity:0}} className="flex absolute top-0 -left-[50px] bg-[#7b29dd] items-center gap-[15px] py-[10px] px-[25px] rounded-lg circle">
          <h1 className="poppins text-white text-[32px]">15%</h1>
          <p className="poppins text-[#e5b6ff] text-[14px] font-semibold leading-tight text-start">
            Get up <br /> to 15% off
          </p>
        </motion.button>
        <motion.button whileInView={{x:0,opacity:1}} initial={{x:'100%',opacity:0}} className="bg-[#7a29df] absolute right-0 -bottom-[150px] flex items-center gap-[10px] py-[10px] px-[15px] rounded-xl">
          <div className="bg-[#ffac44] rounded-full poppins text-white h-[40px] w-[40px] leading-[40px] font-semibold text-[14px]">1k+</div>
          <h1 className="poppins text-white text-start font-semibold text-[16px] leading-[13px] tracking-wide">All Sneakers <br /> <span className="text-[#e5b6ff] text-[9px] leading-[9px] font-semibold">Sell on product</span></h1>
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
