"use client";

import Link from "next/link";
import React from "react";

export default function AboutPageClient() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="w-full py-24 sm:py-32 md:py-40 bg-[#1E2A38] text-white flex flex-col items-center justify-center text-center">
        <div className="container mx-auto px-6 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8">
            About Join Longevity
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl max-w-3xl mx-auto text-gray-300">
            The longevity field is full of potential but it&apos;s fragmented,
            confusing, and too often seen as something just for scientists or
            billionaires.
          </p>
        </div>
      </section>

      {/* Our Core Mission Section */}
      <section className="w-full py-16 sm:py-20 bg-[#0A0F14] text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl text-center">
          <p className="text-xl sm:text-2xl leading-relaxed mb-4">
            <strong className="text-white">Join Longevity</strong> was created to change that.
          </p>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            We help people understand what longevity{" "}
            <em className="font-semibold text-gray-100">really</em> is, how to
            apply it to their lives, and how to get involved in the field, no
            matter of their <strong className="text-white">background</strong> or{" "}
            <strong className="text-white">financial status</strong>.
          </p>
        </div>
      </section>

      {/* The Current Landscape / The Challenge Section */}
      <section className="w-full py-16 sm:py-24 bg-[#1E2A38] text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Navigating the Noise
          </h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              The longevity movement is growing fast but it&apos;s still perceived
              as <strong className="text-white">exclusive</strong>, reserved for researchers,
              billionaires, or tech insiders. Because the field is small,
              it&apos;s surprisingly easy for individuals or brands to gain
              outsized influence.
            </p>
            <p>
              We&apos;ve seen skincare companies hijack longevity-related searches.
              We&apos;ve seen figures like Bryan Johnson become the face of the
              movement almost overnight. And while influencers like Andrew
              Steele or Linus Peterson help bring visibility, they&apos;re not
              always active where younger or newer audiences are.
            </p>
            <p>
              This creates the risk where the future of human health could be
              shaped by <span className="font-bold text-white">whoever gets the most attention</span>, not
              who&apos;s doing the <span className="font-bold text-[#64BC6E]">most meaningful work</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach / What We Do Section */}
      <section className="w-full py-16 sm:py-24 bg-[#0A0F14] text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl text-center">
          <p className="text-xl sm:text-2xl leading-relaxed mb-8">
            <strong className="text-white">Join Longevity</strong> exists to change that.
          </p>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
            We aim to make longevity:
          </h3>
          <ul className="space-y-4 text-lg sm:text-xl text-gray-300 max-w-xl mx-auto">
            <li>
              <strong className="text-white">Understandable</strong> — with simple guides and
              orientation tools
            </li>
            <li>
              <strong className="text-white">Actionable</strong> — through curated news, trusted
              figures, and practical steps
            </li>
            <li>
              <strong className="text-white">Accessible</strong> — for anyone, not just
              researchers or investors
            </li>
          </ul>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mt-10">
            Whether you&apos;re a <span className="font-bold text-[#64BC6E]">student</span>, 
            <span className="font-bold text-[#64BC6E]"> enthusiast</span>, a 
            <span className="font-bold text-[#64BC6E]"> startup founder</span>, or 
            just <span className="font-bold text-[#64BC6E]">curious</span>, there&apos;s a place for
            you and you can help longevity.
          </p>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="w-full py-16 sm:py-24 bg-[#1E2A38] text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
            Why We Exist
          </h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-center">
            <p>
              The longevity movement needs <strong className="text-white">more minds</strong>, 
              <strong className="text-white"> more energy</strong>, and 
              <strong className="text-white"> more visibility</strong>.
            </p>
            <p>
              We believe the field will only reach its potential when{" "}
              <span className="font-bold text-[#64BC6E]">more people</span> understand
              it, <span className="font-bold text-[#64BC6E]">contribute</span> to it,
              and <span className="font-bold text-[#64BC6E]">demand</span> its progress.
            </p>
            <p>Join Longevity exists to make that possible.</p>
            <p className="mt-4 text-xl sm:text-2xl">
              We&apos;re not a company, clinic, or influencer brand. Think of us
              as an <span className="font-bold text-[#64BC6E]">open, evolving platform</span>, 
              created for extending human health and possibility.
            </p>
          </div>
        </div>
      </section>

      {/* Non-Profit Status Section */}
      <section className="w-full py-16 sm:py-20 bg-[#0A0F14] text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Non-profit</h2>
          <div className="space-y-4 text-lg sm:text-xl text-gray-300 leading-relaxed">
            <p>
              Join Longevity is non-profit. We don&apos;t profit from clicks. We&apos;re
              here to grow the field and invite more people into it.
            </p>
            <p>
              We don&apos;t do paid placements or affiliate deals. We do research,
              vetting, and honest orientation.
            </p>
            <p>
              Visibility in this space shouldn&apos;t be bought. It should be earned.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-20 sm:py-28 bg-[#1E2A38] text-white">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            Want to get involved?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-lg">
            <Link href="/whos-who" className="text-[#64BC6E] hover:text-[#82d88b] underline font-medium transition-colors duration-150">
                Who&apos;s Who in Longevity
            </Link>
            <span className="hidden sm:inline text-gray-400">|</span>
            <Link href="/longevity-map" className="text-[#64BC6E] hover:text-[#82d88b] underline font-medium transition-colors duration-150">
                Explore the Longevity Map
            </Link>
            <span className="hidden sm:inline text-gray-400">|</span>
            <Link href="/get-involved" className="text-[#64BC6E] hover:text-[#82d88b] underline font-medium transition-colors duration-150">
                Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 