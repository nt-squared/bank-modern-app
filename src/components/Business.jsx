import React from "react";

import { features } from "../constants";
import Button from "./Button";

const FeatureCard = ({ icon, content, title }) => {
  return (
    <div className="flex p-6 rounded-[20px] feature-card">
      <div className="w-16 h-16 rounded-full flex justify-center items-center bg-dim-blue">
        <img src={icon} alt="feature-icon" className="w-1/2 h-1/2" />
      </div>
      <div className="flex-1 grid grid-rows-[auto_1fr] ml-3 font-poppins">
        <h4 className="font-semibold text-white text-lg leading-[23px] mb-1">
          {title}
        </h4>
        <p className="text-dim-white">{content}</p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id="features" className="flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex-1 flex flex-col justify-center items-start ">
        <h2 className="font-poppins font-semibold xs:text-5xl text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className="font-poppins text-dim-white text-lg leading-[30.8px] max-w-[50ch] mt-5">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className="flex-1 flex flex-col justify-center items-center md:mr-10 md:mt-0 mt-10 relative">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Business;
