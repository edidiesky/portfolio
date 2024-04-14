import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";
import Link from "next/link";
const Footer = () => {
  const [active, setActive] = useState(false);
  const [mouseposition, setMousePosition] = useState({
    active: false,
    index: 0,
  });
  const sliderRef = useRef(null);
  const firstSliderTextRef = useRef(null);
  const secondSliderTextRef = useRef(null);

  let sliderPosition = 0;
  let sliderDirection = -1;

  useEffect(() => {
    const { ScrollTrigger } = window.gsap;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(sliderRef.current, {
      x: "-=500px",
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.2,
        onUpdate: (e) => (direction = e.direction * -1),
      },
    });
    requestAnimationFrame(handleSliderPosition);
  }, []);
  const handleSliderPosition = () => {
    if (sliderPosition <= -150) {
      sliderPosition = 0;
    }
    if (sliderPosition > 0) {
      sliderPosition = -150;
    }
    gsap.set(firstSliderTextRef.current, { xPercent: sliderPosition });
    gsap.set(secondSliderTextRef.current, { xPercent: sliderPosition });
    sliderPosition += 0.2 * sliderDirection;
    requestAnimationFrame(handleSliderPosition);
  };

  return (
    <div className="relative min-h-[40vh] pb-20">
      <div className="w-full">
        <div className="flex w-full flex-col overflow-hidden">
          <div
            ref={sliderRef}
            className="w-full relative whitespace-nowrap flex"
          >
            <Link
              ref={firstSliderTextRef}
              href={
                "mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!"
              }
              className="text-7xl md:text-[375px] w-full font-normal font-portfolio_bold1 text-text_dark_1 uppercase"
            >
              LETUSCOLLABORATE
            </Link>
            <Link
              ref={secondSliderTextRef}
              href={
                "mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!"
              }
              className="text-7xl absolute left-[150%] md:text-[375px] w-full font-normal font-portfolio_bold1 text-text_dark_1 uppercase"
            >
              LETUSCOLLABORATE
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
