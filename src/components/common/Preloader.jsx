import React, { useEffect } from "react";
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

  useEffect(() => {
    const text1 = new SplitType(".titleRef");
    const text2 = new SplitType(".hero_text2");
    // hero_text2
    gsap
      .timeline({ defaults: { ease: "SlowMo.easeOut" } })
      .to(
        ".revealer_2",
        {
          height: 0,
          top:'-100%',
          ease: "power3.inOut",
          duration: 1.5,
        },
        0.8
      )
      .to(
        ".revealer_1",
        {
          height: 0,
          ease: "power3.inOut",
          duration: 1,
        },
        1.2
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
        3
      )
      .fromTo(
        text2?.words,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.06,
          duration: 1,
          ease: "power3",
        },
        4
      )
      .fromTo(
        text1?.words,
        {
          y: 300,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 1.6,
          ease: "power3",
        },
       5
      )
      .fromTo(
        ".imageRef",
        { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", opacity: 0 },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          duration: 1,
        },
        6
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
