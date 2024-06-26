import React from "react";
import { motion } from "framer-motion";
import { BiMinus, BiPlus } from "react-icons/bi";
const AccordionIndex = ({ expanded, setExpanded, x, index }) => {
  const active = expanded === index;
  return (
    <div className="w-full z-50 border-t py-12 group cursor-pointer border-[rgba(0,0,0,.4)]">
      <div
        onClick={() => setExpanded(active ? false : index)}
        className="h-[50px] group-hover:text-[rgba(0,0,0,.5)] cursor-pointer text-2xl lg:text-3xl flex items-center justify-between font-portfolio_bold2 
        gap-8 md:gap-24 text-text_dark_1"
      >
        <span className="">0{index + 1}</span>
        <span className="text-start flex-1 font-portfolio_bold2 md:mx-2">
          {" "}
          {x?.title}
        </span>
        <span className="relative text-xl">
          <motion.span
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            animate={{ opacity: !active ? 1 : 0 }}
          >
            <BiPlus />{" "}
          </motion.span>
          <motion.span
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            animate={{ opacity: !active ? 0 : 1 }}
            className="absolute left-0 opacity-0 top-0"
          >
            <BiMinus />{" "}
          </motion.span>
        </span>
      </div>
      <motion.div
        animate={{ maxHeight: active ? "16rem" : "0" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="w-full  overflow-hidden"
      >
        <h4 className="text-xl md:text-lg xl:text-2xl w-[85%] lg:w-[65%] pt-8 pb-16 mx-auto font-portfolio_bold1 font-normal">
          {x?.description}
        </h4>
      </motion.div>
    </div>
  );
};

export default AccordionIndex;
