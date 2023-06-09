import React from "react";
import img from "../assets/img4.jpg";
import { motion } from "framer-motion";

const Services2 = () => {
  return (
    <div className="ml-[100px] flex items-center mt-[80px] gap-[80px]">
      <motion.img initial={{x:"-100%",opacity:0}} whileInView={{x:0,opacity:1}}
        src={img}
        alt="shoe/img"
        className="w-[460px] h-auto rounded-2xl object-contain"
      />

      <motion.div initial={{x:"100%",opacity:0}} whileInView={{x:0,opacity:1}}  >
        <h1 className="poppins font-bold text-[58px] leading-[64px]">
          Dedicated to <br /> quality and results
        </h1>
        <p className="poppins font-semibold text-[#000000c0] text-[18px] leading-[22px] mt-[25px]">
          Providing the best shoe of various types and manufacturing <br />
          them for true travel lovers. These items are lightweight and <br />
          comfortable.
        </p>
        <button className="bg-[#8a86e2] text-slate-200 poppins font-semibold text-[16px] leading-tight p-[12px] rounded-md mt-[15px]">Read More</button>
      </motion.div>
    </div>
  );
};

export default Services2;
