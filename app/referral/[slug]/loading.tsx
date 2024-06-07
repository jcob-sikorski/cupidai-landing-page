"use client";

import React from "react";
import Image from "next/image";
import Hero from "@/app/components/Sections/Hero";
import Companies from "@/app/components/Sections/Companies";
import Features from "@/app/components/Sections/Features";
import Services from "@/app/components/Sections/Services";
import Pricing from "@/app/components/Sections/Pricing";
import Faqs from "@/app/components/Sections/Faqs";
import Cta from "@/app/components/Sections/Cta";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import NavBar from "@/app/components/NavBar/page";
import CustomerStories from "@/app/components/Sections/CustomerStories";

export default function LoadingPage() {
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
        <Features 
          text1=""
          text2="Using our custom models create hyper realistc content and ensure that it fits your own business, not the other way around."
          text3="HYPER REALISTIC AI CONTENT"
          text4="Advanced generation techniques help us generate the best AI images within the industry."
          text5="STREAMLINED WORKFLOW"
          text6="Enjoy a seamless and swift workflow pipeline with CUPID AI, simplifying your content creation and management processes."
          text7="UNIVERSAL VERIFICATION"
          text8="Verify your model anywhere, anytime with our AI content generation methods."
          imgSrc="/appScreens/ai-verification.png"
        />
        <CustomerStories 
          text="As a marketing agency we needed a reliable solution to verify the authenticity and quality of AI-generated images across platforms. CUPID AI’s Universal Verification feature enabled us seamless verification, ensuring high-quality content delivery."
        />
        <Features 
          text1="Suite of Starter-Friendly Deepfake Tools"
          text2="Empower your entry into your industry with easy-to-use deepfake tools, saving you time and reducing costs from day one."
          text3="Realistic AI-Driven Content"
          text4="Leverage state-of-the-art technology to produce stunning, lifelike AI-generated images that captivate your audience."
          text5="Simplified Workflow"
          text6="Streamline your content creation and management process, making it easier than ever to produce high-quality visuals."
          text7="Convincing Visuals"
          text8="Create images that are so realistic, your audience will believe they're seeing real models."
          imgSrc="/appScreens/content-deepfakes.png"
        />
        <CustomerStories 
          text="I was a newcomer to the fashion industry needed a cost-effective way to create captivating visual content without access to real models. CUPID AI's Starter-Friendly Deepfake Suite enabled me to generate realistic, AI-driven images easily and affordably."
        />
        <Features 
          text1="Simple, powerful image generation kit."
          text2="Harness the power of advanced tools that allow you to tweak and perfect every detail, giving you the ability to create stunning content without the need for designers. You are powerful on your own."
          text3="EFFICIENT RESOURCE MANAGEMENT"
          text4="Cut down costs and save time by generating realistic images and videos instantly, eliminating the need for expensive photoshoots and model hires."
          text5="PAINLESS INTEGRATION"
          text6="Integrate our tools seamlessly into your existing workflow, allowing for smooth and efficient content creation without disrupting your processes."
          text7="CUSTOMIZABLE SOLUTIONS"
          text8="Tailor our AI tools to fit your specific needs, ensuring that you have the flexibility to create content that aligns perfectly with your brand and campaign goals."
          imgSrc="/appScreens/image-generation.png"
        />
        <CustomerStories 
          text="As a Photoshop producer I needed a solution to create realistic images with complete control. CUPID AI’s advanced tools enabled me precise customization and helped me to dump Photoshop forever."
        />
        <Services />
        <Pricing />
        <Faqs />
        <Cta />
        <Footer />
      </div>
    </main>
  );
};