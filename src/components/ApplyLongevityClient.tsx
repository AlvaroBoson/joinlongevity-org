"use client";

import React, { ReactNode } from 'react';
import Image from 'next/image';
import FadeInUp from '@/components/FadeInUp';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

const StaggerChildren = ({ children, className = "", staggerDelay = 0.1 }: StaggerChildrenProps) => {
  return (
    <motion.div
      className={className}
      initial="initial"
      animate="animate"
      variants={{
        animate: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

const SectionLink = ({ title, href }: { title: string; href: string }) => (
  <button 
    onClick={() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }}
    className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm p-6 
               border border-white/20 hover:border-white/40 transition-all duration-300
               flex flex-col items-center justify-center min-h-[120px]
               hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300" />
    <h3 className="text-xl font-semibold text-center relative z-10 mb-2">{title}</h3>
    <div className="w-8 h-8 flex items-center justify-center relative z-10 
                    opacity-0 group-hover:opacity-100 transform translate-y-2 
                    group-hover:translate-y-0 transition-all duration-300">
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  </button>
);

export default function ApplyLongevityClient() {
  return (
    <div className="min-h-screen w-full bg-[#1E2A38] text-white">
      {/* Hero Section */}
      <FadeInUp as="section" className="py-24 sm:py-32 md:py-40">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Apply Longevity To Yourself
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-16 max-w-3xl mx-auto">
            Which choices have the biggest impact? How we eat, how we live, how lucky are we with our genes? What about the therapies out there, stem cells, reprogramming, which one will get us to life extension?
          </p>
          
          <div className="text-center mb-12">
            <p className="text-xl font-semibold mb-8">Scroll to..</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <SectionLink title="Lifestyle" href="#lifestyle" />
            <SectionLink title="Diet" href="#diet" />
            <SectionLink title="Longevity Therapies" href="#therapies" />
          </div>
        </div>
      </FadeInUp>

      {/* Lifestyle Section with Timeline */}
      <section id="lifestyle" className="w-full py-28 bg-white">
        <div className="max-w-3xl w-full mx-auto flex flex-col items-center px-6 md:px-0">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-black mb-16">
            Which lifestyle should you follow
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16">
            It all starts by how we set our day in motion. So what is the ideal morning routine and why does everyone have a different opinion on this? Let us explain it simply for you.
          </p>

          <div className="relative flex flex-col items-center w-full">
            {/* Timeline bar */}
            <div className="absolute left-1/2 top-0 h-full w-1.5 bg-[#64BC6E] -translate-x-1/2 z-0" />

            {/* Timeline items */}
            <StaggerChildren className="w-full space-y-32" staggerDelay={0.15}>
              {/* Item 1: Genes vs. Choices */}
              <motion.div variants={fadeInUp} className="flex flex-col items-center relative">
                {/* Circle Icon */}
                <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mb-12 shadow-xl relative z-10">
                  <div className="w-32 h-32 bg-[#64BC6E] rounded-full flex items-center justify-center">
                    <Image
                      src="/image/applylongevity/genes-vs-choices.svg"
                      alt="Genes vs Choices Icon"
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
                {/* Content */}
                <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg">
                  <h3 className="font-bold text-gray-900 text-xl mb-4">The Great Debate: Genes vs. Choices</h3>
                  <p className="text-gray-600">
                    For decades, it was thought that with the right lifestyle, people could overcome almost any genetic hurdle. Recent re-evaluations suggest our genetic blueprint has a much stronger influence on our lifespan than previously thought. However, lifestyle still plays a huge role and you should aim to have the best lifestyle as possible.
                  </p>
                </div>
              </motion.div>

              {/* Item 2: Workout Principles */}
              <motion.div variants={fadeInUp} className="flex flex-col items-center relative">
                {/* Circle Icon */}
                <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mb-12 shadow-xl relative z-10">
                  <div className="w-32 h-32 bg-[#64BC6E] rounded-full flex items-center justify-center">
                    <Image
                      src="/image/applylongevity/perfect-routine.svg"
                      alt="Strength Icon"
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
                {/* Content */}
                <div className="space-y-6 max-w-lg w-full">
                  <div className="bg-white shadow-lg rounded-xl p-8">
                    <h3 className="font-bold text-gray-900 text-xl mb-4">The Perfect Routine</h3>
                    <p className="text-gray-600">
                      There is no single &quot;perfect&quot; workout routine, but some principles are universally beneficial to maintain strength and independence as you age.
                    </p>
                  </div>

                  {/* Box 1: Strength */}
                  <div className="bg-white shadow-lg rounded-xl p-8 lg:-translate-x-8 transition-transform">
                    <h3 className="font-bold text-gray-900 text-xl mb-3">Strength is Non-Negotiable</h3>
                    <p className="text-gray-600">
                      We naturally lose muscle mass as we age. Strength training is the single most effective way to combat this. Muscle is metabolically active tissue—building it helps regulate blood sugar, boosts metabolism, and keeps your body robust.
                    </p>
                  </div>
                  {/* Box 2: Legs */}
                  <div className="bg-white shadow-lg rounded-xl p-8 lg:translate-x-8 transition-transform text-right">
                    <h3 className="font-bold text-gray-900 text-xl mb-3">The Power of Strong Legs</h3>
                    <p className="text-gray-600">
                      A large number of health issues in old age stem from falls. Strong legs and good balance are your primary defense. Exercising your legs is one of the most powerful investments for your future.
                    </p>
                  </div>
                  {/* Box 3: Cardio */}
                  <div className="bg-white shadow-lg rounded-xl p-8 lg:-translate-x-8 transition-transform">
                    <h3 className="font-bold text-gray-900 text-xl mb-3">Cardiovascular Fitness</h3>
                    <p className="text-gray-600">
                      A healthy heart and efficient circulatory system are fundamental. Consistent, moderate-intensity exercise (like brisk walking, cycling, or swimming) is incredibly effective.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Item 4: Recovery and Sleep */}
              <motion.div variants={fadeInUp} className="flex flex-col items-center relative">
                {/* Circle Icon */}
                <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mb-12 shadow-xl relative z-10">
                  <div className="w-32 h-32 bg-[#64BC6E] rounded-full flex items-center justify-center">
                    <Image
                      src="/image/applylongevity/sleep-recovery.svg"
                      alt="Recovery Icon"
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
                {/* Content */}
                <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg">
                  <h3 className="font-bold text-gray-900 text-xl mb-4">The Power of Recovery</h3>
                  <p className="text-gray-600 mb-6">
                    The true strength doesn&apos;t come from the gym but from recovery. High-quality sleep is crucial for longevity. While you sleep, your body is hard at work.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#64BC6E] font-bold mr-2">•</span>
                      <div>
                        <span className="font-semibold">Cleaning House:</span> Your brain flushes out metabolic waste products.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#64BC6E] font-bold mr-2">•</span>
                      <div>
                        <span className="font-semibold">Repairing & Rebuilding:</span> Your muscles and tissues repair themselves.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#64BC6E] font-bold mr-2">•</span>
                      <div>
                        <span className="font-semibold">Regulating Hormones:</span> Crucial hormones for hunger, stress, and growth are balanced.
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Diet Section */}
      <section id="diet" className="w-full py-28 bg-[#1E2A38]">
        <div className="max-w-6xl w-full mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">
                What is the healthiest diet?
              </h2>
              <div className="space-y-6">
                <p className="text-gray-300 text-lg">
                  Should you go vegan, or avoid carbs? Is omega-3 a miracle supplement? With so much conflicting nutritional advice, it&apos;s crucial to rely on a source based on scientific evidence, not commercial interests.
                </p>
                <p className="text-gray-300 text-lg">
                  We recommend{' '}
                  <a 
                    href="https://nutritionfacts.org" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#64BC6E] underline hover:text-[#82c98a] transition-colors font-semibold"
                  >
                    NutritionFacts.org
                  </a>
                  , the non-profit project from Dr. Michael Greger. It provides data-driven answers to your questions, empowering you to build a diet that is both healthy and right for you.
                </p>
              </div>
            </div>

            {/* Link Preview Card */}
            <div className="flex-1 w-full lg:w-auto">
              <a 
                href="https://nutritionfacts.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/image/applylongevity/healthy-diet.webp"
                    alt="Healthy food ingredients including salmon, avocado, berries, and leafy greens"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-[#1E2A38] font-bold text-xl mb-2">NutritionFacts.org</h3>
                  <p className="text-gray-600">
                    The latest in evidence-based nutrition
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Longevity Therapies Section */}
      <section id="therapies" className="bg-white text-gray-800">
        <div className="w-full py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Longevity Therapies</h2>
          </div>
        </div>

        {/* Partial Reprogramming */}
        <div className="w-full py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="flex flex-col lg:flex-row items-start gap-12">
              {/* Text Content */}
              <div className="flex-1 lg:py-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Partial Reprogramming: Rejuvenating Your Cells
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What is it?</h4>
                    <p className="text-gray-600">
                      Imagine being able to turn back the clock on a cellular level. That&apos;s the core idea behind partial reprogramming. Scientists use special proteins (called &quot;Yamanaka factors&quot;) to instruct older cells to revert to a more youthful state.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">How does it work?</h4>
                    <p className="text-gray-600">
                      The process &quot;wipes clean&quot; many of the age-related markers and damage from a cell&apos;s memory, restoring more youthful function. The key is &quot;partial&quot;—it rejuvenates the cell without completely erasing its identity (like turning a skin cell back into a generic stem cell).
                    </p>
                  </div>
                  <p className="text-gray-600">
                    The goal is to rejuvenate tissues and organs from within.
                  </p>
                </div>
              </div>
              {/* Company Links */}
              <div className="flex-1 grid grid-cols-2 gap-6">
                <a 
                  href="https://altoslabs.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-6"
                >
                  <Image src="/image/applylongevity/altos-labs.webp" alt="Altos Labs Logo" width={150} height={150} className="object-contain"/>
                </a>
                <a 
                  href="https://www.retro.bio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-6"
                >
                  <Image src="/image/applylongevity/retrobio.webp" alt="Retro Biosciences Logo" width={150} height={150} className="object-contain"/>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stem Cell Therapies */}
        <div className="w-full py-20 bg-[#f8fafc]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-start gap-12">
              {/* Text Content */}
              <div className="flex-1 lg:py-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Stem Cell Therapies: The Body&apos;s Master Repair Kit
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What is it?</h4>
                    <p className="text-gray-600">
                      Stem cells are the body&apos;s raw materials—they can develop into many different cell types. As we age, our supply of healthy, effective stem cells dwindles, impairing our ability to heal and regenerate tissue.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">How does it work?</h4>
                    <p className="text-gray-600">
                      Stem cell therapies aim to introduce a new supply of healthy stem cells into the body. These new cells can then travel to areas of damage or inflammation, where they help repair tissues, regulate the immune system, and promote a healthier internal environment. It&apos;s like bringing in a fresh construction crew to fix an aging building.
                    </p>
                  </div>
                </div>
              </div>
              {/* Company Links */}
              <div className="flex-1 grid grid-cols-2 gap-6">
                <a 
                  href="https://www.blueskybio.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-6"
                >
                  <Image src="/image/applylongevity/blue-rock.webp" alt="BlueRock Logo" width={150} height={150} className="object-contain"/>
                </a>
                <a 
                  href="https://www.bioxcellerator.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-6"
                >
                  <Image src="/image/applylongevity/bioxcellerator.webp" alt="BioXcellerator Logo" width={150} height={150} className="object-contain"/>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Senolytics */}
        <div className="w-full py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="flex flex-col lg:flex-row items-start gap-12">
              {/* Text Content */}
              <div className="flex-1 lg:py-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Senolytics: Taking Out the Cellular Trash
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What is it?</h4>
                    <p className="text-gray-600">
                      As we age, some of our cells become &quot;senescent.&quot; Think of them as zombie cells—they stop dividing and refuse to die, but they hang around secreting inflammatory signals that damage nearby healthy cells and contribute to age-related diseases.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">How does it work?</h4>
                    <p className="text-gray-600">
                      Senolytics are a class of drugs designed to selectively target and eliminate these zombie cells. By clearing them out, senolytics can lower inflammation and potentially slow, prevent, or even reverse aspects of age-related decline. It&apos;s a therapeutic approach focused on cleaning out the &quot;bad apples&quot; to protect the rest of the barrel.
                    </p>
                  </div>
                </div>
              </div>
              {/* Company Links */}
              <div className="flex-1 grid grid-cols-2 gap-6">
                <a 
                  href="https://unitybiotechnology.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-6"
                >
                  <Image src="/image/applylongevity/unity-biotechnology.webp" alt="Unity Biotechnology Logo" width={150} height={150} className="object-contain"/>
                </a>
                <a 
                  href="https://www.rubedolife.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-6"
                >
                  <Image src="/image/applylongevity/rubedo-life-sciences.webp" alt="Rubedo Life Sciences Logo" width={150} height={150} className="object-contain"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 