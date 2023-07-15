import React, { useState } from "react";
import styled from "styled-components";
import TextIndex from "../common/Text";

const whatIdoData = [
  "Responsive design",
  "Api development",
  "Animations",
  "Maintainable Codebase",
];

export default function AboutIndex() {
  return (
    <SkillsWrapper id="about">
      <div className="left w-85 auto h-100 flex column">
        <div className="w-100">
          <h4
            style={{ fontWeight: "normal" }}
            className="text-grey family2 text-start flex item-center gap-2"
          >
            <img
              src="https://v2.brittanychiang.com/img/icons/settings.png"
              alt=""
              className="icon1"
            />
            What I Do
          </h4>
        </div>
        <div className="w-100 grid">
          <div className="left flex item-start column">
            {whatIdoData.map((x, index) => {
              return (
                <div className="w-100 hidden">
                  <h2
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={index * 250}
                    className="text-grey w-100 uppercase text-start"
                  >
                    <TextIndex x={x} />
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  place-items: center;
  padding: 6rem 0;
  padding-top: 6rem;
  transform-style: inherit;
  /* background-color: rgba(13, 13, 13, 0.81) !important; */

  .line .span {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(13, 13, 13);
    background-color: rgba(13, 13, 13, 0.852);
  }
  .text1,
  .head {
    @media (max-width: 580px) {
      width: 90%;
      text-align: start;
      margin: 0;
    }
  }

  .heads::after {
    position: absolute;
    width: 100px;
    height: 2px;
    background-color: var(--secondary);
    bottom: -25%;
    left: 0%;
    content: "";
  }
  h2 {
    letter-spacing: 1px;
    font-weight: normal;
    font-size: 100px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 0;

    @media (max-width: 980px) {
      font-size: 90px;
      /* font-weight: bold; */
    }
    @media (max-width: 780px) {
      font-size: 70px;
      /* font-weight: bold; */
    }
    @media (max-width: 380px) {
      font-size: 55px;
    }
  }

  .icon1 {
    filter: brightness(100%);
    transition: all 0.6s ease;
  }
  img {
    width: 4rem;
    @media (max-width: 480px) {
      width: 4rem;
    }
  }
  .left {
    padding: 3rem 0;
  }
`;
