"use client";
import React from "react";
import Hero from "./WorkDetails";
import Footer from "@/components/common/Footer";

export default function WorkDetails({params}) {
  return (
    <div className="z-[40000] relative">
      <Hero />
      <Footer />
    </div>
  );
}
