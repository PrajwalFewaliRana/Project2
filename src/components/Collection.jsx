import React from "react";
import { catalogapi } from "../data/data";
import img from "../assets/leg.png";

const Collection = () => {
  return (
    <div className="flex gap-[50px] mt-[10px] pl-[100px]">
      {catalogapi.map((item,index) => (
        <div key={item.id} className="">
          <div className="w-[200px] h-[200px] rounded-lg relative">
            <img
              src={item.img}
              alt="collection/img"
              className="w-full h-full object-cover rounded-lg cursor-pointer"
            />
            <div className={`absolute top-[10px] right-[10px] text-[27px] cursor-pointer ${index === 1 ? "text-white":"text-[#0007]"}`}>
              {item.icon1}
            </div>
          </div>
          <div className="flex justify-between items-center mt-[20px]">
            <div>
              <h1 className="poppins font-semibold text-[18px] leading-tight text-[#000000dc] tracking-[0.5px]">
                {item.name}
              </h1>
              <p className="poppins font-semibold text-[#00000086] text-[12px] leading-[14px]">
                Price:{" "}
                <span className="text-[#000000c4] font-semibold text-[14px] leading-[14px]">
                  {item.price}
                </span>
              </p>
            </div>
            <button className="bg-[#fdc400] p-[5px] rounded-md text-[24px]">
              {item.icoon2}
            </button>
          </div>
        </div>
      ))}
      <div className="h-[340px] w-[400px] ml-[100px] -mt-[20px]">
        <img src={img} alt="leg/img" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Collection;
