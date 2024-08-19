"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiBars3BottomRight } from "react-icons/hi2";

import Link from "next/link";
import Menu from "./Menu";
const Navbar = ({ type }) => {
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(false);
  const [activetwitter, setActiveTwitter] = useState(false);
  const [activegithub, setActiveGithub] = useState(false);
  const [activelinkedln, setActiveLinkedln] = useState(false);
  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {<Menu setMenu={setMenu} menu={menu} />}
      </AnimatePresence>

      <div className="w-full py-4">
        <div
          className={`w-[95%] mx-auto max-w-custom ${
            type === "contact" ? "text-white" : "text-text_dark_1"
          } flex items-center justify-space gap-4`}
        >
          <div className="flex items-center gap-2">
            <h4 className="relative z-50 text-2xl md:w-[300px] w-full overflow-hidden font-portfolio_bold1">
              <motion.span
                animate={{ top: active ? "-100%" : "0" }}
                transition={{ duration: 0.5, ease: [0.75, 0, 0.24, 1] }}
                className="w-full h-full flex items-center flex-col relative"
              >
                <Link
                  href={"/"}
                  className="text-3xl w-full font-portfolio_bold"
                >
                  Victor Essien
                </Link>
              </motion.span>
            </h4>
          </div>

          <div className="flex item-center justify-end flex-1 gap-4">
            <div
              onClick={() => setMenu(true)}
              className="w-16 cursor-pointer text-3xl bg-[#242424ed] text-white h-16 cursor-pointer flex rounded-full items-center justify-center"
            >
              <HiBars3BottomRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
