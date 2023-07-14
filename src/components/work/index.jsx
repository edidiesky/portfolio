import React from "react";
import styled from "styled-components";
import Button from "../common/button";

const workdata = [
  {
    image:
      "https://kalanidhithemes.com/live-preview/landing-page/delici/img/p5.jpg",
    description:
      "This is a clone of streaming platform. It houses a client side and a server side built with the tools below",
    tools: ["NEXT.JS", "styled-components"],
    link1: "",
    link2: "https://github.com/edidiesky/airbnb",
    text: "Restaurant Landing Page",
  },
  {
    image: "./cloning_2.jpg",
    description:
      "This is a clone of the  rental platform, Airbnb. It houses a client side and a server side built with the tools below. ",
    tools: ["REACT.JS", "styled-components", "NODEJS", "EXPRESSJS", "MONGODB"],
    link1: "https://airbnb-wa21.onrender.com",
    link2: "https://github.com/edidiesky/airbnb",
    text: "Airbnb",
  },
  {
    image: "./fiverr.png",
    description:
      "This is a clone of streaming platform. It houses a client side and a server side built with the tools below",
    tools: ["REACT.JS", "styled-components", "NODEJS", "EXPRESSJS", "MONGODB"],
    link1: "",
    link2: "https://github.com/edidiesky/fiverrClone_1-",
    text: "Fiverr",
  },
  // {
  //   image: "./cloning_2.jpg",
  //   description:
  //     "This is a clone of streaming platform. It houses a client side and a server side built with the tools below",
  //   tools: [
  //     "NEXT.JS",
  //
  //     "styled-components",
  //     "NODEJS",
  //     "EXPRESSJS",
  //     "MONGODB",
  //     "TYPESCRIPT",
  //   ],
  //   link1: "",
  //   link2: "https://github.com/edidiesky/airbnb",
  //   text: "Car Dealer",
  // },
];

export default function WorkIndex() {
  return (
    <SkillsWrapper id="work">
      <div className="left w-85 auto h-100 flex column gap-3">
        <div className="w-100">
          <h4
            style={{ fontWeight: "normal" }}
            className="text-grey family1 text-start flex item-center gap-2"
          >
            <img
              src="https://v2.brittanychiang.com/img/icons/repair-tools.png"
              alt=""
              className="icon1"
            />
            My Works
          </h4>
        </div>
        <div id="cards" className="w-100 cardWrapper flex column gap-4">
          {workdata.map((x, index) => {
            return (
              <div className="card flex item-center gap-2">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  className="flex-1"
                >
                  <img src={x.image} alt="" className="images W-100" />
                </div>
                <div className="flex-1 hidden">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1600"
                    data-aos-delay={"300"}
                    className="card_content flex-1 flex py-2 column gap-4"
                  >
                    <div className="w-90 auto card_content_wrapper flex column gap-2">
                      <h5 className="fs-18 text-secondary family2">Featured Project {index + 1}</h5>

                      <h3 className="fs-30 text-grey">{x.text}</h3>
                      <h5
                        style={{ lineHeight: "1.4" }}
                        className="fs-16 text-grey family3 text-light "
                      >
                        {x.description}
                      </h5>
                      <div className="flex fs-10 item-center justify-end gap-1 tagwrapper">
                        {x.tools.map((x, index) => {
                          return (
                            <div
                              style={{
                                fontSize: "1.2rem",
                                letterSpacing: "4px",
                              }}
                              className="fs-12 text-light tools text-grey family3 uppercase text-light"
                            >
                              {x}
                            </div>
                          );
                        })}
                      </div>
                      <div
                        style={{ flexWrap: "wrap", gap: "1rem" }}
                        className="w-100 btnWrapper flex item-center"
                      >
                        {x.link1 ? (
                          <div className="">
                            <Button text={"Comming soon"} />
                          </div>
                        ) : (
                          <div className="">
                            <Button text={"Comming soon"} />
                          </div>
                        )}
                        <div className="">
                          <Button text={"Project code"} />
                        </div>

                        {/* <Link
                          to={
                            "https://github.com/Vivixell/portfolioVictorRobin"
                          }
                          className="btn text-grey fs-16 family1 py-1"
                          target="_blank"
                        >
                          View project Code
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
  padding-top: 15rem;
  transform-style: inherit;
  .tagwrapper {
    flex-wrap: wrap;
    gap: 2rem;
    z-index: 30000;
    justify-content: flex-end;
    .tools {
      position: relative;
      &::after {
        position: absolute;
        content: "";
        top: 50%;
        transform: translate(-10%, -50%);
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        background-color: var(--secondary);
      }
    }
  }
  .hidden {
    @media (max-width: 580px) {
      width: 100%;
      overflow: visible !important;
    }
  }

  .text1,
  .head {
    @media (max-width: 580px) {
      width: 90%;
      text-align: start;
      margin: 0;
    }
  }
  .grid {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
    @media (max-width: 980px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
  .cardWrapper {
    gap: 8rem;
  }
  h3,
  h5 {
    text-align: end;
  }
  .card {
    min-height: 350px;
    width: 100%;
    position: relative;
    border-radius: 10px;
    &:nth-of-type(even) {
      flex-direction: row-reverse;

      .btnWrapper,
      .tagwrapper {
        padding: 1.5rem 0;
        justify-content: flex-start;
      }
      h3,
      h5 {
        text-align: start;
      }
    }
    @media (max-width: 780px) {
      flex-direction: column;
      &:nth-of-type(even) {
        flex-direction: column;
      }
    }
  }
  .images {
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 20;
  }
  .btn {
    padding: 0.9rem 1.8rem;
    border-radius: 40px;
    font-size: 10px;
    cursor: pointer;
    text-transform: uppercase;
    cursor: pointer;
    z-index: 3000000;
  }
  .btnWrapper {
    padding: 1.5rem 0;
    justify-content: flex-end;
  }
  .card_content_wrapper {
    justify-content: flex-end;
    height: 100%;
    padding: 3rem 0;
    h3 {
      letter-spacing: 1px;
      font-weight: normal;
      font-size: 50px;

      @media (max-width: 780px) {
        font-size: 35px;
      }
    }
    h5 {
      @media (max-width: 480px) {
        font-size: 14px;
      }
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
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 120px;
    padding: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.09);

    @media (max-width: 980px) {
      font-size: 8rem;
    }
    @media (max-width: 780px) {
      font-size: 60px;
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
