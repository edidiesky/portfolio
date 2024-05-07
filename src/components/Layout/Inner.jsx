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

export default function Layout({ children, type }) {
  if(type === 'contact') {
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
             <Navbar type={'contact'} />
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
        className="page"
      >
        <motion.div
          variants={opacityVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
        <div className=" wrapperlink flex items-center flex-col gap-4">
        <Link
                        href={"https://github.com/edidiesky"}
          target="_blank"
          className="socials hover:bg-[#afafaf] flex items-center justify-center rounded-full"
        >
          <BsGithub fontSize={'24px'} />
        </Link>
        <Link
         href={"https://twitter.com/edidiesky"} target="_blank"
          className="socials hover:bg-[#afafaf] flex items-center justify-center rounded-full"
        >
          <BsTwitter fontSize={'24px'} />
        </Link>
        <Link
            href={
              "https://www.linkedin.com/in/edidiong-essien-a4b59b1a5/"
             }
          target="_blank"
          className="socials hover:bg-[#afafaf] flex items-center justify-center rounded-full"
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
const ContactLayOutStyles = styled.div`
  background-color: black;
  .page {
    background-color: #000;
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
  .socials {
    width: 40px;
    height: 40px;
  }
  .wrapperlink {
    position: fixed;
    bottom: -5%;
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
