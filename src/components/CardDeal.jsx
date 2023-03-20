import React from "react";

import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className="flex flex-col md:flex-row py-6 sm:py-16">
      <div className="flex-1 flex flex-col justify-center items-start font-poppins">
        <h2 className="font-semibold text-[40px] xs:text-5xl text-white leading-[66.8px] xs:leading-[76.8px] w-full">
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className="text-dim-white text-lg leading-[30.8px]">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className="flex-1 flex justify-center items-center md:ml-10 md:mt-0 mt-10 relative">
        <img src={card} alt="card" className="w-full h-full" />
      </div>
    </section>
  );
};

export default CardDeal;
