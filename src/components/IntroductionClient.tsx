"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedLowpolyBackground from "@/components/AnimatedLowpolyBackground";
import FeatureCard from "@/components/FeatureCard";
import FadeInUp from "@/components/FadeInUp";
import StaggerChildren from "@/components/StaggerChildren";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const DESKTOP_SCALE_CONFIG = [8, 4, 4, 4];
const MOBILE_SCALE_CONFIG = [3.5, 2, 2, 2];

export default function IntroductionClient() {
  const [scaleConfig, setScaleConfig] = useState(DESKTOP_SCALE_CONFIG);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScaleConfig(MOBILE_SCALE_CONFIG);
      } else {
        setScaleConfig(DESKTOP_SCALE_CONFIG);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen w-full">
      {/* Section 1: Light with Low Poly Background */}
      <section className="relative w-full pt-40 pb-40 bg-[#f6f8fa] flex flex-col items-center justify-center overflow-hidden">
        <AnimatedLowpolyBackground scaleConfig={scaleConfig} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-6 md:px-0"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-10 leading-tight text-gray-900">
            Let us properly<br className="block sm:hidden" /> introduce<br />
            you to Longevity
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-6 md:px-0"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-center max-w-2xl text-gray-700 font-medium">
            Longevity is a mission to improve health, extend life, and build a future worth seeing. Discover what it is, why it matters, and where you fit in.
          </p>
        </motion.div>
      </section>

      {/* Section 2: Black */}
      <FadeInUp as="section" className="relative w-full bg-[#0A0F14] flex flex-col items-center justify-center z-10">
        <div className="py-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-white">
            Longevity means..
          </h2>
        </div>
      </FadeInUp>

      {/* Section 3: Dark Navy */}
      <FadeInUp as="section" className="w-full pt-20 pb-2 bg-[#1E2A38] flex flex-col items-center justify-center">
        <StaggerChildren className="max-w-2xl w-full flex flex-col items-center px-6 md:px-0" staggerDelay={0.15}>
          <motion.p variants={fadeInUp} className="text-3xl sm:text-4xl font-extrabold text-center text-[#64BC6E] mb-6 leading-snug">
            A longer life.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-6 leading-snug">
            But the longer we live..
          </motion.p>
          <motion.p variants={fadeInUp} className="text-3xl sm:text-4xl font-extrabold text-center text-[#64BC6E] mb-6 leading-snug">
            ..the worse the quality of life is.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-0 leading-snug">
            We&apos;re not yet where we want to be
          </motion.p>
          <motion.div variants={fadeInUp} className="w-full flex justify-center mt-0 mb-0">
            <Image src="/image/introduction/not-yet.webp" alt="We're not yet where we want to be" width={900} height={320} className="rounded-lg object-cover w-full max-w-2xl" />
          </motion.div>
        </StaggerChildren>
      </FadeInUp>

      {/* Why should anyone want to live longer? - Timeline UI */}
      <FadeInUp as="section" className="w-full py-28 bg-white flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-black mb-16 mt-8">
            Why should anyone want to live longer?
          </h2>
          <div className="relative flex flex-col items-center w-full">
            {/* Timeline bar */}
            <div className="absolute left-1/2 top-0 h-full w-2 bg-[#64BC6E] -translate-x-1/2 z-0" />
            {/* Top circle */}
            <div className="absolute left-1/2 -top-8 -translate-x-1/2 z-10">
              <div className="w-14 h-14 bg-white border-4 border-[#64BC6E] rounded-full flex items-center justify-center shadow-lg">
                <div className="w-8 h-8 bg-[#64BC6E] rounded-full" />
              </div>
            </div>
            
            {/* Timeline items */}
            <StaggerChildren className="relative z-10 flex flex-col gap-24 w-full max-w-2xl mx-auto mt-16" staggerDelay={0.3}>
              {/* Item 1 (text right, image left) */}
              <motion.div variants={fadeInUp} className="flex flex-row items-center w-full">
                {/* Image on left */}
                <motion.div variants={fadeInUp} className="w-1/2 flex justify-end pr-8">
                  <Image src="/image/introduction/run.webp" alt="Placeholder" width={250} height={70} className="mx-auto" />
                </motion.div>
                {/* Text box with bar on right */}
                <motion.div variants={fadeInUp} className="w-1/2 flex items-center justify-start pl-0">
                  <motion.div variants={fadeInUp} className="w-10 h-2 bg-[#64BC6E]" />
                  <motion.div variants={fadeInUp} className="bg-white shadow-lg rounded-lg p-6 w-72 font-bold text-center text-gray-800">
                    To keep doing what they love.
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Item 2 (text left, image right) */}
              <motion.div variants={fadeInUp} className="flex flex-row items-center w-full">
                {/* Text box with bar on left */}
                <motion.div variants={fadeInUp} className="w-1/2 flex items-center justify-end pr-0">
                  <motion.div variants={fadeInUp} className="bg-white shadow-lg rounded-lg p-6 w-72 font-bold text-center text-gray-800">
                    Spend more time with friends and family
                  </motion.div>
                  <motion.div variants={fadeInUp} className="w-10 h-2 bg-[#64BC6E]" />
                </motion.div>
                {/* Image on right */}
                <motion.div variants={fadeInUp} className="w-1/2 flex justify-start pl-8">
                  <Image src="/image/introduction/partypeople.webp" alt="Placeholder" width={300} height={90} className="mx-auto" />
                </motion.div>
              </motion.div>

              {/* Item 3 (text right, image left) */}
              <motion.div variants={fadeInUp} className="flex flex-row items-center w-full">
                {/* Image on left */}
                <motion.div variants={fadeInUp} className="w-1/2 flex justify-end pr-8">
                  <Image src="/image/introduction/futurecity.webp" alt="Placeholder" width={300} height={90} className="mx-auto" />
                </motion.div>
                {/* Text box with bar on right */}
                <motion.div variants={fadeInUp} className="w-1/2 flex items-center justify-start pl-0">
                  <motion.div variants={fadeInUp} className="w-10 h-2 bg-[#64BC6E]" />
                  <motion.div variants={fadeInUp} className="bg-white shadow-lg rounded-lg p-6 w-72 font-bold text-center text-gray-800">
                    Experience the future.
                  </motion.div>
                </motion.div>
              </motion.div>
            </StaggerChildren>
          </div>
        </div>
      </FadeInUp>

      {/* How can one achieve Longevity? Section */}
      <FadeInUp as="section" className="w-full py-32 bg-[#1E2A38] flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-center text-white mb-20 inline-block px-6 md:px-0">
          How can one achieve Longevity?
        </h2>
        
        <StaggerChildren className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-16 mb-0 md:mb-0 px-6 md:px-0">
          <motion.div variants={fadeInUp} className="flex-1 flex justify-center mb-8 md:mb-0">
            <Image src="/image/introduction/lifestyle.webp" alt="Lifestyle" width={256} height={192} className="rounded-lg transition-transform hover:scale-105 object-cover" />
          </motion.div>
          <motion.div variants={fadeInUp} className="flex-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 inline-block">
              Lifestyle
              <span className="block w-10 h-1 mx-auto md:mx-0 mt-2 rounded-full" style={{ background: '#64BC6E' }}></span>
            </h3>
            <p className="text-white text-lg font-light">
              Following a diet, sleeping enough, exercising and resting enough, and having a proper mindset. This approach however mostly extends the quality of life rather than the quantity and later in life, once one reaches a later stage of elderly, lifestyle doesn&apos;t improve the quality of life that much anymore. Plus there are limits: if one lives 100% correctly vs someone living 80% correctly, the difference might not be that big.
            </p>
          </motion.div>
        </StaggerChildren>
      </FadeInUp>

      {/* Genetics Row - Light */}
      <FadeInUp as="section" className="w-full py-32 bg-[#f6f8fa] flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl flex flex-col md:flex-row-reverse items-center justify-center gap-16 px-6 md:px-0">
          <motion.div variants={fadeInUp} className="flex-1 flex justify-center mb-8 md:mb-0">
            <Image src="/image/introduction/genetics.webp" alt="Genetics" width={256} height={192} className="rounded-lg transition-transform hover:scale-105 object-cover" />
          </motion.div>
          <motion.div variants={fadeInUp} className="flex-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-black mb-4 inline-block">
              Genetics
              <span className="block w-10 h-1 mx-auto md:mx-0 mt-2 rounded-full" style={{ background: '#64BC6E' }}></span>
            </h3>
            <p className="text-black text-lg font-light">
              Later in life where lifestyle doesn&apos;t play such a big role, genes overtake and they are responsible for how long does one live. some more info.. This means that some people are born with longevity advantages.
            </p>
          </motion.div>
        </div>
      </FadeInUp>

      {/* Longevity Therapies Row - Dark */}
      <FadeInUp as="section" className="w-full py-32 bg-[#1E2A38] flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-16 px-6 md:px-0">
          <motion.div variants={fadeInUp} className="flex-1 flex justify-center mb-8 md:mb-0">
            <Image src="/image/introduction/longevity_therapies.webp" alt="Longevity Therapies" width={256} height={192} className="rounded-lg transition-transform hover:scale-105 object-cover" />
          </motion.div>
          <motion.div variants={fadeInUp} className="flex-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 inline-block">
              Longevity Therapies
              <span className="block w-10 h-1 mx-auto md:mx-0 mt-2 rounded-full" style={{ background: '#64BC6E' }}></span>
            </h3>
            <p className="text-white text-lg font-light">
              Not all of us are lucky to have great genes plus there&apos;s always a limit for what genes can do. Longevity therapies aim to slow aging and rejuvenate the body so that anyone can... These treatments are still emerging, they are facing some obstacles that&apos;s slowing down their arrival to the market. some CTA for users to check the link and facilitate them coming to the market.
            </p>
          </motion.div>
        </div>
      </FadeInUp>

      {/* Call to Action - White section */}
      <FadeInUp as="section" className="w-full py-28 bg-white flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full flex flex-col items-center px-4">
          <p className="text-xl leading-relaxed text-center mb-8 text-gray-600">
            <span className="font-extrabold text-[#3d9f41]">Longevity</span> is advancing slowly. Part of the problem is that the word &quot;<span className="font-extrabold text-[#3d9f41]">longevity</span>&quot; is being misused to sell everything from supplements to skincare. That creates <span className="font-extrabold text-gray-900">confusion</span> and drowns out the <span className="font-extrabold text-[#3d9f41]">real mission</span>. At the same time, too many people still assume it&apos;s only for the <span className="font-extrabold text-gray-900">rich</span> or <span className="font-extrabold text-gray-900">highly educated</span>. But <span className="font-extrabold text-[#3d9f41]">progress</span> happens when <span className="font-extrabold text-[#3d9f41]">new people</span> join in. The field needs voices from <span className="font-extrabold text-[#3d9f41]">all backgrounds</span>, especially <span className="font-extrabold text-[#3d9f41]">creators, advocates</span>, and anyone willing to <span className="font-extrabold text-[#3d9f41]">care</span>.
          </p>
          <p className="text-xl leading-relaxed text-center text-gray-600">
            <span className="font-extrabold text-gray-900">You don&apos;t need a degree</span>. You just need to <span className="font-extrabold text-[#3d9f41]">show up</span> and <span className="font-extrabold text-[#3d9f41]">do what&apos;s right</span>.
          </p>
        </div>
      </FadeInUp>

      {/* Take your next step - Dark section */}
      <FadeInUp as="section" className="w-full py-28 bg-[#1E2A38] flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-white mb-16 px-6 md:px-0">Take your next step</h2>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16 max-w-5xl mx-auto">
            <motion.div variants={fadeInUp}>
              <FeatureCard
                title="The Longevity Map"
                description="Longevity can be chaotic. We break it down visually, explain key ideas, and show you who\'s shaping the field."
                icon="/image/homepage/compass.svg"
                href="/longevity-map"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <FeatureCard
                title="Get Involved"
                description="Longevity needs more than just researchers. Find out how you can contribute your skills, from writing and design to community building."
                icon="/image/homepage/group.svg"
                href="/get-involved"
              />
            </motion.div>
          </StaggerChildren>
        </div>
      </FadeInUp>
    </div>
  );
} 