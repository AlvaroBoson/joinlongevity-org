"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
// import { Linkedin } from 'lucide-react'; // Lucide-react import commented out

// Placeholder for team member data - replace with actual data later
const teamMembers = [
  {
    name: "Alvaro",
    description: "a connector with a strong network in longevity, building awareness and making the field more accessible.",
    imageUrl: "/image/blog/alvaro.webp", // Replace with actual or keep placeholder
    linkedinUrl: "https://www.linkedin.com/in/alva-boson/", // Replace with actual LinkedIn URL
  },
  {
    name: "Peter",
    description: "creating a longevity-focused investment fund, constantly surrounded by the latest biotech news and innovations.",
    imageUrl: "/image/blog/peter.webp",
    linkedinUrl: "https://www.linkedin.com/in/peter-mathiesen-07698542/",
  },
  {
    name: "Mirza",
    description: "a newcomer to longevity who simply reached out and started contributing, proving you don't need credentials or funding to make an impact.",
    imageUrl: "/image/blog/mirza.webp",
    linkedinUrl: "https://www.linkedin.com/in/mirza-nafeul-islam-638b8493/",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[#0A0F14] text-white min-h-screen">
      {/* Section 1: Intro */}
      <section className="py-16 sm:py-24 bg-[#1E2A38]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight">
            Join Longevity Blog
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10">
            This blog is created by <span className="font-semibold">volunteers</span>, people passionate about longevity who want to keep others informed and involved. 
            It is curated with <span className="font-semibold text-[#64BC6E]">care</span>: every post is reviewed by members of the Join Longevity team, and at least <span className="font-semibold">one contributor per article</span> is someone actively involved in the longevity field, whether through <span className="font-semibold text-[#64BC6E]">research, biotech, investing, or outreach</span>.
          </p>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10">
            Our goal is to publish <span className="font-semibold text-[#64BC6E]">fact-based, regularly updated content</span> about news, trends, and events shaping the future of longevity.
          </p>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-12">
            We value <span className="font-semibold">accuracy and transparency</span>. That&apos;s why each post is a <span className="font-semibold text-[#64BC6E]">collaborative effort</span>, combining fresh perspectives with <span className="font-semibold">expert validation</span>.
          </p>
          <Link 
            href="#" // Placeholder for contact form link
            className="inline-block px-8 py-3 bg-[#64BC6E] text-[#1E2A38] font-semibold rounded-lg hover:bg-[#52a35b] transition-colors text-lg shadow-md"
          >
            Want to contribute?
          </Link>
        </div>
      </section>

      {/* Section 2: Team & Substack */}
      <section id="join-biotech-blog" className="py-16 sm:py-24 bg-white text-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            The Join Longevity Blog
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-10">
            Currently, our biotech blog is led by a small team of three:
          </p>
          
          <div className="space-y-10 mb-12">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 bg-gray-50 rounded-xl shadow">
                <div className="relative w-20 h-20 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                  <Image 
                    src={member.imageUrl} 
                    alt={member.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start mb-2">
                    <h3 className="text-2xl font-semibold text-gray-800 mr-3">{member.name}</h3>
                    <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0077b5] transition-colors text-xs">
                      {/* <Linkedin size={24} /> SVG Icon replaced with text */} (LinkedIn)
                    </a>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 text-center">
            This is what Join Longevity is about: making it possible for anyone to join the movement and grow with it.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-10 text-center">
            Writing for this blog opens doors. It creates visibility, builds your network, and gives you a voice in the longevity space.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
            The blog is slowly migrating here.
            Until then, check out our latest posts on <Link href="https://joinlongevity.substack.com" target="_blank" rel="noopener noreferrer" className="text-[#64BC6E] underline hover:text-[#52a35b] font-semibold transition-colors">Substack</Link>.
          </p>
        </div>
      </section>

      {/* Section 3: Get Involved in JL Projects - NEW */}
      <section id="jl-projects" className="py-16 sm:py-24 bg-[#1E2A38]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
            Get Involved in JL Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
            We&apos;re currently preparing both volunteer and paid opportunities that anyone can join, no matter your background.
          </p>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
            If you&apos;d like to get involved before we publish them, feel free to reach out <Link href="mailto:alex@joinlongevity.org" className="text-[#64BC6E] underline hover:text-[#82c98a] transition-colors">here</Link>.
          </p>
          <p className="text-sm text-gray-400 mt-8">
            Last updated: {siteConfig.lastUpdated}
          </p>
        </div>
      </section>

    </div>
  );
} 