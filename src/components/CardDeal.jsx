import React from "react";
import { speed } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={speed}
          alt="card"
          className="w-[100%] h-[100%] object-contain move"
        />

        <div className="absolute z-[3] -left-1/2 -top-[36px] w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 -bottom-[36px] w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" />
          in a few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Consectetur exercitation amet esse qui irure esse. Proident cillum do
          irure Lorem cillum sint ut irure minim officia. Dolore veniam non
          aliquip consequat ea ullamco tempor.
        </p>

        <Button styles="mt-10" />
      </div>
    </section>
  );
};

export default CardDeal;
