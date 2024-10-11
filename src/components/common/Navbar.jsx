"use client";
import React, { useState } from "react";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { HiBars3BottomRight } from "react-icons/hi2";
import Magnetic from "@/components/animations/Magnetic";
import Menu from "./Menu";
import Link from "next/link";
// import { Link } from """;
const linklist = [
  {
    title: "Home",
    path: "",
    color: "#00FAFF",
  },
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
  const [menu, setMenu] = useState(false);
  return (
    <div
      style={{
        backdropFilter: "blur(54px)",
      }}
      className="w-full z-[40000] py-4 md:py-0 border-b border-[rgba(255,255,255,.1)] left-0 top-0 bg-[rgb(0 0 0 / 32%)]"
    >
      <AnimatePresence mode="wait">
        {<Menu setMenu={setMenu} menu={menu} />}
      </AnimatePresence>

      <div className="w-full py-0 md:py-4 z-[4000] ">
        <div
          className={`w-[95%] lg:w-[85%] mx-auto max-w-custom ${
            type === "contact" ? "text-white" : "text-text_dark_1"
          } flex items-center justify-space gap-4 py-4`}
        >
          <div className="flex items-center gap-4">
            <img
              alt="Cotion"
              src={"/images/profile_6.jpg"}
              className="w-[50px] rounded-full h-[50px] object-cover"
            />
            <h4 className="relative  md:flex hidden z-50 text-2xl lg:w-[300px] w-full overflow-hidden font-portfolio_bold1">
              <Link
                href={"/"}
                className="text-xl lg:text-2xl text-[var(--light-grey)] w-full font-portfolio_bold"
              >
                Victor Essien
              </Link>
            </h4>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <div className="hidden lg:flex item-center justify-end flex-1 gap-8">
              {linklist?.map((link, index) => {
                return (
                  <Link
                    key={index}
                    href={`/${link?.path}`}
                    className="text-lg hover:text-[var(--primary)] text-[var(--light-grey)] font-portfolio_regular"
                  >
                    {link?.title}
                  </Link>
                );
              })}

              <Link
                href={`www.linkedin.com/in/victorezekielessien`}
                className="text-lg text-[var(--primary)] font-portfolio_regular"
              >
                Linkedin
              </Link>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end gap-4">
            <Link
              style={{
                transition: "all .6s",
              }}
              href={`mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!`}
              className="text-lg w-[180px] h-[50px] rounded-full border hover:text-[#000] text-[var(--light-grey)] font-portfolio_regular"
            >
              <Magnetic bgColor={"#fff"}>Contact Me!</Magnetic>
            </Link>
            <div
              onClick={() => setMenu(true)}
              className="cursor-pointer text-2xl text-white flex lg:hidden rounded-full items-center justify-center"
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
