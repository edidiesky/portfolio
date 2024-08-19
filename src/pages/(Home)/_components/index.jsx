"use client";
import React from "react";
import Hero from "./Hero";
import Work from "./Work";
import Cta from "./Cta";
import Skills from "./skills";
import Footer from "@/components/common/Footer";
import Slider from "./Slider";
import Gallery from "./Gallery";

export default function HomeIndex() {
  return (
    <div>
      <Hero />
      <Cta />
      <Work />
      <Gallery />
      {/* <Slider /> */}
      <Skills />
      <Footer />
    </div>
  );
}
