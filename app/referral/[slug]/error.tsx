"use client";

import React from "react";
import Image from "next/image";
import Hero from "@/app/components/Sections/Hero";
import Companies from "@/app/components/Sections/Companies";
import About from "@/app/components/Sections/About";
import Services from "@/app/components/Sections/Services";
import Pricing from "@/app/components/Sections/Pricing";
import Faqs from "@/app/components/Sections/Faqs";
import Cta from "@/app/components/Sections/Cta";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import NavBar from "@/app/components/NavBar/page";

export default function ErrorBoundary() {
  return (
    <main className="flex min-h-screen flex-col items-center w-[100vw]">
      <div className="flex flex-col items-center w-full">
        <NavBar />
        <Hero />
        <motion.div className=" overflow-hidden z-[-1] w-full h-full absolute bottom-0 flex items-end justify-center">
          <div className="flex items-center justify-center">
            <Image layout="fill" objectFit="cover" alt="" src="/bg/glow.png" />
          </div>
        </motion.div>
        <Companies />
        <About />
        <Services />
        <Pricing />
        <Faqs />
        <Cta />
        <Footer />
      </div>
    </main>
  );
};