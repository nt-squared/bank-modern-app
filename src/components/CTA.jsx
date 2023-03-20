import React from "react";

import Button from "./Button";

const CTA = () => {
  return (
    <section className="flex justify-center items-center my-6 sm:my-16 px-6 py-4 sm:px-16 sm:py-12 flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow">
      <div className="flex-1 flex flex-col font-poppins">
        <h2 className="font-semibold xs:text-5xl text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Let’s try our service now!
        </h2>
        <p className="text-dim-white text-lg leading-[30.8px] max-w-[50ch] mt-5">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className="flex justify-center items-center sm:ml-10 mt-10 sm:mt-0">
        <Button />
      </div>
    </section>
  );
};

export default CTA;
