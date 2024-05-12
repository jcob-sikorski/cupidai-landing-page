import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Companies = () => {
  const target = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["end end", "end start"],
  });

  // const opacity1 = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  // const opacity2 = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  // const opacity3 = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  // const opacity4 = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  // const opacity5 = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <section
      id="about"
      ref={target}
      className="w-full flex flex-col gap-4 px-4 py-4 sm:px-6 md:px-12 lg:px-28 lg:pt-48 lg:pb-28 max-w-[1920px] items-center justify-center mt-[512px] mb-[128px]"
    >
      <motion.p>Trusted by 2,000+ companies</motion.p>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-12 items-center opacity-60">
        <motion.div>
          <Image width={200} height={48} alt="" src="/companies/logo.svg" />
        </motion.div>
        <motion.div>
          <Image width={200} height={48} alt="" src="/companies/logo-1.svg" />
        </motion.div>
        <motion.div>
          <Image width={200} height={48} alt="" src="/companies/logo-2.svg" />
        </motion.div>
        <motion.div>
          <Image width={200} height={48} alt="" src="/companies/logo-3.svg" />
        </motion.div>
        <motion.div>
          <Image width={200} height={48} alt="" src="/companies/logo-4.svg" />
        </motion.div>
      </div>
    </section>
  );
};

export default Companies;
