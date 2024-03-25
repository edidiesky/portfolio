import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const textvariants = {
  initial: {
    opacity: "0",
    y: 100,
    transition: { duration: 1.7, ease: [0.76, 0, 0.24, 1] },
  },
  enter: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.7,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.8 + index * 0.1,
    },
  }),
  exit: (index) => ({
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.1 + index * 0.07,
    },
  }),
};

const Text = ({ menu, setMenu, x, index }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="h-full w-full overflow-hidden flex items-center justify-center">
      <motion.h1
        variants={textvariants}
        initial={"initial"}
        animate={"enter"}
        exit={"exit"}
        custom={index}
        key={index}
        onMouseLeave={() => setActive(false)}
        onMouseOver={() => setActive(true)}
        className="list text-5xl lg:text-7xl border-b flex items-center justify-center border-[rgba(255,255,255,.05)] h-20 overflow-hidden w-full z-20 
                                relative font-normal text-white uppercase font-portfolio_bold"
      >
        <motion.div
          animate={{ top: active ? "-100%" : "0" }}
          transition={{ duration: 0.5, ease: [0.75, 0, 0.24, 1] }}
          className="menulist relative h-full w-full"
        >
          <h1 className="list text-5xl lg:text-7xl w-full flex items-center justify-center h-full z-20 font-normal text-white uppercase font-portfolio_bold">
            <Link href={`${x?.path}`}>{x?.title}</Link>
          </h1>

          <h1
            style={{ color: `${x?.color}` }}
            className="list text-5xl absolute text-[#00FAFF] top-[100%] left-0 lg:text-7xl w-full flex items-center justify-center h-full z-20 font-normaluppercase font-portfolio_bold bg-cover bg-blend-multiply"
          >
            <Link className="w-full text-center" href={`${x?.path}`}>
              {x?.title}
            </Link>
          </h1>
        </motion.div>
      </motion.h1>
    </div>
  );
};
export default Text;
