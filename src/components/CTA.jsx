import React from "react";

import styles from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[#071e22] rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col ">
        <h2 className={styles.heading2}>Ready for better internet?</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Join VeloNet today and upgrade to the next level of internet
          performance and reliability. Start a new 1 year contract for a 20%
          discount!
        </p>
      </div>

      <div
        className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 green__glow rounded-[10px]`}
      >
        <Button text={"Get Started"} />
      </div>
    </section>
  );
};

export default CTA;
