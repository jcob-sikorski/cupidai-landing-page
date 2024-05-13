"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { PrimaryButton } from "../Buttons";
import Image from "next/image";

const Hero = () => {
  // const target = useRef<HTMLDivElement | null>(null);
  // const { scrollYProgress } = useScroll({
  //   target: target,
  //   offset: ["end end", "end start"],
  // });

  // const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  // const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  // const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  // const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  // const imageOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);
  // const position = useTransform(scrollYProgress, (pos) => {
  //   return pos > 0.5 ? "relative" : "fixed";
  // });
  return (
    <>
      <motion.section
        id="home"
        className="relative w-full h-[90vh] xl:h-[100vh] max-w-[1920px] flex flex-col gap-4 items-center justify-start text-center px-4 sm:px-6 md:px-12 mt-40"
      >
        <motion.div className="px-12 flex flex-col gap-4 items-center justify-center max-w-[920px]">
          <div className="flex flex-col items-center">
            <div className="flex gap-0 sm:gap-4 items-center justify-center flex-wrap">
              <h1>Unleash</h1>
              <h1 className="gradient_text">Creativity,</h1>
            </div>
            <h1>Effortlessly</h1>
          </div>

          <p>
            Elevate your agency's output with state-of-the-art AI, engineered to
            innovate at the speed of thought.
          </p>
        </motion.div>
        <PrimaryButton href="/signup">Try Now</PrimaryButton>
        <motion.div className="relative z-10 w-full flex flex-col justify-center items-center">
          <motion.div className="absolute mr-[-32px] top-[64px] flex items-center justify-center">
            <Image
              width={1280}
              height={960}
              alt=""
              src="/appScreens/hero.svg"
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Hero;
