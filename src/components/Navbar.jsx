import React from "react";
import { useState } from "react";

import { close, companyLogo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  // useState for mobile nav icon
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* Company logo */}
      <img
        src={companyLogo}
        alt="hoobank"
        className="w-[150px] h-[48px] object-contain"
      />

      {/* Nav links */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:border-b-4 border-b-green-300 ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Navbar */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* Menu icon */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        {/* Mobile nav links */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-[#071e22] absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white  ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-8"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
