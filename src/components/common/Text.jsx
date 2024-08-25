"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import AnimateText from "../animations/AnimateText";

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

const Text = ({ x, index, setMenu }) => {
  return (
    <div className="h-full overflow-hidden flex items-center justify-center">
      <motion.h1
        variants={textvariants}
        initial={"initial"}
        animate={"enter"}
        exit={"exit"}
        custom={index}
        key={index}
        className="text-start h-24 overflow-hidden w-full z-20 
      relative font-normal text-white uppercase family2"
      >
        <Link
          onClick={() => setMenu(false)}
          href={`${x?.path}`}
          className="text-6xl lg:text-8xl font-portfolio_bold w-full
         z-20 font-normal text-white uppercase family2"
        >
          <AnimateText color={x?.color}>{x?.title}</AnimateText>
        </Link>
      </motion.h1>
    </div>
  );
};
export default Text;
