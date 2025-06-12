import { Metadata } from 'next';
import IntroductionClient from '@/components/IntroductionClient';

export const metadata: Metadata = {
  title: "Introduction to Longevity: Start Your Journey Here | Join Longevity",
  description: "What is longevity and why does it matter? Our guide explains the mission to extend healthspan over lifespan, demystifies the science, and shows how you can join the movement towards a healthier future.",
  keywords: ["introduction to longevity", "what is longevity", "healthspan vs lifespan", "longevity basics", "longevity science for beginners"],
  alternates: {
    canonical: "/introduction",
  },
  openGraph: {
    title: "Introduction to Longevity: Start Your Journey Here | Join Longevity",
    description: "What is longevity and why does it matter? Our guide explains the mission to extend healthspan over lifespan, demystifies the science, and shows how you can join the movement towards a healthier future.",
    url: "https://joinlongevity.org/introduction",
    siteName: "Join Longevity",
    images: [
      {
        url: "https://joinlongevity.org/image/longevity.webp",
        width: 1200,
        height: 630,
        alt: "A visual timeline or infographic explaining the basic concepts of longevity.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Introduction to Longevity: Start Your Journey Here | Join Longevity",
    description: "What is longevity and why does it matter? Our guide explains the mission to extend healthspan over lifespan, demystifies the science, and shows how you can join the movement towards a healthier future.",
    images: ["https://joinlongevity.org/image/longevity.webp"],
    creator: "@joinlongevity",
  },
};

export default function IntroductionPage() {
  return <IntroductionClient />;
} 