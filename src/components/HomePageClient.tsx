"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import { motion } from "framer-motion";
import FadeInUp from '@/components/FadeInUp';
import { siteConfig } from "@/config/site";

// Note: The 'metadata' export has been removed from this file.
// It now resides in the parent server component `src/app/page.tsx`.

const faqs = [
  {
    question: 'What is longevity?',
    answer: (
      <>
        <p>Longevity means longer life, so working on longevity is extending life. There are multiple ways to extend life:</p>
        <ul className="list-disc list-inside my-4 space-y-2 text-gray-300">
          <li><strong>Lifestyle:</strong> exercise, sleep, nutrition, and habits</li>
          <li><strong>Biotech:</strong> supplements, drugs, diagnostics, interventions</li>
          <li><strong>Longevity therapies:</strong> future treatments that could repair aging damage</li>
        </ul>
        <p>Some researchers, like Aubrey de Grey, believe these therapies could one day keep us young indefinitely — a concept called <strong>Longevity Escape Velocity (LEV)</strong>.</p>
      </>
    )
  },
  {
    question: "Who's the best kind of person to get involved?",
    answer: "Since the field is very young, anyone can get involved without facing too much difficulty. People can either do things on their own or join a team, and as long as they show up, it's almost guaranteed they will succeed."
  },
  {
    question: 'Is longevity just for the rich?',
    answer: (
      <>
        <p><strong>To get involved? No.</strong></p>
        <p className="mt-2">Some advanced therapies (like gene editing) are still expensive, but many of the most powerful longevity tools are free or cheap — like exercise, sleep, or diet.</p>
        <p className="mt-2">The field needs people from all backgrounds to grow and become accessible for the majority.</p>
      </>
    )
  },
  {
    question: "What's the difference between healthspan and lifespan?",
    answer: (
      <>
        <p><strong>Lifespan</strong> = how long you live</p>
        <p><strong>Healthspan</strong> = how long you live healthy and independent</p>
      </>
    )
  },
  {
    question: 'Can I apply longevity ideas to my life now?',
    answer: (
      <>
        <p><strong>Yes, and you should.</strong></p>
        <p className="mt-2">There&apos;s a growing base of science-backed strategies to reduce disease risk and improve how you feel today.</p>
        <p className="mt-2">Start small. Focus on habits. Use our site to find trusted voices and avoid hype.</p>
      </>
    )
  },
  {
    question: 'How can I get involved in longevity without experience or money?',
    answer: (
      <>
        <p>By contributing time, curiosity, or skills. You can write, volunteer, build, spread awareness, or even just connect people.</p>
        <p className="mt-2">Check out our <Link href="/get-involved" className="text-[#64BC6E] underline hover:text-[#82c98a]">Get Involved</Link> section to start — and remember, the bar to entry is low, but the impact can be big.</p>
      </>
    )
  },
  {
    question: 'Is Join Longevity a company, a community, or something else?',
    answer: "We're a non-profit initiative aiming to guide people through the longevity ecosystem and help them join in."
  },
  {
    question: 'How do you decide who to feature in "Who\'s Who in Longevity"?',
    answer: (
      <>
        <p>We review people and organizations based on relevance, trust, and transparency. Our goal is not to judge, but to help users navigate a fast-growing space.</p>
        <p className="mt-2">We also indicate whether someone is trusted within the community or just well-known. Additionally we ask a large amount of people from the longevity community to vote to ensure these are the most accurate results.</p>
      </>
    )
  },
  {
    question: 'How do I stay updated with longevity news and projects?',
    answer: (
       <>
        <p>Head to the <Link href="/blog" className="text-[#64BC6E] underline hover:text-[#82c98a]">Blog</Link> or check out our <Link href="/#news-opportunities" className="text-[#64BC6E] underline hover:text-[#82c98a]">News & Opportunities</Link> section.</p>
        <p className="mt-2">We also recommend trusted sites like <Link href="https://www.lifespan.io" target="_blank" rel="noopener noreferrer" className="text-[#64BC6E] underline hover:text-[#82c98a]">Lifespan.io</Link> and <Link href="https://longevity.technology" target="_blank" rel="noopener noreferrer" className="text-[#64BC6E] underline hover:text-[#82c98a]">Longevity.Technology</Link>, and we curate major updates from across the field.</p>
      </>
    )
  },
  {
    question: 'Can I contribute something to Join Longevity?',
    answer: (
       <>
        <p><strong>Yes!</strong></p>
        <p className="mt-2">We&apos;re built by volunteers, from biotech writers to outreach helpers. If you want to write, join a project, or just support in some way, reach out to us <Link href="mailto:alex@joinlongevity.org" className="text-[#64BC6E] underline hover:text-[#82c98a]">here</Link>.</p>
        <p className="mt-2">We&apos;ll try to connect you with the right people or help you get started.</p>
      </>
    )
  },
];

export default function HomePageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section (Animations retained for now) */}
      <FadeInUp as="section" className="relative flex items-center min-h-[70vh] bg-[#1E2A38] overflow-hidden">
        {/* Hero pattern SVG background - Animated */}
        <div className="absolute inset-x-0 bottom-0 w-full h-full overflow-hidden">
          <motion.img 
            src="/image/homepage/long-hero-flat.svg" 
            alt="" 
            className="w-full h-full object-cover object-bottom absolute left-0 bottom-0"
            initial={{ scale: 3, x: "-100%" }}
            animate={{ 
              scale: 3,
              x: ["-100%", "100%", "-100%"]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 40,
              ease: "linear"
            }}
            style={{
              zIndex: 1,
              transformOrigin: 'bottom center'
            }} 
          />
        </div>

        <div className="container mx-auto px-8 sm:px-16 lg:px-32 py-24 flex flex-col items-start justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 max-w-3xl leading-tight tracking-tight text-white">
              Longevity Isn&apos;t Just for<br />
              Billionaires and Scientists
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl">
              Your first step into longevity, regardless of your background.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/introduction">
              <button className="jl-btn px-10 py-4 text-lg shadow-lg mb-8">
                New to Longevity?
              </button>
            </Link>
          </motion.div>
        </div>
      </FadeInUp>

      {/* Features Section (Cards) - Animations temporarily removed/simplified */}
      <FadeInUp as="section" className="py-20 bg-[#1E2A38]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 mb-12">
            <h2 className="text-2xl font-semibold text-center text-white mb-6">
              Get started with longevity
            </h2>
            
             <div className="flex flex-col items-center">
              <motion.div
                className="w-8 h-14 border-2 border-[#64BC6E] rounded-full flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className="w-2 h-2 bg-[#64BC6E] rounded-full"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Longevity Lifestyle",
                description: "Looking for lifestyle advice or current therapies? This is your guide to living longer and preparing for what's coming next. Explore daily habits, trusted treatments, and future breakthroughs.",
                icon: "/image/homepage/heart.svg",
                href: "/longevity-lifestyle"
              },
              {
                title: "The Longevity Map",
                description: "Longevity can be chaotic. We break it down visually, explain key ideas, and show you who's shaping the field.",
                icon: "/image/homepage/compass.svg",
                href: "/longevity-map"
              },
              {
                title: "Get involved",
                description: "Longevity needs more than scientists. Whether you're a student, marketer, lawyer, or just passionate, you should join!",
                icon: "/image/homepage/group.svg",
                href: "/get-involved"
              }
            ].map((feature, index) => (
              <div key={index}>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  href={feature.href}
                />
              </div>
            ))}
          </div>
        </div>
      </FadeInUp>

      {/* Longevity News, Jobs & Opportunities Section */}
      <FadeInUp as="section" id="news-opportunities" className="py-28 bg-[#f6f8fa]">
        <div className="container mx-auto px-4 sm:px-12 lg:px-24 flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
          <div className="flex-1 max-w-xl md:pr-8 text-center md:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">Longevity News, Jobs & Opportunities</h2>
            <p className="text-lg lg:text-xl text-gray-700 mb-6">
              There&apos;s real opportunity in longevity and very few people know about it. The field can feel exclusive, so many stay away. But longevity is still a small, growing niche where people are getting involved even without a degree. There&apos;s room for financial, personal, and professional growth.
            </p>
            <p className="font-semibold text-gray-800 mb-8 text-lg lg:text-xl">
              Communities are forming, early-stage startups are hiring, and new investment opportunities are emerging every month.
            </p>
            <Link href="/get-involved#events">
              <button className="jl-btn text-white bg-[#64BC6E] hover:bg-[#52a35b] transition-colors text-lg font-semibold py-3 px-8 rounded-lg shadow-md">
                Longevity Opportunities
              </button>
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8 items-center justify-center w-full mt-10 md:mt-0">
            {[
              { name: "Viva City", src: "/image/homepage/viva-city.svg", href: "https://viva.city" },
              { name: "A4LI", src: "/image/homepage/a4li.svg", href: "https://a4li.org" },
              { name: "LEV Foundation", src: "/image/homepage/lev.svg", href: "https://www.levf.org" },
              { name: "Longevity Xplorer", src: "/image/homepage/longx.svg", href: "https://www.longevityxplorer.com" },
              { name: "Swedish Longevity Cluster", src: "/image/homepage/swedish-longevity-cluster.svg", href: "https://www.swedishlongevitycluster.se" },
              { name: "TIME Initiative", src: "/image/homepage/time.svg", href: "https://www.timeinitiative.org" },
              { name: "Vitalist Bay", src: "/image/homepage/vitalist-bay.svg", href: "https://www.vitalistbay.com" },
            ].map((logo) => (
              <Link href={logo.href} key={logo.name} target="_blank" rel="noopener noreferrer" className="group">
                <div className="h-24 bg-white rounded-lg shadow-lg p-4 flex items-center justify-center transition-all duration-300 ease-in-out hover:shadow-xl group-hover:scale-105">
                  <Image 
                    src={logo.src} 
                    alt={`${logo.name} logo`} 
                    width={120} // Adjusted for better display, aspect ratio will be maintained by SVG
                    height={48} // Adjusted for better display
                    className="object-contain max-h-full max-w-full" 
                  />
                </div>
              </Link>
            ))}
            {/* You can add one more for an even grid or leave as 7 */}
          </div>
        </div>
      </FadeInUp>

      {/* Who's Who in Longevity Section - Animations temporarily removed */}
      <FadeInUp as="section" className="py-28 bg-[#1E2A38]">
        <div className="container mx-auto px-4 sm:px-12 lg:px-24 flex flex-col items-center text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Who&apos;s Who in Longevity</h2>
          <p className="font-bold text-gray-100 mb-2 text-lg lg:text-xl"><span className="text-[#64BC6E]">Who can you trust</span> and follow in longevity?</p>
          <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl">
            Everyone seems to be saying something different, and it&apos;s hard to know who&apos;s credible.<br />
            This is a curated list of the people, organizations, and communities shaping the field, designed to help you find the right ones to follow based on your goals.
          </p>
          {/* ADDING: Mobile-only See full list button, right under the description */}
          <Link href="/whos-who">
            <button className="jl-btn mb-10 text-lg font-semibold shadow block md:hidden">See full list</button>
          </Link>

          {/* Images here are not directly animated with framer-motion wrappers in this section, so they are retained */}
          <div className="w-full flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 mb-24 max-w-5xl mx-auto">
            {[
              { src: '/image/homepage/aubrey.webp', alt: 'Aubrey de Grey', label: 'Researchers' },
              { src: '/image/homepage/linus.webp', alt: 'Linus', label: 'Advocates' },
              { src: '/image/homepage/bryan.webp', alt: 'Bryan Johnson', label: 'Biohackers' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1">
                <div className="w-56 h-56 rounded-full bg-white shadow-lg flex items-center justify-center mb-3 border-2 border-gray-200 overflow-hidden transition-transform hover:scale-105">
                  <Image src={item.src} alt={item.alt} width={224} height={224} className="object-cover w-full h-full" />
                </div>
                <span className="font-medium text-lg text-white">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col md:flex-row md:justify-center gap-10 md:gap-32 mt-16 mb-10 max-w-3xl mx-auto">
            <div className="flex flex-col items-center flex-1">
              <div className="flex gap-0 mb-2 relative">
                <div className="w-40 h-40 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-gray-200 overflow-hidden z-10 transition-transform hover:scale-105">
                  <Image src="/image/homepage/lbf.webp" alt="LBF" width={160} height={160} className="object-cover w-full h-full" />
                </div>
                <div className="w-40 h-40 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-gray-200 overflow-hidden -ml-12 z-0 transition-transform hover:scale-105">
                  <Image src="/image/homepage/vitalism.webp" alt="Vitalism" width={160} height={160} className="object-cover w-full h-full" />
                </div>
              </div>
              <span className="font-medium text-base mt-2 text-white">Hubs & Communities</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="flex gap-0 mb-2 relative">
                <div className="w-40 h-40 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-gray-200 overflow-hidden z-10 transition-transform hover:scale-105">
                  <Image src="/image/homepage/buck.webp" alt="Buck Institute" width={160} height={160} className="object-cover w-full h-full" />
                </div>
                <div className="w-40 h-40 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-gray-200 overflow-hidden -ml-12 z-0 transition-transform hover:scale-105">
                  <Image src="/image/homepage/lab.webp" alt="Lab" width={160} height={160} className="object-cover w-full h-full" />
                </div>
              </div>
              <span className="font-medium text-base mt-2 text-white">Organizations</span>
            </div>
          </div>
          <Link href="/whos-who">
            <button className="jl-btn mt-4 text-lg font-semibold shadow block">See full list</button>
          </Link>
        </div>
      </FadeInUp>

      {/* Join Longevity Projects Section - Animations temporarily removed */}
      <FadeInUp as="section" className="py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-12 lg:px-24 flex flex-col md:flex-row items-center md:items-start gap-20 md:gap-32">
          <div className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0">
            <div className="hidden md:block md:w-96 md:h-64 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/image/homepage/jl-projects.webp" 
                alt="Join Longevity Projects"
                width={384} // Corresponds to w-96 (96*4)
                height={256} // Corresponds to h-64 (64*4)
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1 max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Join Longevity Projects</h2>
            <p className="font-bold text-gray-900 mb-3 text-lg lg:text-xl">The easiest way to get involved in longevity is to join us.</p>
            <p className="text-lg lg:text-xl text-gray-700 mb-6">
              We&apos;re always looking for people to collaborate with.<br />
              We&apos;re building tools, hosting interviews, forming partnerships, and launching public engagement projects.
            </p>
            <p className="font-bold text-gray-900 mb-8 text-lg lg:text-xl">If you&apos;re curious, creative, or just want to contribute, this is your place.</p>
            <Link href="/blog#jl-projects">
              <button className="jl-btn text-white">See our Projects</button>
            </Link>
          </div>
        </div>
      </FadeInUp>

      {/* FAQ Section */}
      <FadeInUp as="section" id="faq" className="py-28 bg-[#1E2A38]">
        <div className="container mx-auto px-4 sm:px-12 lg:px-24 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-300">
              Everything you need to know about getting started with longevity
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-[#23293a] rounded-xl overflow-hidden transition-all duration-200 hover:bg-[#2a3142]"
              >
                <button
                  className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left focus:outline-none group"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span className="text-lg font-medium text-white flex-1">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#64BC6E] w-6 h-6 flex items-center justify-center"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2} 
                      stroke="currentColor" 
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openFaq === idx ? "auto" : 0,
                    opacity: openFaq === idx ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 text-gray-300 leading-relaxed space-y-4">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-300 mb-8">
              Still have questions? We&apos;re here to help.
            </p>
            <Link href="mailto:alex@joinlongevity.org ">
              <button className="jl-btn inline-flex items-center gap-2 group">
                <span>Ask us anything</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </Link>
            <p className="text-sm text-gray-400 mt-8">
              Last updated: {siteConfig.lastUpdated}
            </p>
          </div>
        </div>
      </FadeInUp>
    </div>
  );
} 