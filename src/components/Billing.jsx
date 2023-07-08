import React from "react";
import { apple, security, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id="product" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Full control over your
          <br className="sm:block hidden" />
          privacy and personal data.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Manage your account, passwords, and privacy settings all from our
          mobile app. You can even set time limits and parental controls when
          it's time to unplug.
        </p>

        {/* <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" /> */}

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <a href="https://www.apple.com/app-store/">
            <img
              src={apple}
              alt="apple store"
              className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
            />
          </a>
          <a href="https://play.google.com/store/">
            <img
              src={google}
              alt="google store"
              className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
            />
          </a>
        </div>
      </div>

      <div className={layout.sectionImg}>
        <img
          src={security}
          alt="billing"
          className="w-[100%] h-[100%] relative object-contain move"
        />
      </div>
    </section>
  );
};

export default Billing;

// Testing Vercel
