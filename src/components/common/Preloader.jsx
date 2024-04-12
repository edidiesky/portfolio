import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SplitType from "split-type";
import styled from "styled-components";
import gsap from "gsap";
const Preloader = () => {
  const [index, setIndex] = React.useState(0);
  const wordsArray = [
    "I",
    "am",
    "Victor",
    "Essien",
    "A",
    "Software",
    "Developer",
    "Welcome",
    "to",
    "my ",
    "wonderful",
    "Victor portfolio  ©2024",
  ];

  React.useEffect(() => {
    if (index === wordsArray?.length - 1) return;
    const timer = setTimeout(
      () => setIndex(index + 1),
      index === 0 ? 1000 : 150
    );
    return () => clearTimeout(timer);
  }, [index]);

     useEffect(() => {
       const text1 = new SplitType(".titleRef");
       const textrefelement_1 = new SplitType(".hero_text_2");
       const textrefelement = new SplitType(".hero_text_3");
       gsap
         .timeline({ defaults: { ease: "SlowMo.easeOut" } })
         .to(".pre_loader", {
           duration: 3,
           ease: "power4.out",
         })
         .to(
           ".loader_text",
           {
             y: -140,
             duration: 1.3,
             ease: "power3.out",
           },
           4
         )
         .to(
           ".loader_text",
           {
             opacity: 0,
             duration: 0.6,
             ease: "power3.out",
           },
           4.2
         )
         .to(
           ".revealer_2",
           {
             height: 0,
             ease: "power3.inOut",
             duration: 1.5,
           },
           4.6
         )
         .to(
           ".revealer_1",
           {
             height: 0,
             ease: "power3.inOut",
             duration: 1,
           },
           5
         )

         .to(
           ".pre_loader",
           {
             scale: 1.5,
             opacity: 0,
             display: "none",
             duration: 2,
             ease: "power3.out",
           },
           6.6
         )
         .fromTo(
           text1?.words,
           {
             y: 80,
             opacity: 0,
           },
           {
             y: 0,
             opacity: 1,
             stagger: 0.1,
             duration: 2,
             ease: "power4.inOut",
           },
           7.2
         )
         .fromTo(
           '.imageRef',
           { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", opacity: 0 },
           {
             clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
             opacity: 1,
             duration: 2,
           },
           8.6
         );
     }, []);

  return (
    <PreloaderStyles className="flex items-center pre_loader justify-center">
      <div
        style={{ background: `#988871` }}
        className="revealer_1 absolute h-full top-0 left-0 items-center justify-center w-full block"
      ></div>

      <div
        style={{ background: `#000` }}
        className="revealer_2 absolute h-full top-0 left-0 items-center justify-center w-full block"
      ></div>
      {/* <h2 className="absolute text-2xl md:text-3xl text-white font-extrabold font-portfolio_bold top-10 left-10">
        VICTOR ESSIEN
        <span className="block">PORTFOLIO ©2024</span>
      </h2> */}
      <h2
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: index * 0.8,
          ease: [0.76, 0, 0.24, 1],
        }}
        // style={{letterSpacing:"1px"}}
        className="text-lg overflow-hidden loader_text relative text-white font-normal uppercase font-portfolio_bold"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: index * 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          // style={{letterSpacing:"1px"}}
          className="text-white"
        >
          {wordsArray[index]}
        </motion.span>
      </h2>
    </PreloaderStyles>
  );
};

const PreloaderStyles = styled.div`
  width: 100vw;
  position: fixed;
  height: 100vh;
  background: #fff;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 4000;
`;

export default Preloader;
