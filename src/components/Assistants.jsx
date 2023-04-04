import React from "react";
import img1 from "../assets/airbnb.png"
import img2 from "../assets/binance.png"
import img3 from "../assets/coinbase.png"
import img4 from "../assets/dropbox.png"

const Assistants = () => {
  return (
    <div className="mt-[100px] px-[100px] mb-[90px]">
      <div className="text-center">
        <h1 className="poppins font-bold text-[50px] leading-[58px]">
          Assisting Us
        </h1>
        <p className="poppins font-semibold text-[#000000c0] text-[18px] leading-[22px] mt-[5px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex mt-[40px] w-full h-[100px] items-center opacity-[0.5] justify-between">
        <img src={img1} alt="img/1" className="object-contain w-[250px] h-auto" />
        <img src={img2} alt="img/2" className="object-contain w-[250px] h-auto" />
        <img src={img3} alt="img/3" className="object-contain w-[250px] h-auto" />
        <img src={img4} alt="img/4" className="object-contain w-[250px] h-auto" />
      </div>
    </div>
  );
};

export default Assistants;
