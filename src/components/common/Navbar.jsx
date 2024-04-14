"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import Menu from "./Menu";
const Navbar = ({ text, path }) => {
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(false);
  const [activetwitter, setActiveTwitter] = useState(false);
  const [activegithub, setActiveGithub] = useState(false);
  const [activelinkedln, setActiveLinkedln] = useState(false);
  return (
    <div className="w-full">
      {/* <AnimatePresence mode="wait">
        {<Menu setMenu={setMenu} menu={menu} />}
      </AnimatePresence> */}

      <div className="w-full mx-auto max-w-custom_2 py-8">
        <div className="w-[95%] mx-auto text-text_dark_1 flex item-center justify-space gap-4">
          <div className="flex items-center gap-2">
            <h4
              onMouseMove={() => setActive(true)}
              // onMouseLeave={() => setActive(false)}
              className="relative uppercase z-50 text-4xl md:w-[300px] w-full overflow-hidden font-portfolio_semibold"
            >
              <motion.span
                animate={{ top: active ? "-100%" : "0" }}
                transition={{ duration: 0.5, ease: [0.75, 0, 0.24, 1] }}
                className="w-full h-full flex items-center flex-col relative"
              >
                <Link href={"/"} className="h-full w-full ">
                  © Code By Eddy
                </Link>
                <Link href={"/"} className="absolute top-[100%] w-full left-0 ">
                  Portfolio © 2024
                </Link>
              </motion.span>
            </h4>
          </div>

          <div className="flex item-center justify-end flex-1 gap-4">
            <div className="w-full flex item-center justify-end gap-8">
              <span className="flex justify-end px-8 w-full text-sm items-center gap-12 ">
                <h4
                  onMouseMove={() => setActiveGithub(true)}
                  onMouseLeave={() => setActiveGithub(false)}
                  className="relative text-4xl hidden md:flex z-50 w-auto overflow-hidden font-portfolio_bold font-normal "
                >
                  <motion.div
                    animate={{ top: activegithub ? "-100%" : "0" }}
                    transition={{ duration: 0.5, ease: [0.75, 0, 0.24, 1] }}
                    className="w-full h-full flex items-center flex-col relative"
                  >
                    <Link
                      href={"https://twitter.com/edidiesky"}
                      target="_blank"
                      className="text-4xl flex items-center gap-2"
                    >
                      Twitter
                    </Link>
                    <Link
                      href={"https://twitter.com/edidiesky"}
                      className="absolute top-[100%] w-full left-0 flex items-center gap-2"
                    >
                      Twitter
                    </Link>
                  </motion.div>
                </h4>

                <h4
                  onMouseMove={() => setActiveTwitter(true)}
                  onMouseLeave={() => setActiveTwitter(false)}
                  className="relative text-4xl hidden md:flex  z-50 w-auto overflow-hidden font-portfolio_bold font-normal "
                >
                  <motion.div
                    animate={{ top: activetwitter ? "-100%" : "0" }}
                    transition={{ duration: 0.5, ease: [0.75, 0, 0.24, 1] }}
                    className="w-full h-full flex items-center flex-col relative"
                  >
                    <Link
                      href={"https://github.com/edidiesky"}
                      target="_blank"
                      className="text-4xl flex items-center gap-2"
                    >
                      Github
                    </Link>
                    <Link
                      href={"https://github.com/edidiesky"}
                      className="absolute top-[100%] w-full left-0 flex items-center gap-2"
                    >
                      Github
                    </Link>
                  </motion.div>
                </h4>

                <h4
                  onMouseMove={() => setActiveLinkedln(true)}
                  onMouseLeave={() => setActiveLinkedln(false)}
                  className="relative text-4xl items-center gap-2 hidden md:flex  z-50 w-auto overflow-hidden font-portfolio_bold font-normal "
                >
                  <motion.div
                    animate={{ top: activelinkedln ? "-100%" : "0" }}
                    transition={{ duration: 0.5, ease: [0.75, 0, 0.24, 1] }}
                    className="w-full h-full flex items-center flex-col relative"
                  >
                    <Link
                      href={
                        "https://www.linkedin.com/in/edidiong-essien-a4b59b1a5/"
                      }
                      target="_blank"
                      className="text-4xl flex items-center gap-2"
                    >
                      LinkedIn
                    </Link>
                    <Link
                      href={
                        "https://www.linkedin.com/in/edidiong-essien-a4b59b1a5/"
                      }
                      className="absolute top-[100%] w-full left-0 flex items-center gap-2"
                    >
                      LinkedIn
                    </Link>
                  </motion.div>
                </h4>
              </span>
              <div className="flex items-center gap-2 md:gap-8">
                <div
                  onClick={() => setMenu(true)}
                  className="w-16 h-16 flex items-center cursor-pointer justify-center rounded-full bg-[#000] hover:bg-[#C5F244] transition-all ease duration-900  shadow-4xl"
                >
                  <div className="bar flex group cursor-pointer justify-end  flex-col gap-1 w-[24px]">
                    <div className="group-hover:w-[50%] ease w-100 h-[2px] bg-[#fff] group-hover:opacity-[.5] transition-all ease duration-900 "></div>
                    <div className="w-100 h-[2px] bg-[#fff] group-hover:opacity-[.5] transition-all ease duration-700 "></div>
                    <div className="w-[70%] h-[2px] bg-[#fff] group-hover:opacity-[.5] transition-all ease duration-700 "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
