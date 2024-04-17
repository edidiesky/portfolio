import React, { useRef } from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import Text from "./Text";
const linklist = [
  {
    title: "Home",
    path: "/",
    color: "#00ffc8",
  },
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
    x: "0",
    top: 0,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    x: "100vw",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1], delay: 1.2 },
  },
};

const Menu = ({ menu, setMenu }) => {
  const menuref = useRef(null);
  return (
    <motion.div
      variants={variants}
      initial={"close"}
      animate={menu ? "open" : "close"}
      style={{ height: "100vh" }}
      ref={menuref}
      className="bg-[#000] flex md:hidden fixed z-[60] top-0 w-full -right-[0%] lg:right-0 items-center justify-center"
    >
      <div
        onClick={() => setMenu(false)}
        className="w-16 h-16 z-[80] rounded-full border border-[rgba(255,255,255,.3)] flex items-center justify-center absolute top-10 right-10 cursor-pointer text-2xl text-white "
      >
        <RxCross1 />
      </div>

      <div className="h-full z-[60] relative flex flex-col items-center justify-between w-[90%] max-w-custom_1 mx-auto">
        <div className="h-full w-full items-center justify-center flex">
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
      </div>
    </motion.div>
  );
};
export default Menu;
