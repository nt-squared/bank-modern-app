import React from "react";

import { stats } from "../constants";

const Stats = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center flex-wrap sm:mb-20 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="font-poppins flex-1 grid grid-cols-2 md:grid-cols-[auto_1fr] items-center m-3"
        >
          <h4 className="font-semibold xs:text-[40px] text-3xl xs:leading-[53px] leading-[43px] text-white md:text-start text-end">
            {stat.value}
          </h4>
          <p className="xs:text-xl text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
