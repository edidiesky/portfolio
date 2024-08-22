import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import styled from "styled-components";
import gsap from "gsap";
import { timeline } from "motion";
const Preloader = () => {
  const countRef = useRef(null);
  const countRef2 = useRef(null);
  //   function get
  const getSectionHeight = (element) => {
    const { height } = element.getBoundingClientRect();
    const { childElementCount } = element;
    // console.log(childElementCount, height / childElementCount);
    return height / childElementCount;
  };
  useEffect(() => {
    if (countRef.current && countRef2?.current) {
      const transformAmount = getSectionHeight(countRef?.current);
      const transformAmount2 = getSectionHeight(countRef2?.current);
      //   console.log(transformAmount);
      const sequence = new Array(5).fill("").flatMap((_, index) => [
        [countRef?.current, { y: `-${transformAmount * (index + 1)}px ` }],
        [
          countRef2?.current,
          { y: `-${transformAmount2 * (index + 1)}px ` },
          { at: `-1.8` },
        ],
      ]);
      timeline(sequence, {
        defaultOptions: {
          easing: [0.77, 0, 0.175, 1],
          duration: 2,
        },
      });
    }
  }, []);

  useEffect(() => {
    const text1 = new SplitType(".titleRef");
    const text2 = new SplitType(".hero_text2");
    // hero_text2
    gsap
      .timeline()
      .to(
        ".revealer_3",
        {
          left: "110%",
          ease: "power4.inOut",
          duration: 1.5,
        },
        9.8
      )
      .to(
        ".revealer_2",
        {
          left: "110%",
          ease: "power4.inOut",
          duration: 1.3,
        },
        10.4
      )
      .to(
        ".revealer_1",
        {
          left: "110%",
          ease: "power4.inOut",
          duration: 1.2,
        },
        10.5
      )

      .to(
        ".pre_loader",
        {
          scale: 1.5,
          opacity: 0,
          display: "none",
          duration: 1,
          ease: "power4.inOut",
        },
        11
      )
      .fromTo(
        text2?.chars,
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.7,
          ease: "power3.out",
        },
        11.7
      )
      // open_to_work
      .fromTo(
        ".open_to_work",
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        12
      )
      .fromTo(
        text1?.lines,
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.03,
          duration: 0.6,
          ease: "power3.out",
        },
        12.6
      )
      .fromTo(
        ".imageRef",
        { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", opacity: 0 },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        }
      );
  }, []);

  return (
    <PreloaderStyles className="flex items-center pre_loader justify-center">
      <div
        style={{ background: `#988871` }}
        className="revealer_1 absolute h-full top-0 left-0 items-center  justify-center w-full block"
      ></div>

      <div
        style={{ background: `#383838` }}
        className="revealer_2 absolute h-full top-0 left-0 items-center justify-center w-full block"
      ></div>

      <div
        style={{ background: `var(--primary)` }}
        className="revealer_3 absolute h-full top-0 left-0 p-12 md:p-20 items-end justify-end w-full flex"
      >
        <div className="h-[20vh] md:h-[35vh] overflow-hidden min-h-[20vh] md:min-h-[35vh]">
          <ul className="counter-list" ref={countRef}>
            <li>
              <h3 className="md:text-[35vh] md:leading-[35vh] text-[20vh] leading-[20vh] text-[#fff]">
                0
              </h3>
            </li>
            <li>
              <h3 className="md:text-[35vh] md:leading-[35vh] text-[20vh] leading-[20vh] text-[#fff]">
                2
              </h3>
            </li>
            <li>
              <h3 className="md:text-[35vh] md:leading-[35vh] text-[20vh] leading-[20vh] text-[#fff]">
                4
              </h3>
            </li>
            <li>
              <h3 className="md:text-[35vh] md:leading-[35vh] text-[20vh] leading-[20vh] text-[#fff]">
                6
              </h3>
            </li>
            <li>
              <h3 className="md:text-[35vh] md:leading-[35vh] text-[20vh] leading-[20vh] text-[#fff]">
                9
              </h3>
            </li>
          </ul>
        </div>

        <div className="h-[20vh] md:h-[35vh] min-h-[20vh] md:min-h-[35vh] overflow-hidden">
          <ul className="counter-list" ref={countRef2}>
            <li>
              <h3 className="md:text-[35vh] md:leading-[35vh] text-[20vh] leading-[20vh] text-[#fff]">
                1
              </h3>
            </li>
            <li>
              <h3 className="md:text-[35vh] md:leading-[35vh] text-[20vh] leading-[20vh] text-[#fff]">
                3
              </h3>
            </li>
            <li>
              <h3 className="md:text-[35vh] md:leading-[35vh] text-[20vh] leading-[20vh] text-[#fff]">
                5
              </h3>
            </li>
            <li>
              <h3 className="md:text-[35vh] md:leading-[35vh] text-[20vh] leading-[20vh] text-[#fff]">
                8
              </h3>
            </li>
            <li>
              <h3 className="md:text-[35vh] md:leading-[35vh] text-[20vh] leading-[20vh] text-[#fff]">
                9
              </h3>
            </li>
          </ul>
        </div>
      </div>
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
