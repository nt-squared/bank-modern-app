import React from "react";

import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] my-5 feedback-card">
      <img src={quotes} alt="double_quotes" className="w-[42px] h-[27px]" />
      <p className="font-poppins text-lg leading-8 text-white my-10">
        {content}
      </p>
      <div className="flex">
        <img src={img} alt={name} className="w-12 h-12 rounded-full" />
        <div className="grid grid-flow-row ml-4 font-poppins">
          <h4 className="font-semibold text-xl leading-8 text-white">{name}</h4>
          <p className="text-dim-white">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
