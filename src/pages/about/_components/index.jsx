"use client";
import React from "react";
import Hero from "./Hero";
import About from "./About";
// import Skills from "./skills";
import Footer from "@/components/common/Footer";
import Skills from "@/pages/(Home)/_components/skills";
// import About from "@/pages/(Home)/_components/About";

export default function AboutIndex() {
  return (
    <div className=" relative">
      <div className="w-full z-20">
        <Hero />
        <About />
        <Skills />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
