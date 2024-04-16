import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub, BsTwitter } from "react-icons/bs";
import Link from "next/link";
import { slide, opacity, perspective } from "./anim";
import Navbar from "../common/Navbar";

const anim = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

const opacityVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 1,
  },
};

export default function Layout({ children }) {
  return (
    <LayOutStyles>
      <motion.div
        variants={slide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="slide"
      ></motion.div>
      <motion.div
        variants={perspective}
        initial="initial"
        animate="enter"
        exit="exit"
        className="page"
      >
        <motion.div
          variants={opacityVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
        <div className=" wrapperlink flex items-center flex-col gap-8">
        <Link
                        href={"https://github.com/edidiesky"}
          target="_blank"
          className="social"
        >
          <BsGithub fontSize={'24px'} />
        </Link>
        <Link
         href={"https://twitter.com/edidiesky"} target="_blank"
          className="social"
        >
          <BsTwitter fontSize={'24px'} />
        </Link>
        <Link
            href={
              "https://www.linkedin.com/in/edidiong-essien-a4b59b1a5/"
             }
          target="_blank"
          className="social"
        >
          <FaLinkedinIn fontSize={'24px'} />
        </Link>
        <div className="arrow"></div>
      </div>
          <Navbar />
          {children}
        </motion.div>
      </motion.div>
    </LayOutStyles>
    // <div className="inner">
    //   {/* <motion.div className="slide" {...anim(slide)} /> */}
    //   {/* <motion.div {...anim(opacity)}>
    //     <div className="header">
    //       <Link href="/">Home</Link>
    //       <Link href="/about">About</Link>
    //       <Link href="/contact">Contact</Link>
    //     </div>
    //     {children}
    //   </motion.div>
    // </div> */}
  );
}

const LayOutStyles = styled.div`
  background-color: black;
  .page {
    background-color: white;
  }
  .slide {
    height: 100vh;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: white;
    z-index: 1;
  }
  .wrapperlink {
    position: fixed;
    bottom: 10%;
    left: 3%;
    z-index: 30000;
    height: 50vh;
    @media (max-width: 780px) {
      left: 1%;
      bottom: 0;
      display: none;
    }
    .arrow {
      height: 300px;
      width: 0.2px;
      background-color: #000;
    }
  }
`;
