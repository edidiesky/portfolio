import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import SplitType from "split-type";
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
      <div className="relative min-h-[40vh] bg-[#000] flex flex-col justify-between py-12 pt-40">
        <div className="w-[85%] mx-auto flex flex-col items-center gap-24">
          <div className="flex w-full pb-28 lg:pb-24 border-b border-[rgba(255,255,255,.1)] relative items-center gap-2">
            <h2
              ref={labelRef}
              className="text-[100px] md:w-[700px] leading-[1] lg:text-[140px] text-white"
            >
              LET US BUILD THAT PR0JECT TOGETHER
            </h2>
            <Link
              href={
                "mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!"
              }
              className="absolute flex items-center justify-center text-3xl text-white right-10 -bottom-20 w-40 h-40 md:w-48 md:h-48 rounded-full bg-[#455CE9]"
            >
              Stay In Touch
            </Link>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between gap-16">
            <h4 className="text-4xl pb-8 border-b border-[rgba(255,255,255,.1)] md:pb-0 md:border-b-0 text-white">
              © Code By Victor Essien 2024
            </h4>
            <div className="flex flex-col justify-end gap-4">
              <h4 className="text-4xl text-white">SOCIALS</h4>
              <ul className="flex text-3xl text-white items-center gap-16">
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

// return (
//   <>
//     <motion.span
//       ref={mouseRef}
//       variants={scaleAnimations}
//       initial="initial"
//       animate={mouseposition?.active ? "enter" : "exit"}
//       className="w-56 z-[42] absolute h-56 rounded-full shadow-2xl flex items-center justify-center text-[12px] text-white font-portfolio_bold bg-[#2e2e30]"
//     ></motion.span>
//     <motion.span
//       variants={scaleAnimations}
//       initial="initial"
//       animate={mouseposition?.active ? "enter" : "exit"}
//       ref={labelRef}
//       className="w-28 z-[42] h-28 absolute rounded-full flex items-center justify-center text-[10px] text-white font-portfolio_bold1"
//     >
//       <Link
//         className="text-center text-5xl w-full"
//         target="_blank"
//         href={
//           "mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!"
//         }
//       >
//         Message Me
//       </Link>
//     </motion.span>
//     <div className="relative min-h-[40vh] py-40">
//       <div
//         onMouseEnter={() =>
//           setMousePosition({
//             active: false,
//           })
//         }
//         className="absolute  top-0 w-full h-full z-[36]"
//       ></div>
//       <div className="w-full">
//         <div className="flex w-[90%] max-w-custom mx-auto flex-col overflow-hidden">
//           <div
//             ref={sliderRef}
//             onMouseEnter={() =>
//               setMousePosition({
//                 active: true,
//               })
//             }
//             className="w-full relative z-[40] whitespace-nowrap flex"
//           >
//             <Link
//               ref={firstSliderTextRef}
//               href={
//                 "mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!"
//               }
//               className="text-[200px] lg:text-[375px] w-full font-normal font-portfolio_bold1 text-text_dark_1 uppercase"
//             >
//               LET-US-COLLABORATE
//             </Link>
//             <Link
//               ref={secondSliderTextRef}
// href={
//   "mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!"
// }
//               className=" absolute -right-[100%] text-[200px] lg:text-[375px] w-full font-normal font-portfolio_bold1 text-text_dark_1 uppercase"
//             >
//               LET-US-COLLABORATE
//             </Link>
//           </div>
// <div
//   onMouseEnter={() =>
//     setMousePosition({
//       active: false,
//     })
//   }
//   className="w-[90%] z-[46] max-w-custom mx-auto md:px-20 grid grid-cols-1 md:grid-cols-custom_5 justify-between gap-4"
// >
//   <div className="w-full grid grid-cols-3 gap-16">
//     <div className="w-full flex flex-col gap-4">
//       <h4 className="text-5xl">
//         <sup className="text-2xl">01/</sup> SITEMAP
//       </h4>
//       <ul className="flex text-3xl flex-col gap-2">
//         <Link href={"/"}>Home</Link>
//         <Link href={"/about"}>About</Link>
//         <Link href={"/work"}>Works</Link>
//         <Link href={"/contact"}>Contact</Link>
//       </ul>
//     </div>
//     <div className="w-full flex flex-col gap-4">
//       <h4 className="text-5xl">
//         <sup className="text-2xl">02/</sup> SOCIALS
//       </h4>
//       <ul className="flex text-3xl flex-col gap-2">
//         <Link href={"https://twitter.com/edidiesky"}>Twitter</Link>
//         <Link
//           href={
//             "https://www.linkedin.com/in/edidiong-essien-a4b59b1a5/"
//           }
//         >
//           LinkedLn
//         </Link>
//         <Link href={"https://github.com/edidiesky"}>Github</Link>
//       </ul>
//     </div>
//   </div>
//   <div className="flex w-[300px] justify-start md:justify-end">
//     <div className="w-full flex flex-col gap-4">
//       <h4 className="text-5xl">
//         <sup className="text-2xl">03/</sup> INFOS
//       </h4>
//       <ul className="flex text-3xl flex-col gap-2">
//         © Code By Victor Essien 2024
//       </ul>
//     </div>
//   </div>
// </div>
//         </div>
//       </div>
//     </div>
//   </>
// );
