"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiBars3BottomRight } from "react-icons/hi2";

import Menu from "./Menu";
import Link from "next/link";
// import { Link } from """;
const linklist = [

  {
    title: "Works",
    path: "work",
    color: "#00FAFF",
  },
  {
    title: "About",
    path: "about",
    color: "#FFC700",
  },


];
const Navbar = ({ type }) => {
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <div className="w-full z-[40000] relative">
      <AnimatePresence mode="wait">
        {<Menu setMenu={setMenu} menu={menu} />}
      </AnimatePresence>

      <div className="w-full py-4">
        <div
          className={`w-[95%] lg:w-[85%] border-b border-[rgba(255,255,255,.2)] mx-auto max-w-custom ${
            type === "contact" ? "text-white" : "text-text_dark_1"
          } flex items-center justify-space gap-4 py-6`}
        >
          <div className="flex items-center gap-2">
            <h4 className="relative z-50 text-2xl lg:w-[300px] w-full overflow-hidden font-portfolio_bold1">
              <motion.span
                animate={{ top: active ? "-100%" : "0" }}
                transition={{ duration: 0.5, ease: [0.75, 0, 0.24, 1] }}
                className="w-full h-full flex items-center flex-col relative"
              >
                <Link
                  href={"/"}
                  className="text-xl lg:text-2xl text-[var(--light-grey)] w-full font-portfolio_bold"
                >
                  Victor Essien
                </Link>
              </motion.span>
            </h4>
          </div>

          <div className="flex flex-1 items-center justify-end">
            <div className="hidden lg:flex item-center justify-end flex-1 gap-12">
              {linklist?.map((link, index) => {
                return (
                  <Link
                    key={index}
                    href={`/${link?.path}`}
                    className="text-lg text-[var(--dark-grey)] font-portfolio_regular"
                  >
                    {link?.title}
                  </Link>
                );
              })}
              <Link
                href={`mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!`}
                className="text-lg text-[var(--dark-grey)] font-portfolio_regular"
              >
                Contact Me
              </Link>
              <Link
                href={`www.linkedin.com/in/victorezekielessien`}
                className="text-lg text-[var(--primary)] font-portfolio_regular"
              >
                linkedln
              </Link>
            </div>
            <div
              onClick={() => setMenu(true)}
              className="w-16 cursor-pointer text-3xl bg-[#242424ed] text-white h-16 flex lg:hidden rounded-full items-center justify-center"
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
