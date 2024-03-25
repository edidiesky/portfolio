"use client";

import Navbar from "@/components/common/Navbar";

export default function AppLayout({ children }) {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      {children}
    </div>
  );
}
