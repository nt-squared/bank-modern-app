import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar gap-2">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-between items-center space-x-10">
        {navLinks.map((navLink) => (
          <li
            key={navLink.id}
            className={`font-poppins cursor-pointer text-white`}
          >
            <a href={`#${navLink.id}`}>{navLink.title}</a>
          </li>
        ))}
      </ul>

      {/* MOBILE NAVBAR */}
      <div className="sm:hidden flex justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-7 h-7 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0
            mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col items-start space-y-4">
            {navLinks.map((navLink) => (
              <li
                key={navLink.id}
                className={`font-poppins cursor-pointer text-white`}
              >
                <a href={`#${navLink.id}`}>{navLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
