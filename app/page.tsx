"use client";

import Image from "next/image";
import LandingPage from "@/app/landingPage/page";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time: any) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);
  return (
    <main className="flex min-h-screen flex-col items-center w-[100vw]">
      <LandingPage />
    </main>
  );
}
