import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";
import Link from "next/link";
import { scaleAnimations } from "@/constants/utils/framer";
const Footer = () => {
  const [active, setActive] = useState(false);
  const [mouseposition, setMousePosition] = useState({
    active: false,
    index: 0,
  });
  const labelRef = useRef(null);


  return (
    <>
      <div className="relative min-h-[40vh] flex flex-col justify-between py-12 pt-40">
        <div className="w-[85%] max-w-custom mx-auto flex flex-col items-center gap-24">
          <div className="flex w-full pb-28 lg:pb-24 border-b border-[rgba(0,0,0,.1)] relative items-center gap-2">
            <h2
              ref={labelRef}
              className="text-[90px] md:w-[700px] leading-[1] lg:text-[150px] text-dark"
            >
              LET US BUILD THAT PR0JECT TOGETHER
            </h2>
            <Link
              href={
                "mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!"
              }
              className="absolute flex items-center justify-center text-3xl text-white right-10 -bottom-20 w-40 h-40 md:w-48 md:h-48 rounded-[10px] bg-[#455CE9]"
            >
              Stay In Touch
            </Link>
          </div>
          <div className="w-full pt-8 flex flex-col md:flex-row justify-between gap-16">
            <h4 className="text-4xl pb-8 border-b border-[rgba(0,0,0,.1)] md:pb-0 md:border-b-0 text-dark">
              © Code By Victor Essien 2024
            </h4>
            <div className="flex flex-col justify-end gap-4">
              <h4 className="text-4xl text-dark">SOCIALS</h4>
              <ul className="flex text-3xl text-dark items-center gap-16">
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
