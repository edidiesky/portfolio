import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub, BsTwitter } from "react-icons/bs";
import Link from "next/link";
import { slide, opacity, perspective } from "./anim";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

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

export default function Layout({ children, type }) {
  if (type === "contact") {
    return (
      <ContactLayOutStyles>
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
            <Navbar type={"contact"} />
            {children}
          </motion.div>
        </motion.div>
      </ContactLayOutStyles>
    );
  }
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
        className="page w-full "
      >
        {/* <div className="w-full z-[10] fixed top-0 left-0 min-h-screen grid grid-cols-4 md:grid-cols-8">
          <div className="background_line h-full w-[1px]"></div>
          <div className="background_line h-full w-[1px]"></div>
          <div className="background_line h-full w-[1px]"></div>
          <div className="background_line h-full w-[1px]"></div>
          <div className="background_line h-full w-[1px] hidden md:flex"></div>
          <div className="background_line h-full w-[1px] hidden md:flex"></div>
          <div className="background_line h-full w-[1px] hidden md:flex"></div>
          <div className="background_line h-full w-[1px] hidden md:flex"></div>
        </div>  */}
        <motion.div
          variants={opacityVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          className="w-full grid grid-cols-1"
        >
          <Navbar />
          <div className="w-full">{children}</div>
          <Footer />
        </motion.div>
      </motion.div>
    </LayOutStyles>
  );
}
const ContactLayOutStyles = styled.div`
  background-color: black;
  width: 100%;
  .page {
    background-color: #000;
  }
  .slide {
    min-height: 100vh;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    /* background-color: #f0f3ec; */
    z-index: 1;
  }
  .socials {
    width: 100px;
    height: 100px;
  }
  .wrapperlink {
    position: fixed;
    bottom: 10%;
    left: 2%;
    z-index: 30000;
    /* height: 80vh; */
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

const LayOutStyles = styled.div`
  background-color: black;
  .slide {
    height: 100vh;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;

    background-color: #f0f3ec;
    z-index: 1;
  }
  .socials {
    width: 50px;
    height: 50px;
  }
  .wrapperlink {
    position: fixed;
    bottom: 10%;
    left: 1%;
    z-index: 30000;
    height: 80vh;
    @media (max-width: 780px) {
      left: 1%;
      bottom: 0;
      display: none;
    }
    .arrow {
      height: 150px;
      width: 0.2px;
      background-color: #000;
    }
  }
`;
