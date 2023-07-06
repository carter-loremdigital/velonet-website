import React from "react";
import styles from "../style";

import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-white p-[2px] cursor-pointer hover:bg-green-300 duration-500`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full hover:bg-[#071e22] duration-500`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-green-300">Get</span>
          </p>
          <img
            src={arrowUp}
            className="w-[23px] h-[23px] object-contain"
            alt="arrow"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-green-300">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
