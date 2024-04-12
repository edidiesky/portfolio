"use client";
import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./skills";
import Footer from "@/components/common/Footer";

export default function AboutIndex() {
  return (
    <div>
      <Hero />
      <About />
      <Skills/>
      <Footer/>
    </div>
  );
}
