import React from "react";

import styles from "../style";
import { companyLogo as logo } from "../assets";
import { lorem } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        {/* Left side image and content */}
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="logo"
            className="w-[200px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            An internet service provider, for the modern era.
          </p>
        </div>

        {/* Footer links */}
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.title}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-green-300 cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Link to github and image credit */}
      <div className="flex w-full justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <div>
          <p className="font-poppins font-normal sm:text-start text-center text-[18px] leading-[27px] text-white">
            Made by{" "}
            <a
              href="https://www.loremdigital.co/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lorem Digital
            </a>{" "}
            {/* <img src={github} className="w-[24px] h-[24px] inline-block" /> */}
            <img src={lorem} className="w-[24px] h-[24px] inline-block" />
          </p>
          <p className="font-poppins font-normal sm:text-start text-center text-[14px] leading-[27px] text-gray-500">
            Images from{" "}
            <a
              href="https://www.freepik.com/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freepik
            </a>
          </p>
        </div>

        {/* Social media icons */}
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={social.icon}
                alt="social"
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
