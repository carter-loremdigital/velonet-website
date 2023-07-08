import React from "react";

const Button = ({ styles, text }) => {
  return (
    <button
      type="button"
      className={`${styles} py-4 px-6 bg-green-300 text-green-900 font-poppins font-medium text-[18px] outline-none rounded-[10px]`}
    >
      {text}
    </button>
  );
};

export default Button;
