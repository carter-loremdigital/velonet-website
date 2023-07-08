import React from "react";

import styles from "../style";
import { discount, robot, connect } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img
            src={discount}
            alt="discount"
            className="w-[32px] h-[32px] filter-svg"
          />
          <p className={`${styles.paragraph} ml-2`}>
            20% <span className="text-green-300">Discount</span> For New{" "}
            <span className="text-white">1 Year</span> Contracts
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The
            {/* <br className="sm:block hidden" />{" "} */}{" "}
            <span className="text-green-300">Smarter</span>
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Way to Connect
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With our state-of-the-art infrastructure and advanced network
          technology, we empower individuals and businesses to stay connected,
          work seamlessly, and unlock the full potential of the digital world.
        </p>
      </div>

      {/* Right side of screen */}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={connect}
          alt="connect"
          className="w-[90%] h-[90%] relative z-[5] object-contain move"
        />

        {/* Background gradients */}

        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      {/* Display get started button below image on mobile */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
