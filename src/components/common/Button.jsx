import React from "react";
import Magnetic from "../animations/Magnetic";

const Button = ({ text, bgColor, color, type }) => {
  if (type === "dark") {
    return (
      <button
        style={{ transition: "all .6s" }}
        className={` border border-[rgba(0,0,0,.4)] 
              text-dark min-w-[96%] md:min-w-[260px] h-[75px] rounded-[40px] family1 hover:text-[#fff] text-[ #000] text-light`}
      >
        <Magnetic bgColor={bgColor}> {text}</Magnetic>
      </button>
    );
  }
  if (type === "white") {
    return (
      <button
        style={{ transition: "all .6s", background: `#fff` }}
        className={`
              text-dark min-w-[96%] hover:text-white md:min-w-[260px] h-[75px] family1 rounded-[40px] text-light`}
      >
        <Magnetic bgColor={bgColor}> {text}</Magnetic>
      </button>
    );
  }
  return (
    <button
      style={{ transition: "all .6s" }}
      className={` border rounded-[40px] border-[rgb(230,229,229)] 
              text-dark min-w-[96%] md:min-w-[260px] h-[75px] family1 hover:text-[#000] text-[#fff] text-light`}
    >
      <Magnetic bgColor={bgColor}> {text}</Magnetic>
    </button>
  );
};

export default Button;
