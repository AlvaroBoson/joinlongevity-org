"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import FadeInUp from "@/components/FadeInUp";
import StaggerChildren from "@/components/StaggerChildren";
import { siteConfig } from "@/config/site";
import FeatureCard from "@/components/FeatureCard";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function LongevityMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    // Create particles
    const particles: Particle[] = [];
    const particleCount = 100;
    const particleColor = "#64BC6E";
    const backgroundColor = "#1E2A38";
    const maxConnectionDistance = 200;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    // Animation loop
    let animationFrame: number;
    const animate = () => {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      ctx.lineWidth = 1;
      ctx.beginPath();

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw connections
        particles.forEach((otherParticle, j) => {
          if (i === j) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxConnectionDistance) {
            // Calculate opacity based on distance
            const opacity = 0.2 * (1 - distance / maxConnectionDistance);
            ctx.strokeStyle = `rgba(100, 188, 110, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      // Draw particles
      ctx.fillStyle = particleColor;
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#1E2A38]">
      {/* Hero Section */}
      <section className="relative w-full pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-28 flex flex-col items-center justify-center overflow-hidden">
        {/* Canvas Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          style={{ opacity: 0.3 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center mb-16 text-white">
            The Longevity Map
          </h1>
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 mb-16">
            <Image 
              src="/image/longevitymap/healthspan-life-extension-immortality.webp"
              alt="Longevity Map Diagram"
              width={1200}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 text-lg relative z-10 px-6 sm:px-8 lg:px-0 text-center"
        >
          If you&apos;d like a recap let us properly{" "}
          <Link href="/introduction" className="text-[#64BC6E] hover:text-[#4fa65b] underline decoration-[#64BC6E] transition-colors">
            introduce you to longevity
          </Link>
        </motion.p>
      </section>

      {/* Cards Section */}
      <FadeInUp as="section" className="w-full py-28 bg-[#1a1f2e]">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">
          What is the longevity map made of
        </h2>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="flex flex-col items-center gap-8 max-w-6xl mx-auto">
            {/* Top Row - Two Cards */}
            <motion.div variants={fadeInUp} className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* The Players Card */}
              <motion.div 
                variants={fadeInUp}
                className="flex items-start p-8 rounded-xl bg-[#1E2A38] border-2 border-[#64BC6E]/10 hover:bg-[#64BC6E]/10 hover:border-[#64BC6E]/30 transition-all duration-200 text-white"
              >
                <div className="flex-shrink-0 mr-6">
                  <Image src="/image/homepage/compass.svg" alt="The Players in Longevity" width={48} height={48} className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">The players</h3>
                  <ul className="text-gray-300 space-y-1 list-none">
                    <li>• Researchers</li>
                    <li>• Entrepreneurs</li>
                    <li>• Investors</li>
                    <li>• Everyone else</li>
                  </ul>
                </div>
              </motion.div>

              {/* Objectives Card */}
              <motion.div 
                variants={fadeInUp}
                className="flex items-start p-8 rounded-xl bg-[#1E2A38] border-2 border-[#64BC6E]/10 hover:bg-[#64BC6E]/10 hover:border-[#64BC6E]/30 transition-all duration-200 text-white"
              >
                <div className="flex-shrink-0 mr-6">
                  <Image src="/image/homepage/compass.svg" alt="Objectives in Longevity" width={48} height={48} className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Objectives</h3>
                  <ul className="text-gray-300 space-y-1 list-none">
                    <li>• Curiosity</li>
                    <li>• Impact</li>
                    <li>• Money</li>
                    <li>• Power/Control</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom Row - Single Card */}
            <motion.div variants={fadeInUp} className="w-full md:w-2/3 lg:w-1/2">
              {/* The Fields Card */}
              <motion.div 
                variants={fadeInUp}
                className="flex items-start p-8 rounded-xl bg-[#1E2A38] border-2 border-[#64BC6E]/10 hover:bg-[#64BC6E]/10 hover:border-[#64BC6E]/30 transition-all duration-200 text-white"
              >
                <div className="flex-shrink-0 mr-6">
                  <Image src="/image/homepage/compass.svg" alt="Fields of Operation in Longevity" width={48} height={48} className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">The Fields They Operate In</h3>
                  <ul className="text-gray-300 space-y-1 list-none">
                    <li>• Healthspan vs Lifespan</li>
                    <li>• Biotech</li>
                    <li>• Lifestyle</li>
                    <li>• Diagnostics</li>
                    <li>• Advocacy & Policy</li>
                    <li>• Philosophy & Vision</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </StaggerChildren>
        </div>
      </FadeInUp>

      {/* What you'd expect section */}
      <FadeInUp as="section" className="w-full py-28 bg-[#1E2A38]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">
            You&apos;d expect the longevity field to be...
          </h2>
          
          {/* Diagram Image */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto mb-16">
            <Image 
              src="/image/longevitymap/idealmap.webp" 
              alt="Longevity Field Structure Diagram"
              width={1400}
              height={1000}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Expectations List */}
          <StaggerChildren className="max-w-2xl mx-auto">
            <ul className="text-white text-lg space-y-2">
              <motion.li variants={fadeInUp} className="flex items-center">
                <span className="text-[#64BC6E] mr-2">•</span>
                Centralized
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-center">
                <span className="text-[#64BC6E] mr-2">•</span>
                Coordinated
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-center">
                <span className="text-[#64BC6E] mr-2">•</span>
                Mission-aligned
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-center">
                <span className="text-[#64BC6E] mr-2">•</span>
                With one HQ or authority everyone looks to
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-center">
                <span className="text-[#64BC6E] mr-2">•</span>
                A shared goal, shared timeline, shared path
              </motion.li>
            </ul>
          </StaggerChildren>
        </div>
      </FadeInUp>

      {/* Reality Section */}
      <FadeInUp as="section" className="w-full py-28 bg-[#1a1f2e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">
            But the Reality is worse
          </h2>
          
          {/* Diagram Image */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto mb-8">
            <Image 
              src="/image/longevitymap/realmap.webp" 
              alt="Reality Diagram"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Who's Who Link */}
          <motion.div variants={fadeInUp} className="text-center">
            <p className="text-gray-300 text-lg mb-4">
              Want to know more about <Link href="/whos-who" className="text-[#64BC6E] underline cursor-pointer hover:text-[#4fa65b] transition-colors">who&apos;s who</Link>?
            </p>
            <p className="text-sm text-gray-400">
              Updated map is coming soon. Last updated: {siteConfig.lastUpdated}
            </p>
          </motion.div>
        </div>
      </FadeInUp>

      {/* Marketing Section */}
      <FadeInUp as="section" className="w-full py-28 bg-[#1E2A38]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
            Marketing makes it even worse
          </h2>
          <p className="text-xl text-center text-gray-300 mb-16">
            Longevity labels sell much more than normal products
          </p>

          {/* Product Comparison */}
          <StaggerChildren className="flex flex-col items-center justify-center max-w-2xl mx-auto">
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-8 mb-8">
              {/* First Product */}
              <motion.div variants={fadeInUp} className="text-center">
                <Image
                  src="/image/longevitymap/cream.webp"
                  alt="Regular skin cream"
                  width={250}
                  height={250}
                  className="mb-4"
                />
                <p className="text-white text-lg">Softens skin</p>
              </motion.div>

              {/* VS Text */}
              <motion.div variants={fadeInUp} className="text-white text-2xl font-bold">
                VS
              </motion.div>

              {/* Second Product */}
              <motion.div variants={fadeInUp} className="text-center">
                <Image
                  src="/image/longevitymap/cream.webp"
                  alt="Longevity skin cream"
                  width={250}
                  height={250}
                  className="mb-4"
                />
                <p className="text-white text-lg">
                  For Skin <span className="text-[#64BC6E]">Longevity</span>
                </p>
              </motion.div>
            </motion.div>
            <p className="text-sm text-gray-400 mt-8 text-center">
              Updated map is coming soon. Last updated: {siteConfig.lastUpdated}
            </p>
          </StaggerChildren>
        </div>
      </FadeInUp>

      {/* Final CTA Section */}
      <FadeInUp as="section" className="w-full py-28 bg-[#1a1f2e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Join Longevity exists to cut through the noise.
            </h2>
            <p className="text-lg text-gray-300">
              We help people understand the field and find where they fit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FeatureCard
              title="Get Involved"
              description="Longevity needs more than scientists. Find projects, events, and opportunities to contribute."
              icon="/image/homepage/group.svg"
              href="/get-involved"
            />
            <FeatureCard
              title="Who's Who in Longevity"
              description="Find trusted researchers, advocates, and communities to follow in the longevity space."
              icon="/image/homepage/compass.svg"
              href="/whos-who"
            />
          </div>
        </div>
      </FadeInUp>
    </div>
  );
} 