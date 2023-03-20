import React from "react";

import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center sm:py-16 py-6">
      <div className="flex flex-col md:flex-row justify-center items-start mb-8 w-full">
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={logo} alt="hoobank" className="w-[266px] h-[72px]" />
          <p className="font-poppins text-dim-white text-lg leading-[30.8px] mt-4 max-w-[30ch]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex justify-between flex-wrap mt-10 md:mt-0">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col my-4 ss:my-0 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-lg leading-[27px] text-white mb-4">
                {footerLink.title}
              </h4>
              <ul className="list-none grid gap-4">
                {footerLink.links.map((link) => (
                  <li
                    key={link.name}
                    className="font-poppins text-dim-white hover:text-secondary cursor-pointer"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins text-center text-lg leading-[27px] text-white">
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>

        <div className="flex justify-between space-x-6 mt-6 md:mt-0">
          {socialMedia.map((social) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className="w-[21px] h-[21px] cursor-pointer"
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
