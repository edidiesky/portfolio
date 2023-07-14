import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

export default function Footer() {
  const [user_email, setUser_Email] = useState("");
  const [user_name, setUser_Name] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const form = useRef();
  // console.log(form.current)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user_email || !subject || !user_name || !message) {
      alert("Fill in the required form data");
    } else {
      emailjs
        .sendForm(
          "service_h971wyz",
          "template_c7w87nw",
          form.current,
          "QWKTEx5C0Fp0YpDNp"
        )
        .then(
          (result) => {
            setUser_Email("");
            setUser_Name("");
            setMessage("");
            setSubject("");
            alert("Message has been delivered");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }

    // dispatch(loginCustomer(formdata));
  };

  return (
    <FooterWrapper id="contact">
      <div className="left w-90 auto h-100 flex column gap-4">
        <div className="flex top item-center w-85 auto">
          <div className="w-100 flex column gap-2">
            <h2 className="text-grey w-100 family1 fs-45">
              Let's start a project together
            </h2>
          </div>
          <div
            className="flex-1 flex justify-end item-center"
            style={{ justifyContent: "flex-end" }}
          >
            {" "}
            <img src="./profile.jfif" alt="" className="image" />
          </div>
        </div>
        <div className="grid_wrapper w-85 auto" style={{ paddingTop: "4rem" }}>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex column relative"
            style={{ position: "relative" }}
          >
            {/* contact form */}
            <div className="form w-100 flex item-start gap-2">
              <div className="flex">
                <h4>01</h4>
              </div>
              <label htmlFor="user_name" className="flex column w-100 gap-2">
                <h3 className="fs-24 family3 text-grey">What's your name?</h3>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  onChange={(e) => setUser_Name(e.target.value)}
                  value={user_name}
                  placeholder="John Doe *"
                  className="input family3"
                />
              </label>
            </div>{" "}
            {/* email */}
            <div className="form w-100 flex item-start gap-2">
              <div className="flex">
                <h4>02</h4>
              </div>
              <label htmlFor="user_email" className="flex column w-100 gap-2">
                <h3 className="fs-24 family3 text-grey">What's your email?</h3>
                <input
                  type="text"
                  id="user_email"
                  name="user_email"
                  onChange={(e) => setUser_Email(e.target.value)}
                  value={user_email}
                  placeholder="JohnDoe@gmail.com *"
                  className="input family3"
                />
              </label>
            </div>{" "}
            {/* services */}
            <div className="form w-100 flex item-start gap-2">
              <div className="flex">
                <h4>03</h4>
              </div>
              <label htmlFor="subject" className="flex column w-100 gap-2">
                <h3 className="fs-24 family3 text-grey">
                  What services are you looking for?
                </h3>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  placeholder="Web Development"
                  className="input family3"
                />
              </label>
            </div>{" "}
            {/* message */}
            <div
              style={{ borderBottom: "2px solid rgba(255, 255, 255, 0.1)" }}
              className="form w-100 flex item-start gap-2"
            >
              <div className="flex">
                <h4>04</h4>
              </div>
              <label htmlFor="message" className="flex column w-100 gap-2">
                <h3 className="fs-24 family3 text-grey">Your message</h3>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  id="message"
                  type="text"
                  placeholder="Hello Edidiong, can you help me with.... *"
                  className="input family3"
                />
              </label>
            </div>
            <div
              onClick={handleSubmit}
              className="cardw fs-20 text-grey family3"
            >
              <div className="text-1">Send It</div>

              <div className="text-2">Send It</div>
            </div>
          </form>
          {/* contact list */}
          <div className="flex column w-100 gap-4">
            <div className="flex column gap-2">
              <h4 className="text-grey" style={{ fontSize: "9px" }}>
                Contact
              </h4>
              <ul className="flex column flex" style={{ gap: "1.5rem" }}>
                <li className="fs-14 text-grey family1">
                  essienedidiong1000@gmail.com
                </li>
                <li className="fs-14 text-grey family1">08127107270</li>
              </ul>
            </div>
            <div className="flex column gap-2">
              <h4 className="text-grey" style={{ fontSize: "9px" }}>
                Social
              </h4>
              <ul className="flex column flex" style={{ gap: "1.5rem" }}>
                <li className="fs-14 text-grey family1">Instagram</li>
                <li className="fs-14 text-grey family1">Facebook</li>
                <li className="fs-14 text-grey family1">Github</li>
                <li className="fs-14 text-grey family1">Twitter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  position: relative;
  padding: 2rem 0;
  padding: 15rem 0;
  display: grid;
  place-items: center;
  background-color: var(--primary);
  .grid_wrapper {
    display: grid;
    grid-template-columns: 1fr 10vw;
    grid-gap: 5rem;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 780px) {
    font-size: 14px;
  }
  .form {
    border-top: 2px solid rgba(255, 255, 255, 0.1);
    padding: 4rem 0;
    &:last-child {
      border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    }
  }
  .top {
    @media (max-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
    }
  }
  h3 {
    @media (max-width: 780px) {
      font-size: 20px;
    }
  }
  input {
    height: 5rem;
    background: transparent;
    padding: 0;
    width: 100%;
    border: none;
    outline: none;
    font-size: 2rem;
    font-weight: 400;
    transition: all 0.6s;
    color: #fff;
    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
  textarea {
    height: 15rem;
    background: transparent;
    padding: 0;
    width: 100%;
    border: none;
    outline: none;
    font-size: 2rem;
    font-weight: 400;
    transition: all 0.6s;
    color: #fff;
    resize: none;
  }

  .cardw {
    position: absolute;
    display: grid;
    place-items: center;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    letter-spacing: 3px;
    bottom: -15%;
    right: -10%;
    border: 1px solid rgba(255, 255, 255, 0.3);
    /* font-size: 12px; */
    z-index: 3000;
    overflow: hidden;
    cursor: pointer;
    transition: all 1s ease;
    background-color: rgb(206, 181, 139);
    color: var(--dark-1);
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 4px 13px rgba(0, 0, 0, 0.3);
    }
    .text-2 {
      position: absolute;
      top: -100%;
      left: 50%;
      transform: translateX(-50%);
      min-width: max-content;
      color: #000;
      transition: all 0.7s ease;
    }
    .text-1 {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translateX(-50%);
      min-width: max-content;
      color: #000;
      transition: all 0.3s;
    }
    &:is(:hover, :focus-visible)::before {
      bottom: -50%;
    }
    &:is(:hover, :focus-visible) .text-2 {
      top: 45%;
    }
    &:is(:hover, :focus-visible) .text-1 {
      top: -100%;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: 200%;
      height: 200%;
      border-radius: 50%;
      background-color: rgba(168, 151, 123, 0.228);
      transition: all 0.7s ease;
      z-index: -1;
      padding: 2rem;
    }
    @media (max-width: 780px) {
      font-size: 19px;
      bottom: -5%;
      right: -20%;
    }
    @media (max-width: 380px) {
      width: 100px;
      font-size: 14px;
      height: 100px;
    }
  }
  .image {
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    object-fit: cover;
  }
  h2 {
    font-weight: light;
    font-size: 70px;
    position: relative;
    @media (max-width: 980px) {
      font-size: 45px;
    }
    .span {
      position: absolute;
      bottom: -100%;
      left: -30%;
    }
  }
`;
