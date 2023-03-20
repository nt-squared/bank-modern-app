import React from "react";

import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className="flex flex-col justify-center items-center py-6 sm:py-16 relative"
    >
      <div className="absolute z-0 w-3/5 h-3/5 -right-1/2 rounded-full blue__gradient"></div>
      <div className="w-full flex flex-col justify-between items-center md:flex-row mb-6 sm:mb-16 relative z-[1] font-poppins">
        <h2 className="font-semibold xs:text-5xl text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          What people are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full mt-6 md:mt-0">
          <p className="text-dim-white text-lg leading-[30.8px] max-w-[40ch]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-between justify-center md:space-x-10 sm:space-x-5 w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
