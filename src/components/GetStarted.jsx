import React from "react";

import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div className="flex items-center justify-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer">
      <div className="flex items-center justify-center flex-col bg-primary w-full h-full rounded-full">
        <div className="flex justify-center items-start">
          <p className="font-poppins font-medium text-lg leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px]" />
        </div>
        <p className="font-poppins font-medium text-lg leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
