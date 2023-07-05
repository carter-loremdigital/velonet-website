import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
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

      <div className={layout.sectionImg}>
        <img
          src={card}
          alt="card"
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
    </section>
  );
};

export default CardDeal;
