import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Menu from "./Menu";
const Navbar = ({ text, path }) => {
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(false);
  const [activetwitter, setActiveTwitter] = useState(false);
  const [activegithub, setActiveGithub] = useState(false);
  const [activelinkedln, setActiveLinkedln] = useState(false);
  return (
    <div className="w-full sticky top-0 left-0 z-50">
      <Menu setMenu={setMenu} menu={menu} />
      <div className="w-100 w-full px-8 m-auto max-w-custom_2 py-8">
        <div className="w-90 auto hero_top_wrapper text-text_dark_1 flex item-center justify-space gap-4">
          <h4
            onMouseMove={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className="relative z-50 text-[10px] lg:w-[300px] w-full overflow-hidden font-portfolio_bold1 font-normal "
          >
            <motion.span
              animate={{ top: active ? "-100%" : "0" }}
              transition={{ duration: 0.5, ease: [0.75, 0, 0.24, 1] }}
              className="w-full h-full flex items-center flex-col relative"
            >
              <Link href={"/"} className="h-full w-full ">
                VICTOR ESSIEN
              </Link>
              <Link href={"/"} className="absolute top-[100%] w-full left-0 ">
                PORTFOLIO ©2024
              </Link>
            </motion.span>
          </h4>
          <div className="flex item-center justify-end flex-1 gap-4">
            <div className="w-full flex item-center justify-end gap-4">
              <div className="flex items-center gap-2 md:gap-8">
                <h4
                  onMouseMove={() => setActiveGithub(true)}
                  onMouseLeave={() => setActiveGithub(false)}
                  className="relative text-[10px] z-50 w-auto overflow-hidden font-portfolio_bold1 font-normal "
                >
                  <motion.div
                    animate={{ top: activegithub ? "-100%" : "0" }}
                    transition={{ duration: 0.5, ease: [0.75, 0, 0.24, 1] }}
                    className="w-full h-full flex items-center flex-col relative"
                  >
                    <Link
                      href={"https://twitter.com/edidiesky"}
                      target="_blank"
                      className="text-[10px]"
                    >
                      Twitter
                    </Link>
                    <Link
                      href={"https://twitter.com/edidiesky"}
                      className="absolute top-[100%] w-full left-0 "
                    >
                      Twitter
                    </Link>
                  </motion.div>
                </h4>

                <h4
                  onMouseMove={() => setActiveTwitter(true)}
                  onMouseLeave={() => setActiveTwitter(false)}
                  className="relative text-[10px]  z-50 w-auto overflow-hidden font-portfolio_bold1 font-normal "
                >
                  <motion.div
                    animate={{ top: activetwitter ? "-100%" : "0" }}
                    transition={{ duration: 0.5, ease: [0.75, 0, 0.24, 1] }}
                    className="w-full h-full flex items-center flex-col relative"
                  >
                    <Link
                      href={"https://github.com/edidiesky"}
                      target="_blank"
                      className="text-[10px]"
                    >
                      Github
                    </Link>
                    <Link
                      href={"https://github.com/edidiesky"}
                      className="absolute top-[100%] w-full left-0 "
                    >
                      Github
                    </Link>
                  </motion.div>
                </h4>

                <h4
                  onMouseMove={() => setActiveLinkedln(true)}
                  onMouseLeave={() => setActiveLinkedln(false)}
                  className="relative text-[10px]  z-50 w-auto overflow-hidden font-portfolio_bold1 font-normal "
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
                      className="text-[10px]"
                    >
                      LinkedIn
                    </Link>
                    <Link
                      href={
                        "https://www.linkedin.com/in/edidiong-essien-a4b59b1a5/"
                      }
                      className="absolute top-[100%] w-full left-0 "
                    >
                      LinkedIn
                    </Link>
                  </motion.div>
                </h4>

                <div
                  onClick={() => setMenu(true)}
                  className="bar flex group cursor-pointer justify-end  flex-col gap-1 w-[24px]"
                >
                  <div className="group-hover:w-[50%] ease w-100 h-[2px] bg-[#000] group-hover:opacity-[.5] transition-all ease duration-900 "></div>
                  <div className="w-100 h-[2px] bg-[#000] group-hover:opacity-[.5] transition-all ease duration-700 "></div>
                  <div className="w-[70%] h-[2px] bg-[#000] group-hover:opacity-[.5] transition-all ease duration-700 "></div>
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
