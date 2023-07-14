import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";

export default function HeroIndex() {
  // useEffect(() => {

  // }, []);


  return (
    <WorkWrapper>
      <div className="w-85 auto">
        <div className="w-100 hero">
          <div className="left w-100 h-100 flex justify-center item-center column gap-2">
            <div className="hidden">
              {" "}
              <h4 id="text" className="herotext">
                Edidiong Essien
              </h4>
            </div>
            <div className="flex textwrapper w-100 hidden column">
              <div className="flex column">
                <div className="hidden">
                  <h2 className="text-grey text1 hidden text-center">Making</h2>
                </div>
                <div className="hidden">
                  {" "}
                  <h2 className="text-grey text1 hidden text-center">
                    <span className="text-secondary">good stuffs</span>
                  </h2>
                </div>
                <div className="hidden">
                  <h2 className="text-grey text1 hidden text-center">
                    a reality
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WorkWrapper>
  );
}

const WorkWrapper = styled.div`
  background-color: #151315;
  width: 100%;
  padding: 8rem 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  @media (max-width: 780px) {
    padding: 8rem 0;
  }

  .char {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    transform: translateY(300px);
  }

  .social {
    opacity: 0;
  }
  .content {
    width: 19rem;
    height: 25rem;
  }
  .wrapperlink {
    padding-top: 5rem;
  }
  h2 {
    font-size: 15rem;
    line-height: 130px;
    font-weight: normal;
    width: 50%;
    margin: 0 auto;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    /* transition: all .5s; */

    @media (max-width: 980px) {
      line-height: 100px;
      font-size: 14rem;
      width: 90%;
    }

    @media (max-width: 780px) {
      line-height: 100px;
      font-size: 120px;
    }
    @media (max-width: 590px) {
      line-height: 90px;
      font-size: 110px;
      width: 90%;
    }
    @media (max-width: 390px) {
      line-height: 75px;
      font-size: 86px;
      width: 100%;
      font-weight: normal;
    }
  }
`;
