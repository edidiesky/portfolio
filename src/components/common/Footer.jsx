import React, { useRef, useState } from "react";
import Link from "next/link";
import { opacity, slideup, slideup2, slideup3 } from "@/constants/utils/framer";
import { motion, useInView } from "framer-motion";
import AnimateTextWord from "../animations/AnimateTextWord";
import Magnetic from "../animations/Magnetic";
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
  const heroWords2 = `LET US BUILD That `;
  const heroWords = `project together`;
  return (
    <>
      <div className="relative min-h-[40vh] flex flex-col justify-between py-8">
        <div className="w-[90%] max-w-custom mx-auto flex flex-col items-center gap-16">
          <div className="flex w-full pb-28 lg:pb-24 border-b border-[rgba(0,0,0,.1)] relative items-center gap-2">
            <h2
              ref={container2}
              className="text-5xl uppercase lg:text-8xl font-portfolio_bold text-dark"
            >
              <AnimateTextWord children={heroWords2} />
              <AnimateTextWord children={heroWords} />
            </h2>
            <div className="flex flex-1 items-center md:justify-end">
              <Link
                href={
                  "mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!"
                }
                className="flex items-center md:justify-end font-portfolio_bold1
               text-sm text-[var(--dark-1)]  w-40 h-20  rounded-[60px] bg-[#fff]"
              >
                <Magnetic bgColor={"#8f8f8f"} children={"Contact me"} />
              </Link>
            </div>
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
