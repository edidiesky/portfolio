import React, { useRef, useState } from "react";
import Link from "next/link";

import { useInView } from "framer-motion";
import AnimateTextWord from "../animations/AnimateTextWord";
import Magnetic from "../animations/Magnetic";
import { socialsList } from "@/constants/data/text";
const Footer = () => {
  const container2 = useRef(null);
  const inView2 = useInView(container2, {
    margin: "0px 100px -50px 0px",
  });
  const linklist = [
    {
      title: "Home",
      path: "",
      color: "#FF00B0",
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

    {
      title: "Contact",
      path: "mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!",
      color: "#FF00B0",
    },
  ];
  return (
    <>
      <div className="relative  w-full hide blur-0 bg-[#000] z-[40000] pb-12 pt-12 md:pt-20 flex flex-col justify-between">
        <div className="w-[95%] max-w-custom mx-auto flex flex-col items-center gap-16">
          {/* top side */}
          <div className="flex flex-col gap-12 w-full">
            <div
              className="py-6 border-t grid md:grid-cols-2 w-full items-center justify-between border-[rgba(255,255,255,.3)] border-b text-2xl 
            text-[var(--light-grey)]"
            >
              <span className="text-base md:text-lg text-white uppercase">
                VICTOR | NOUN | a person who defeats an enemy or opponent in a
                battle, game, or other competition.{" "}
              </span>
              <span className="text-lg md:text-end uppercase">
                VICTORSCRIPT©2024
              </span>
            </div>
            <h1 className="text-5xl max-w-[780px] w-full uppercase py-8 md:py-12 md:text-6xl">
              <AnimateTextWord>
                why wont you give a thumb up to hi@VICTORSCRIPT.com
              </AnimateTextWord>
            </h1>
          </div>
          <div className="w-full overflow-hidden flex items-center justify-center">
            <Link
              style={{ transition: "all .5s" }}
              href={
                "mailto:victoressienscript@gmail.com?subject=Hey! lets work! Love your works!"
              }
              className="w-full md:w-[560px] text-[#fff] hover:text-[#000] text-lg md:text-3xl font-normal h-[100px] md:h-[150px] border rounded-full"
            >
              <Magnetic bgColor={"#fff"}>VICTORESSIENSCRIPT@gmail.com</Magnetic>
            </Link>
          </div>
          <div className="py-8 w-full flex items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <h4 className="relative z-50 text-2xl overflow-hidden font-portfolio_bold1">
                <Link
                  href={"/"}
                  className="text-xl md:text-2xl text-[var(--light-grey)] w-full font-portfolio_bold"
                >
                  Victor Essien
                </Link>
              </h4>
            </div>

            <div className="flex justify-center items-center">
              <div className="hidden md:flex item-center justify-end flex-1 gap-12">
                {/* <div
              onClick={() => setMenu(true)}
              className="w-16 cursor-pointer text-3xl bg-[#242424ed] text-white h-16 flex rounded-full items-center justify-center"
            >
              <HiBars3BottomRight />
            </div> */}
                {linklist?.map((link, index) => {
                  return (
                    <Link
                      key={index}
                      href={`/${link?.path}`}
                      className="text-lg text-[var(--light-grey)] font-portfolio_regular"
                    >
                      {link?.title}
                    </Link>
                  );
                })}
                <Link
                  href={`www.linkedin.com/in/victorezekielessien`}
                  className="text-lg text-[var(--primary)] font-portfolio_regular"
                >
                  linkedln
                </Link>
              </div>
            </div>
            <div className="flex justify-end gap-8 items-center">
              {socialsList?.map((skill, index) => {
                return (
                  <Link
                    key={index}
                    href={`${skill?.path}`}
                    className="text-2xl md:text-4xl text-white"
                  >
                    {skill?.icon}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
