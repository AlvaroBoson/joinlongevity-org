"use client";

import React from "react";
import Image from 'next/image';

const people = {
  secretariat: [
    { name: "Alvaro", role: "Project Steward & Editor-in-Chief", description: "Bridging gaps in the longevity space by connecting people, building awareness, and making it easier for newcomers to find their place.", image: "/image/about/alvaro.webp" },
    { name: "Peter", role: "Strategic Advisor & Industry Analyst", description: "Building a longevity-focused investment fund while staying at the forefront of biotech news, trends, and breakthroughs.", image: "/image/about/peter.webp" },
  ],
  advisory: [
    { name: "Name", role: "", description: "" },
    { name: "Name", role: "", description: "" },
    { name: "Name", role: "", description: "" },
  ],
  strategic: [
    { name: "Name", role: "", description: "" },
    { name: "Name", role: "", description: "" },
    { name: "Name", role: "", description: "" },
  ],
  contributors: [
    { name: "Mirza", role: "Scientific Writer", description: "With a background in pharmacology, Mirza contributes articles to our blog, helping to make complex longevity topics accessible to a wider audience.", image: "/image/about/mirza.webp" },
    { name: "Name", role: "", description: "" },
    { name: "Name", role: "", description: "" },
  ],
};

function TeamSection({ title, description, people, bg = 'dark' }: { title: string; description: string; people: { name?: string; role?: string; description?: string; image?: string }[], bg?: 'dark' | 'light' }) {
  const sectionBg = bg === 'dark' ? 'bg-[#1E2A38] text-white' : 'bg-white text-[#1E2A38]';
  return (
    <section className={`${sectionBg} py-20 px-4`}>
      <div className="max-w-6xl mx-auto pl-4 sm:pl-8 md:pl-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-left">{title}</h2>
        {description && <p className={`mb-12 max-w-3xl text-lg ${bg === 'dark' ? 'text-gray-200' : 'text-[#1E2A38]'} text-left`}>{description}</p>}
        <div className="flex flex-wrap gap-x-16 gap-y-14">
          {people.map((person, i) => {
            const isPlaceholder = !person.image && (!person.name || person.name === 'Name');
            return (
              <div key={i} className="flex flex-col items-start w-48">
                {person.image ? (
                  <Image src={person.image} alt={person.name || 'Team member'} width={160} height={160} className="w-40 h-40 object-cover rounded-xl mb-6" />
                ) : (
                  <div className={`w-40 h-40 rounded-xl mb-6 flex items-center justify-center ${isPlaceholder ? 'bg-gray-300' : 'bg-teal-800'}`}>
                    {isPlaceholder && (
                      <span className="text-gray-700 font-semibold text-lg">Coming Soon</span>
                    )}
                  </div>
                )}
                {!isPlaceholder && (
                  <>
                    <div className={`font-semibold text-lg leading-tight mb-1 ${bg === 'dark' ? 'text-white' : 'text-[#1E2A38]'}`}>{person.name}</div>
                    {person.role && <div className={`text-sm font-bold mb-2 ${bg === 'dark' ? 'text-white' : 'text-[#1E2A38]'}`}>{person.role}</div>}
                    {person.description && <div className={`text-xs ${bg === 'dark' ? 'text-gray-300' : 'text-[#4B5563]'}`}>{person.description}</div>}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function AboutPageClient() {
  return (
    <div className="min-h-screen w-full bg-[#f7fafc]">
      {/* Mission Section */}
      <section className="w-full py-24 bg-[#1E2A38] text-white text-center flex flex-col items-center justify-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-10">Our Mission & People</h1>
        <p className="text-xl sm:text-2xl max-w-3xl mx-auto font-semibold mb-6">
          The longevity field is full of potential but it&apos;s fragmented, confusing, and too often seen as something just for scientists or billionaires. A gap persists between academic research and public understanding, creating confusion and inequality.
        </p>
      </section>
      {/* White Section with Green, more spacious */}
      <section className="w-full py-24 bg-white/80 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="mb-10 text-2xl text-gray-900">
            We believe the pursuit of a longer, healthier life is a <span className="font-semibold" style={{ color: '#3d9f41' }}>fundamental right</span>
          </p>
          <p className="text-2xl text-gray-900">
            Our mission is to <span className="font-bold" style={{ color: '#3d9f41' }}>democratize longevity</span> by building the world&apos;s most <span className="font-bold">trusted, accessible</span>, and <span className="font-bold">comprehensive</span> resource, bridging the gap between scientific discovery and daily life
          </p>
        </div>
      </section>
      {/* Secretariat (dark) */}
      <TeamSection
        title="The Secretariat"
        description="The Secretariat is the operational body entrusted with carrying out our charter. This team is responsible for the project&apos;s strategic direction, content curation, and community engagement."
        people={people.secretariat}
        bg="dark"
      />
      {/* Scientific Advisory Board (light) */}
      <TeamSection
        title="The Scientific Advisory Board"
        description="Our Scientific Advisory Board is composed of world-leading researchers, clinicians, and experts in the field of longevity. They provide independent expert guidance and rigorously review our content to ensure it meets the highest standards of scientific accuracy and integrity. Their oversight is crucial to our commitment to providing trusted information."
        people={people.advisory}
        bg="light"
      />
      {/* Strategic Advisors (dark) */}
      <TeamSection
        title="Strategic Advisors"
        description="This group is composed of leaders from the worlds of investment, technology, and public advocacy. They provide critical insight and high-level guidance to help us grow our impact, navigate the evolving landscape of the longevity industry, and achieve our long-term mission."
        people={people.strategic}
        bg="dark"
      />
      {/* Contributors (light) */}
      <TeamSection
        title="Contributors"
        description="Our work is brought to life by a dedicated and growing team of science writers, researchers, and content creators. They are instrumental in translating complex topics into clear, engaging, and accessible articles for our community. We are grateful for their diverse voices and perspectives."
        people={people.contributors}
        bg="light"
      />
    </div>
  );
} 