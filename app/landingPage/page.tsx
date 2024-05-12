import React from "react";
import Image from "next/image";
import Hero from "../components/Sections/Hero";
import Companies from "../components/Sections/Companies";
import About from "../components/Sections/About";
import Services from "../components/Sections/Services";
import Pricing from "../components/Sections/Pricing";
import Faqs from "../components/Sections/Faqs";
import Cta from "../components/Sections/Cta";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import NavBar from "@/app/components/NavBar/page";

const page = () => {
  return (
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
  );
};

export default page;
