import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { motion } from "framer-motion";
import Link from "next/link";
const Footer = () => {

  return (
    <div className="relative min-h-[40vh] pb-20">
      <div className="w-full">
        <div className="flex w-full flex-col overflow-hidden">
          <div
            className="w-full relative whitespace-nowrap flex"
          >
            <Link
              href={
                "mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!"
              }
              className="text-[200px] lg:text-[375px] w-full font-normal font-portfolio_bold1 text-text_dark_1"
            >
              <span className="block -mb-[10px] text-5xl">
                LET'S COLLABORATE
              </span>
              VICTOR ESSIEN <sub className="-ml-[20px] text-4xl">1000©gmail.com</sub>
            </Link>
          </div>
          <div className="w-[90%] max-w-custom mx-auto md:px-20 grid grid-cols-1 md:grid-cols-custom_5 justify-between gap-4">
            <div className="w-full grid grid-cols-3 gap-16">
              <div className="w-full flex flex-col gap-4">
                <h4 className="text-5xl">
                  <sup className="text-2xl">01/</sup> SITEMAP
                </h4>
                <ul className="flex text-3xl flex-col gap-2">
                  <Link href={"/"}>Home</Link>
                  <Link href={"/"}>About</Link>
                  <Link href={"/"}>Works</Link>
                  <Link href={"/"}>Contact</Link>
                </ul>
              </div>
              <div className="w-full flex flex-col gap-4">
                <h4 className="text-5xl">
                  <sup className="text-2xl">02/</sup> SOCIALS
                </h4>
                <ul className="flex text-3xl flex-col gap-2">
                  <Link href={"/"}>Twitter</Link>
                  <Link href={"/"}>Instagram</Link>
                  <Link href={"/"}>Github</Link>
                </ul>
              </div>
            </div>
            <div className="flex w-[300px] justify-start md:justify-end">
              <div className="w-full flex flex-col gap-4">
                <h4 className="text-5xl">
                  <sup className="text-2xl">03/</sup> INFOS
                </h4>
                <ul className="flex text-3xl flex-col gap-2">
                  © Code By Victor Essien 2024
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
