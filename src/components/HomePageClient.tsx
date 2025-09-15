"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import { motion } from "framer-motion";
import FadeInUp from '@/components/FadeInUp';
import { siteConfig } from "@/config/site";
import AnimatedDotsBackground from "./AnimatedDotsBackground";

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
  const heroRef = useRef<HTMLElement>(null);
  const [isHeroInView, setIsHeroInView] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentHero = heroRef.current;
    if (currentHero) {
      observer.observe(currentHero);
    }

    return () => {
      if (currentHero) {
        observer.unobserve(currentHero);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* New Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-center text-gray-800 p-4 overflow-hidden"
      >
        <AnimatedDotsBackground isAnimating={isHeroInView} />
        <div className="relative z-10">
          <FadeInUp>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              <span className="text-[#64BC6E]">Longevity</span> is for everyone.
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Longevity can be overwhelming. We make it simple to understand. So even you can get involved.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.4}>
            <Link href="/introduction" className="px-8 py-3 bg-[#64BC6E] text-white rounded-full font-semibold text-lg hover:bg-[#52a35b] transition-colors shadow-lg">
              Get Started
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* Features Section (Cards) */}
      <FadeInUp as="section" className="py-20 bg-[#1E2A38]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 mb-12">
            <h2 className="text-2xl font-semibold text-center text-white mb-6">
              Choose Your Longevity Path
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
                title: "Apply Longevity on Yourself",
                description: "What can you actually do to live longer. Is it lifestyle changes, following and applying therapies to yourself? Which ones? Explore daily habits, trusted treatments, and future breakthroughs.",
                icon: "/image/homepage/heart.svg",
                href: "/apply-longevity"
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

      {/* How to get started Section */}
      <FadeInUp as="section" id="news-opportunities" className="py-28 bg-[#f6f8fa]">
        <div className="container mx-auto px-4 sm:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">How to get started</h2>
            <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to jump in after{' '}
              <button
                onClick={() => {
                  const orientSection = document.querySelector('#orient-yourself');
                  if (orientSection) {
                    orientSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="font-semibold text-[#64BC6E] underline hover:text-[#52a35b] transition-colors cursor-pointer"
              >
                orienting yourself
              </button>
              ? The first step is to ask yourself: What you want from longevity?
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Just Curious Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#64BC6E]/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#64BC6E]/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#64BC6E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Just curious?</h3>
              </div>
              <div className="space-y-4 mb-4">
                <p className="text-gray-600">
                  <Link href="/introduction" className="text-[#64BC6E] font-semibold underline hover:text-[#52a35b] transition-colors">
                    Get to know
                  </Link>
                  {' '}what longevity is
                </p>
                <p className="text-gray-600">
                  Explore the things you{' '}
                  <button
                    onClick={() => {
                      // Navigate to explorer with Must Know filter enabled
                      window.location.href = '/longevity-explorer?mustKnow=true#filters';
                    }}
                    className="text-[#64BC6E] font-semibold underline hover:text-[#52a35b] transition-colors cursor-pointer bg-transparent border-none p-0"
                  >
                    Must know
                  </button>
                  {' '}in longevity
                </p>
              </div>
              <div className="text-sm text-gray-500">
                Perfect for beginners who want to learn and stay informed
              </div>
            </div>
            
            {/* Want to Contribute Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#64BC6E]/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#64BC6E]/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#64BC6E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Want to contribute?</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Discover ways to{' '}
                <Link href="/get-involved#support-advocate" className="text-[#64BC6E] font-semibold underline hover:text-[#52a35b] transition-colors">
                  Support Longevity
                </Link>
                {' '}or connect with our{' '}
                <button
                  onClick={() => {
                    // Navigate to explorer with Helpers category selected
                    window.location.href = '/longevity-explorer?category=Helpers#filters';
                  }}
                  className="text-[#64BC6E] font-semibold underline hover:text-[#52a35b] transition-colors cursor-pointer bg-transparent border-none p-0"
                >
                  Helpers
                </button>
              </p>
              <div className="text-sm text-gray-500">
                Ready to make an impact? Start here to find your path
              </div>
            </div>
          </div>
        </div>
      </FadeInUp>

      {/* Orient yourself Section */}
      <FadeInUp as="section" id="orient-yourself" className="py-28 bg-[#1E2A38]">
        <div className="container mx-auto px-4 sm:px-12 lg:px-24 flex flex-col items-center text-center">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Orient yourself</h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              There are many communities, companies, and projects. To make sense of it all, visit the{' '}
              <Link href="/longevity-explorer" className="text-[#64BC6E] font-semibold underline hover:text-[#52a35b] transition-colors">
                Explorer
              </Link>
            </p>
          </div>
          
          {/* Simple Instructions Layout */}
          <div className="max-w-4xl mx-auto mb-16 space-y-8">
            <div className="flex items-start gap-4 text-left">
              <div className="flex-shrink-0 w-8 h-8 bg-[#64BC6E] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Fast way to use it</h3>
                <p className="text-gray-300 text-lg">
                  Check{' '}
                  <button
                    onClick={() => {
                      // Navigate to explorer with Must Know filter enabled
                      window.location.href = '/longevity-explorer?mustKnow=true#filters';
                    }}
                    className="text-[#64BC6E] font-semibold underline hover:text-[#52a35b] transition-colors cursor-pointer bg-transparent border-none p-0"
                  >
                    Must Know
                  </button>
                  {' '}to see the essentials everyone knows about
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 text-left">
              <div className="flex-shrink-0 w-8 h-8 bg-[#64BC6E] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Filter by category</h3>
                <p className="text-gray-300 text-lg">
                  Researchers, News, Conferences, Helpers
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 text-left">
              <div className="flex-shrink-0 w-8 h-8 bg-[#64BC6E] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Still lost?</h3>
                <p className="text-gray-300 text-lg">
                  Reach out to a{' '}
                  <button
                    onClick={() => {
                      // Navigate to explorer with Helpers category selected
                      window.location.href = '/longevity-explorer?category=Helpers#filters';
                    }}
                    className="text-[#64BC6E] font-semibold underline hover:text-[#52a35b] transition-colors cursor-pointer bg-transparent border-none p-0"
                  >
                    Helper
                  </button>
                  {' '}for guidance
                </p>
              </div>
            </div>
          </div>

          {/* ADDING: Mobile-only See full list button, right under the description */}
          <Link href="/longevity-explorer">
            <button className="jl-btn mb-10 text-lg font-semibold shadow block md:hidden">Explore the Landscape</button>
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
          <Link href="/longevity-explorer">
            <button className="jl-btn mt-4 text-lg font-semibold shadow block">Explore the Landscape</button>
          </Link>
        </div>
      </FadeInUp>

      {/* Join Longevity Projects Section */}
      <FadeInUp as="section" className="py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-12 lg:px-24 flex flex-col md:flex-row items-center md:items-start gap-20 md:gap-32">
          <div className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0">
            <div className="hidden md:block md:w-96 md:h-64 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/image/homepage/jl-projects.webp" 
                alt="Join Longevity Projects"
                width={384}
                height={256}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1 max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">Join Longevity Projects</h2>
            <p className="text-lg lg:text-xl text-gray-700 mb-6 font-semibold">Looking for the easy start?</p>
            <p className="text-lg lg:text-xl text-gray-700 mb-6">
              The quickest way to get involved is to join us or one of these projects:
            </p>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-700">
                <strong className="text-gray-900">Join Longevity Needs</strong> – See what we&apos;re looking for right now.
              </p>
              <p className="text-lg text-gray-700">
                <strong className="text-gray-900">Conferences</strong> – Volunteer and enter for free while building your network.
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800">Projects coming soon.</p>
              <p className="text-sm text-gray-500 mt-2">
                Last updated: {siteConfig.lastUpdated}
              </p>
            </div>
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