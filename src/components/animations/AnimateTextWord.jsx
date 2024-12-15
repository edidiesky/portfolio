import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { slideup, LargeSlideUp } from "@/constants/utils/framer";

// animattions to staggerText
const AnimateTextWord = ({ children, type }) => {
  const AnimateTextRef = useRef(null);
  const inView = useInView(AnimateTextRef, {
    margin: "0px 100px -120px 0px",
    once:true
  });
  if (type === "largeText") {
    return (
      <span
        ref={AnimateTextRef}
        className="flex gap-[5px] flex-wrap w-full items-center relative"
      >
        {children?.split(" ").map((data, index) => {
          return (
            <div key={index} className="inline-flex hide relative">
              <motion.span
                variants={LargeSlideUp}
                custom={index}
                initial="initial"
                animate={inView ? "animate" : "exit"}
              >
                {data === " " ? "\u00A0" : data}
              </motion.span>
            </div>
          );
        })}
      </span>
    );
  }
  return (
    <div className="w-full flex">
      <div
        ref={AnimateTextRef}
        className="flex flex-wrap gap-y-[4px] gap-x-[5px] w-full items-center relative"
      >
        {children?.split(" ").map((data, index) => {
          return (
            <span key={index} className="inline-flex hide relative">
              <motion.span
                variants={slideup}
                custom={index}
                initial="initial"
                animate={inView ? "animate" : "exit"}
              >
                {data === " " ? "\u00A0" : data}
              </motion.span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default AnimateTextWord;
