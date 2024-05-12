import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.section
      id="services"
      // initial={{ y: 32, opacity: 0 }}
      // whileInView={{ y: 0, opacity: 1 }}
      // transition={{ duration: 0.3 }}
      className=" relative w-full flex flex-col items-center justify-center gap-6 mt-[128px] pt-48 pb-20 px-12"
    >
      <div className="z-[-1] absolute top-0 left-0 flex items-start justify-center w-full h-full">
        <div className="z-[0] absolute top-0 left-0 flex w-full h-full bg-gradient-to-b from-[#0E0E0E] to-transparent" />
        <div className="z-[1] absolute top-0 left-0 flex w-full h-full bg-gradient-to-b from-transparent to-black" />
        <Image layout="fill" objectFit="cover" alt="" src="/bg/checks.png" />
      </div>

      <div className="z-10 flex flex-col items-center justify-center gap-2 text-center max-w-[640px]">
        <h2>Our Services</h2>
        <p className="text-textd">
          Tweak anything and everything to ensure fits your business, not the
          other way around.
        </p>
      </div>

      <div className="z-20 flex flex-col gap-4 w-full max-w-[1280px]">
        <div className="z-10 grid grid-cols-1 md:grid-cols-7 gap-4">
          <motion.div
            style={{
              background:
                "linear-gradient(238.05deg, #0F0F0F 4.82%, #0F0F0F 116.43%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            whileHover={{
              background:
                "linear-gradient(238.05deg, #7F04E3 4.82%, #FF006B 116.43%)",
              border: "0px solid rgba(0, 0, 0, 0.0)",
            }}
            className="group flex md:col-span-4 flex-col gap-4 rounded-[16px] p-6"
          >
            <div className="w-[56px] h-[56px] flex items-center justify-center opacity-30 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <Image width={56} height={56} alt="" src="/icons/deepfakes.svg" />
            </div>
            <h3>Content Deepfakes</h3>
            <p>
              Seize control and elevate your business with our hyper-realistic
              AI content creation. Immerse in a blend of artistry and technology
              that promises unparalleled authenticity.
            </p>
          </motion.div>

          <motion.div
            style={{
              background:
                "linear-gradient(238.05deg, #0F0F0F 4.82%, #0F0F0F 116.43%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            whileHover={{
              background:
                "linear-gradient(238.05deg, #7F04E3 4.82%, #FF006B 116.43%)",
              border: "0px solid rgba(0, 0, 0, 0.0)",
            }}
            className="group flex md:col-span-3 flex-col gap-4 rounded-[16px] p-6 bg-dgray"
          >
            <div className="w-[56px] h-[56px] flex items-center justify-center opacity-30 group-hover:opacity-100">
              <Image
                width={56}
                height={56}
                alt=""
                src="/icons/verification.svg"
              />
            </div>
            <h3>AI Verifications</h3>
            <p className="text-textd">
              Streamline your workflow with our AI verification system that
              boasts a stellar 80% first-time success rate.
            </p>
          </motion.div>
        </div>

        <div className="z-10 grid grid-cols-1 md:grid-cols-7 gap-4">
          <motion.div
            style={{
              background:
                "linear-gradient(238.05deg, #0F0F0F 4.82%, #0F0F0F 116.43%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            whileHover={{
              background:
                "linear-gradient(238.05deg, #7F04E3 4.82%, #FF006B 116.43%)",
              border: "0px solid rgba(0, 0, 0, 0.0)",
            }}
            className="group flex md:col-span-3 flex-col gap-4 rounded-[16px] p-6 bg-dgray"
          >
            <div className="w-[56px] h-[56px] flex items-center justify-center opacity-30 group-hover:opacity-100">
              <Image width={56} height={56} alt="" src="/icons/utilities.svg" />
            </div>
            <h3>Content Utilities</h3>
            <p className="text-textd">
              Consolidate your resources with our comprehensive content
              utilities. Access everything you need from a single dashboard.
            </p>
          </motion.div>

          <motion.div
            style={{
              background:
                "linear-gradient(238.05deg, #0F0F0F 4.82%, #0F0F0F 116.43%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            whileHover={{
              background:
                "linear-gradient(238.05deg, #7F04E3 4.82%, #FF006B 116.43%)",
              border: "0px solid rgba(0, 0, 0, 0.0)",
            }}
            className="group flex md:col-span-4 flex-col gap-4 rounded-[16px] p-6 bg-dgray"
          >
            <div className="w-[56px] h-[56px] flex items-center justify-center opacity-30 group-hover:opacity-100">
              <Image
                width={56}
                height={56}
                alt=""
                src="/icons/generation.svg"
              />
            </div>
            <h3>Image Generation</h3>
            <p className="text-textd">
              Transform productivity with our sophisticated automation tools.
              Let technology work tirelessly behind the scenes, so your
              creativity never has to pause.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
