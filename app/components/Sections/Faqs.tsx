"use client";

import { motion } from "framer-motion";
import React from "react";
import Accordion from "../Accordion";
import { Divider } from "../Divider";

const Faqs = () => {
  return (
    <motion.section
      id="faqs"
      className="relative w-full flex flex-col items-start justify-center gap-12 mt-[128px] pb-20 pt-48 px-12 max-w-[800px]"
    >
      <div className="z-10 flex flex-col gap-2">
        <h2>FAQs</h2>
        <p className="text-textd">
          Answers to the most frequently asked questions.
        </p>
      </div>

      <div className="flex flex-col w-full gap-4">
        <Accordion title="How do you handle my data?" active>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Accordion>
        <Divider />

        <Accordion title="What's the difference between the Entrepreneur and Business plan?">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Accordion>
        <Divider />

        <Accordion title="Will an API be available?">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Accordion>
        <Divider />

        <Accordion title="Can I use these images commercially?">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Accordion>
        <Divider />

        <Accordion title="How does team payments work?">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Accordion>
        <Divider />

        <Accordion title="What are the % on the referral program?">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Accordion>
      </div>
    </motion.section>
  );
};

export default Faqs;
