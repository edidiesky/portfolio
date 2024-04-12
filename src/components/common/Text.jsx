import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Link from "next/link";

const textvariants = {
  initial: {
    opacity: "0",
    y: 200,
    transition: { duration: 2, ease: [0.76, 0, 0.24, 1] },
  },
  enter: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.1 + index * 0.17,
    },
  }),
  exit: (index) => ({
    opacity: 0,
    y: 200,
    transition: {
      duration: 1.5,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.1 + index * 0.17,
    },
  }),
};

const Text = ({ menu, setMenu, x, index }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="h-full py-4 z-[80] relative w-full overflow-hidden flex items-center justify-center">
      <motion.h1
        onClick={() => setMenu(false)}
        variants={textvariants}
        initial={"initial"}
        animate={"enter"}
        exit={"exit"}
        custom={index}
        key={index}
        onMouseLeave={() => setActive(false)}
        onMouseOver={() => setActive(true)}
        className="list text-5xl z-[80] lg:text-7xl flex items-center justify-center h-full overflow-hidden w-full 
       relative font-normal text-white uppercase font-portfolio_bold"
      >
        <motion.div
          animate={{ top: active ? "-100%" : "0" }}
          transition={{ duration: 0.7, ease: [0.75, 0, 0.24, 1] }}
          className="menulist relative h-full z-[80] w-full"
        >
          <h1 className="list text-5xl z-[80] lg:text-7xl w-full flex items-center justify-center h-full font-normal text-white uppercase font-portfolio_bold">
            <Link href={`${x?.path}`} className="z-[80]">
              {x?.title}
            </Link>
          </h1>

          <h1
            style={{ color: `${x?.color}` }}
            className="list text-5xl z-[80] absolute text-[#00FAFF] top-[100%] left-0 lg:text-7xl w-full flex items-center justify-center h-full font-normaluppercase font-portfolio_bold bg-cover bg-blend-multiply"
          >
            <Link className="w-full text-center z-[80]" href={`${x?.path}`}>
              {x?.title}
            </Link>
          </h1>
        </motion.div>
      </motion.h1>
    </div>
  );
};
export default Text;
