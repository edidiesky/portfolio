"use client";
import React, { useEffect, useRef } from "react";
import { projectdata3 } from "@/constants/data/projectdata";
import Link from "next/link";
import gsap from "gsap";
const Cursor = ({ mouseposition }) => {
  const labelRef = useRef(null);
  const mouseRef = useRef(null);
  const webactive = projectdata3[mouseposition?.index]?.mainTitle;
  useEffect(() => {
    const handleMouseMotion = (e) => {
      const { pageX, pageY } = e;
      gsap.to(mouseRef.current, {
        left: pageX - 60,
        top: pageY - 60,
        duration: 1,
        ease: "power3",
      });

      gsap.to(labelRef.current, {
        left: pageX - 60,
        top: pageY - 60,
        duration: 0.55,
        ease: "power3",
      });
    };

    window.addEventListener("mousemove", handleMouseMotion);
    return () => {
      window.removeEventListener("mousemove", handleMouseMotion);
    };
  }, []);

  const website = webactive ? webactive : false;
  console.log("mouseposition", mouseposition);
  return (
    <>
      <div
        ref={mouseRef}
        style={{ left: 0, top: 0 }}
        className={`w-[120px] z-[40] absolute h-[120px] rounded-full 
          hidden pointer-events-none lg:flex items-center ${
            mouseposition?.active
              ? "scale_animation scale-100"
              : "scale-0 scale_animation"
          } justify-center text-white font-portfolio_bold bg-[#3e3aff]`}
      ></div>
      <div
        ref={labelRef}
        style={{ left: 0, top: 0 }}
        className={`w-[120px] z-[40] absolute h-[120px] 
        rounded-full hidden pointer-events-none lg:flex items-center ${
          mouseposition?.active
            ? "scale_animation scale-100"
            : "scale-0 scale_animation"
        } justify-center text-white font-portfolio_bold`}
      >
        {website ? (
          <Link target="_blank" href={website}>
            View
          </Link>
        ) : (
          <span className="text-center w-full"> Work in Progress</span>
        )}
      </div>
    </>
  );
};

export default Cursor;
