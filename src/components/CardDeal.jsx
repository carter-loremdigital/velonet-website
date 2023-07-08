import React from "react";
import { speed } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.sectionReverse}>
      {/* Left side image */}
      <div className={layout.sectionImgReverse}>
        <img
          src={speed}
          alt="card"
          className="w-[100%] h-[100%] z-[5] object-contain move"
        />

        <div className="absolute z-[0] -left-2/3 -top-[20%] w-[40%] h-[80%] rounded-full white__gradient" />
        <div className="absolute z-[1] -left-2/3 -top-[20%] w-[40%] h-[80%] rounded-full blue__gradient" />
      </div>

      {/* Right side content */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Blazing fast internet <br className="sm:block hidden" />
          in the palm of your hand.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With gigabit speeds available, we've got you covered. Whether you're
          streaming, gaming, or working from home, your connection will always
          keep up, even on multiple devices.
        </p>

        <Button styles="mt-10" text={"Check Speeds"} />
      </div>
    </section>
  );
};

export default CardDeal;
