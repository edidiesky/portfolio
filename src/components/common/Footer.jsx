import React, { useRef, useState } from "react";
import Link from "next/link";
import { opacity, slideup, slideup2, slideup3 } from "@/constants/utils/framer";
import { motion, useInView } from "framer-motion";
const Footer = () => {
  const [active, setActive] = useState(false);
  const [mouseposition, setMousePosition] = useState({
    active: false,
    index: 0,
  });
  const container2 = useRef(null);
  const inView2 = useInView(container2, {
    margin: "0px 100px -50px 0px",
  });
  const heroWords2 = `LET US BUILD THAT PR0JECT TOGETHER`;
  return (
    <>
      <div className="relative min-h-[40vh] flex flex-col justify-between py-8 pt-32">
        <div className="w-[90%] md:w-[85%] max-w-custom mx-auto flex flex-col items-center gap-24">
          <div className="flex w-full pb-28 lg:pb-24 border-b border-[rgba(0,0,0,.1)] relative items-center gap-2">
            <h2
              ref={container2}
              className="text-[90px] sm:w-[700px] flex flex-wrap gap-[8px] font-portfolio_bold leading-[.9] lg:text-[150px] text-dark"
            >
              {heroWords2.split(" ").map((x, index) => {
                return (
                  <span
                    key={index}
                    className="flex hide relative items-center justify-start"
                  >
                    <motion.span
                      variants={slideup2}
                      custom={index}
                      initial="initial"
                      animate={inView2 ? "animate" : "exit"}
                    >
                      {x}
                    </motion.span>
                  </span>
                );
              })}
            </h2>
            <Link
              href={
                "mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!"
              }
              className="absolute flex items-center hover:opacity-[.7] justify-center font-portfolio_bold1 text-sm text-white right-10 -bottom-20 w-40 h-40 md:w-48 md:h-48 rounded-full bg-[#455CE9]"
            >
              Keep In Touch
            </Link>
          </div>
          <div className="w-full pt-8 flex flex-col items-center sm:flex-row justify-between gap-16">
            <h4 className=" text-base pb-8 font-portfolio_bold1 border-b border-[rgba(0,0,0,.1)] sm:pb-0 sm:border-b-0 text-dark">
              © Code By Victor Essien 2024
            </h4>
            <div className="flex font-portfolio_bold1 flex-col md:justify-end gap-2">
              <h4 className="text-base text-dark font-portfolio_bold1">
                SOCIALS
              </h4>
              <ul className="flex text-base text-dark items-center gap-16">
                <Link href={"https://twitter.com/edidiesky"}>Twitter</Link>
                <Link
                  href={
                    "https://www.linkedin.com/in/edidiong-essien-a4b59b1a5/"
                  }
                >
                  LinkedLn
                </Link>
                <Link href={"https://github.com/edidiesky"}>Github</Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
