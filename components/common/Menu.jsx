import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import Text from "./Text";
const linklist = [
  {
    title: "Work",
    path: "/work",
    color: "#FFC700",
  },
  {
    title: "About Me",
    path: "/about",
    color: "#00FAFF",
  },
  {
    title: "Contact",
    path: "/contact",
    color: "#FF00B0",
  },
];
const variants = {
  open: {
    height: "100vh",
    top: 0,
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    height: 0,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.9 },
    top: "-100%",
  },
};

const locationvariants = {
  initial: {
    opacity: "0",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] },
  },
  enter: (index) => ({
    opacity: 1,
    transition: { duration: 1.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};


const Menu= ({ menu, setMenu }) => {
  const menuref = useRef(null);
  return (
    <motion.div
      variants={variants}
      initial={"close"}
      animate={menu ? "open" : "close"}
      style={{ height: "100vh", zIndex: 200 }}
      ref={menuref}
      className="bg-[#000] fixed top-0 w-full left-0 right-0 flex items-center justify-center"
    >
      <div
        onClick={() => setMenu(false)}
        className="w-16 h-16 z-30 absolute top-10 right-10 cursor-pointer text-2xl text-white "
      >
        <RxCross1 />
      </div>

      <div className="h-full z-20 flex items-center justify-center w-[90%] max-w-custom_1 mx-auto">
        <AnimatePresence>
          {menu && (
            <div className="flex w-full flex-col">
              {linklist?.map((x, index) => {
                return (
                  <Text
                    index={index}
                    key={index}
                    x={x}
                    menu={menu}
                    setMenu={setMenu}
                  />
                );
              })}
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
export default Menu;
