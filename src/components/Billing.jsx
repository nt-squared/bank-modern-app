import React from "react";

import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <section
      id="product"
      className="flex flex-col-reverse md:flex-row py-6 sm:py-16"
    >
      <div className="flex-1 flex justify-center items-center md:mr-10 mt-10 md:mt-0 relative">
        <img src={bill} alt="bill" className="w-full h-full relative z-[5]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient"></div>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient"></div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-start font-poppins">
        <h2 className="font-semibold text-[40px] xs:text-5xl text-white leading-[66.8px] xs:leading-[76.8px] w-full">
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p className="text-dim-white text-lg leading-[30.8px] max-w-[40ch] mt-5">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-wrap mt-6 sm:mt-10">
          <img
            src={apple}
            alt="apple-store"
            className="w-32 h-[42px] mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google-play"
            className="w-32 h-[42px] cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
