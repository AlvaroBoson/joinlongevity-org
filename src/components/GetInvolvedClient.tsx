"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import FadeInUp from "@/components/FadeInUp";
import StaggerChildren from "@/components/StaggerChildren";
import RisingDotsBackground from '@/components/RisingDotsBackground';
import { siteConfig } from '@/config/site';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Temporarily simplified scrollPromptJsx for diagnostics
const scrollPromptJsx = (
  <motion.div
    className="flex flex-col items-center" 
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="w-8 h-14 border-2 border-[#64BC6E] rounded-full flex items-center justify-center">
      <motion.div
        className="w-2 h-2 bg-[#64BC6E] rounded-full"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  </motion.div>
);

export default function GetInvolvedClient() {
  const pathname = usePathname();
  // Smooth scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#1E2A38]">
      {/* Background gradient that covers everything */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#1E2A38] to-[#1a2330] w-full h-full" style={{ zIndex: -1 }} />
      
      {/* Main content */}
      <div className="relative">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24">
          <RisingDotsBackground />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl font-bold text-white mb-8 tracking-tight">
                Get involved | Join Longevity 
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether you&apos;re a marketer, lawyer, student, creator, or just curious,
                there&apos;s a place for you in longevity. The field is still young, and it
                desperately needs more than just scientists. If you care about life and
                health, your contribution matters.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cards Section - Animations Restored */}
        <FadeInUp 
          as="section" 
          className="relative pt-10 pb-20 sm:py-20" 
          key={pathname + "-cards-section"} 
          triggerOnMount={true}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile Scroll Prompt */}
            <div className="mb-12 flex justify-center md:hidden">
              {scrollPromptJsx}
            </div>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto" key={pathname + "-main-cards"}>
              {[
                {
                  title: "Conferences & Events",
                  description: "Explore in which longevity conferences is it worth to volunteer or attend. From research-heavy hubs to creator-friendly gatherings",
                  icon: "/image/homepage/group.svg",
                  href: "#events"
                },
                {
                  title: "Projects & Jobs",
                  description: "Discover startups looking for partners or members, longevity job openings, and other roles helping longevity",
                  icon: "/image/homepage/compass.svg",
                  href: "#projects"
                },
                {
                  title: "Support & Advocate",
                  description: "Find practical ways to push the field forward and raise awareness. Whether you post, build, invest, or speak out",
                  icon: "/image/homepage/heart.svg",
                  href: "#support-advocate"
                }
              ].map((card, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Link 
                    href={card.href}
                    onClick={scrollToSection}
                    className="group focus:outline-none focus:ring-2 focus:ring-[#64BC6E] focus:ring-offset-2 focus:ring-offset-[#1E2A38] rounded-xl block h-full"
                  >
                    <div className="h-full flex flex-col items-center text-center p-8 rounded-xl bg-[#1E2A38]/50 backdrop-blur-sm border border-[#64BC6E]/10 group-hover:bg-[#64BC6E]/10 group-hover:border-[#64BC6E]/30 transition-all duration-300">
                      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        <div className="w-16 h-16 rounded-full bg-[#64BC6E]/10 flex items-center justify-center">
                          <Image src={card.icon} alt={`${card.title} icon`} width={40} height={40} className="w-10 h-10" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#64BC6E] transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </StaggerChildren>

            {/* Desktop Scroll Prompt */}
            <div className="mt-16 hidden md:flex justify-center">
              {scrollPromptJsx}
            </div>
          </div>
        </FadeInUp>

        {/* Why Get Involved Section - NEW */}
        <FadeInUp as="section" className="relative py-16 sm:py-24 bg-white text-gray-900" key={pathname + "-why-get-involved-section"}>
          <div className="container mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Why Get Involved
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
              The longevity field is still young, which means there&apos;s room to grow. 
              You don&apos;t need to be a researcher to contribute, the field needs advocates, 
              marketers, designers, investors, and more. Right now, barriers are low, 
              but opportunities are high. If you care about the future of health, you 
              already belong here. This is the perfect time to join, before everyone else does.
            </p>
            <ul className="space-y-3 text-lg sm:text-xl text-gray-500 max-w-md mx-auto text-left inline-block">
              <li className="flex items-start">
                <span className="text-[#64BC6E] mr-3 text-2xl leading-none">✓</span> 
                <span>Build your name early</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#64BC6E] mr-3 text-2xl leading-none">✓</span> 
                <span>Work with mission-driven people</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#64BC6E] mr-3 text-2xl leading-none">✓</span> 
                <span>Make real impact</span>
              </li>
            </ul>
          </div>
        </FadeInUp>

        {/* Events Section - Now White */}
        <div id="events">
          <FadeInUp as="section" className="py-32 bg-[#1E2A38]" key={pathname + "-events-section"}>
            <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-20">
                  {/* Text content - Updated text colors for white bg */}
                  <motion.div variants={fadeInUp} className="flex-1 lg:sticky lg:top-8 text-center lg:text-left">
                    <h2 className="text-4xl font-bold text-white mb-8">
                      Attend Events and Join Communities
                    </h2>
                    <p className="text-gray-300 mb-6 text-lg">
                      The easiest way to enter longevity is by showing up. Many conferences are friendly, volunteer-friendly, and full of opportunities. Whether you want to network, or find collaborators, this is where to start.
                    </p>
                    <p className="text-gray-300 text-lg">
                      Find out more about the reputation of these conferences at{" "}
                      <Link href="/whos-who" className="text-[#64BC6E] underline hover:text-[#82c98a] transition-colors">
                        Who&apos;s Who
                      </Link>
                    </p>
                  </motion.div>
                  {/* Staggered image grid */}
                  <StaggerChildren className="flex-1" key={pathname + "-event-images"}>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {[
                        { name: "ARDD", imageSrc: "/image/getinvolved/ardd.webp", targetUrl: "https://agingpharma.org" },
                        { name: "LSD", imageSrc: "/image/getinvolved/lsd.webp", targetUrl: "https://longevitysummitdublin.com" },
                        { name: "TransVision", imageSrc: "/image/getinvolved/transvision.webp", targetUrl: "https://www.transvisionmadrid.com" },
                        { name: "LBF", imageSrc: "/image/getinvolved/lbf.webp", targetUrl: "https://www.longbiofellowship.org" },
                        { name: "Vitalism", imageSrc: "/image/getinvolved/vitalism.webp", targetUrl: "http://vitalism.io" },
                        { name: "Social media", imageSrc: "/image/getinvolved/socialmedia.webp", targetUrl: "#stay-up-to-date" }
                      ].map((item, index) => (
                         <Link 
                            href={item.targetUrl} 
                            key={item.name + "-link"} 
                            className="group block" 
                            onClick={item.targetUrl.startsWith("#") ? scrollToSection : undefined}
                            target={item.targetUrl.startsWith("http") ? "_blank" : "_self"}
                            rel={item.targetUrl.startsWith("http") ? "noopener noreferrer" : ""}
                          >
                           <motion.div
                             variants={fadeInUp}
                             className={`min-h-[120px] w-full aspect-[4/3] rounded-xl hover:scale-105 transition-transform cursor-pointer relative overflow-hidden ${(index % 2 === 1) ? "translate-y-4" : "translate-y-0"} ${(index % 3 === 0) ? "md:translate-y-2" : (index % 3 === 1) ? "md:translate-y-6" : "md:translate-y-2"}`}
                           >
                             {item.imageSrc && (
                               <Image 
                                 src={item.imageSrc} 
                                 alt={item.name} 
                                 layout="fill" 
                                 objectFit="cover" 
                                 className="transition-transform duration-300"
                               />
                             )}
                             <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                               <p className="text-white font-bold text-center p-2">{item.name}</p>
                             </div>
                           </motion.div>
                         </Link>
                      ))}
                    </div>
                  </StaggerChildren>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>

        {/* Projects Section */}
        <div id="projects">
          <FadeInUp as="section" className="py-32 bg-white" key={pathname + "-projects-section"}>
            <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 md:gap-20">
                  {/* Text content block */}
                  <motion.div variants={fadeInUp} className="flex-1 text-center lg:text-left flex flex-col">
                    <div> 
                      <h2 className="text-4xl font-bold text-black mb-8">
                        Join Projects & Companies
                      </h2>
                      <p className="text-gray-600 mb-6 text-lg">
                        Want to be hands-on? Whether you&apos;re looking to volunteer, collaborate, or find a paid position, there&apos;s a place for you. Many longevity projects and companies are looking for help – and not just from scientists.
                      </p>
                    </div>
                     <div className="w-full text-center lg:text-left mt-8">
                        <Link
                           href="https://longevitylist.com/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-block px-8 py-3 bg-[#64BC6E] text-white font-semibold rounded-lg hover:bg-[#52a35b] transition-colors text-lg shadow-md"
                         >
                           View Longevity Jobs
                        </Link>
                     </div>
                  </motion.div>
                  {/* Image for Projects section */}
                  <motion.div variants={fadeInUp} className="flex-1 w-full">
                     <div className="min-h-[150px] w-full aspect-[16/9] rounded-xl shadow-xl group cursor-pointer relative overflow-hidden">
                        <Image
                         src="/image/getinvolved/join-projects.webp" 
                         alt="Join Projects & Companies" 
                         layout="fill" 
                         objectFit="cover" 
                         className="transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                   </motion.div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>

        {/* Support & Advocate Section - Now white */}
        <div id="support-advocate">
          <FadeInUp as="section" className="py-32 bg-[#1E2A38]" key={pathname + "-support-section"}>
            <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                  <motion.div variants={fadeInUp} className="flex-1 text-center lg:text-left">
                    <h2 className="text-4xl font-bold text-white mb-8">
                      Support & Advocate
                    </h2>
                    <p className="text-gray-300 mb-6 text-lg">
                      Whether you share news, correct myths, or start your own longevity-themed project, your voice matters. Every action helps normalize the conversation and brings us closer to a future where healthy longevity is the default.
                    </p>
                    <p className="text-gray-300 text-lg">
                      Discover who to follow to get inspiration
                    </p>
                    <p className="text-sm text-gray-400 mt-4">
                      Tutorials of how to advocate are coming soon! Last updated: {siteConfig.lastUpdated}
                    </p>
                  </motion.div>
                  <motion.div 
                    variants={fadeInUp}
                    className="flex-1 w-full"
                  >
                    <div className="min-h-[150px] w-full aspect-[16/9] rounded-xl shadow-xl group cursor-pointer relative overflow-hidden">
                      <Image 
                        src="/image/getinvolved/support-advocate.webp" 
                        alt="Support & Advocate" 
                        layout="fill" 
                        objectFit="cover" 
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>

        {/* Stay Up to Date Section - NEW */}
        <div id="stay-up-to-date">
          <FadeInUp as="section" className="py-16 sm:py-24 bg-white" key={pathname + "-stay-up-to-date-section"}>
            <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Stay Up to Date With Longevity
                </h2>
              </div>
              <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6" key={pathname + "-stay-up-to-date-cards"}>
                {[
                  {
                    name: "Our Blog",
                    imageSrc: "/image/getinvolved/join-longevity.webp",
                    href: "/blog",
                    bgColor: "bg-[#1E2A38]",
                    external: false,
                  },
                  {
                    name: "Longevity.Technology",
                    imageSrc: "/image/getinvolved/longevity-technology.webp",
                    href: "https://longevity.technology",
                    bgColor: "bg-[#f2a914]",
                    external: true,
                  },
                  {
                    name: "Lifespan.io",
                    imageSrc: "/image/getinvolved/lifespanio.webp",
                    href: "https://www.lifespan.io",
                    bgColor: "bg-[#ffffff]",
                    external: true,
                  },
                  {
                    name: "AgingBiotech.info",
                    imageSrc: "/image/getinvolved/aging-biotech.webp",
                    href: "https://agingbiotech.info",
                    bgColor: "bg-[#efedf0]",
                    external: true,
                  },
                ].map((item) => (
                  <motion.div variants={fadeInUp} key={item.name}>
                    <Link
                      href={item.href}
                      target={item.external ? "_blank" : "_self"}
                      rel={item.external ? "noopener noreferrer" : ""}
                      className={`group block p-1 rounded-xl hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-[#64BC6E] focus:ring-offset-2 focus:ring-offset-white`}
                    >
                      <div className={`w-full aspect-[4/3] rounded-xl ${item.bgColor} flex items-center justify-center p-4 overflow-hidden relative`}>
                        <Image 
                          src={item.imageSrc} 
                          alt={item.name} 
                          layout="fill" 
                          objectFit="contain"
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <p className="mt-3 text-sm font-medium text-center text-gray-700 group-hover:text-[#64BC6E] transition-colors">
                        {item.name}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </StaggerChildren>
            </div>
          </FadeInUp>
        </div>

      </div>
    </div>
  );
} 