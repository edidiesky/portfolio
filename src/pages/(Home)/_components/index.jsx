"use client";
import React from "react";
import Hero from "./Hero";
import Work from "./Work";
import Cta from "./Cta";
import Skills from "./skills";
import Footer from "@/components/common/Footer";

export default function HomeIndex() {
  return (
    <div>
      <Hero />
      <Work />
      <Cta />
      <Skills />
      {/* <Work />
      <Skills/> */}
      <Footer />
    </div>
  );
}
