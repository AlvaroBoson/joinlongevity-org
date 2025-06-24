import { Metadata } from 'next';
import LongevityExplorerClient from '@/components/LongevityExplorerClient';

export const metadata: Metadata = {
  title: "Longevity Explorer: A Curated Directory | Join Longevity",
  description: "Navigate the longevity space with confidence. Explore our curated directory of the most influential people, companies, and projects, complete with evidence levels to help you find who to follow.",
  keywords: ["longevity explorer", "longevity leaders", "longevity companies", "longevity investors", "healthspan experts", "trustworthy longevity sources"],
  openGraph: {
    title: "Longevity Explorer: Experts, Researchers & Projects | Join Longevity",
    description: "Navigate the longevity space with our curated guide to the key people, projects, and communities. Find trustworthy sources with Join Longevity.",
    url: "https://joinlongevity.org/longevity-explorer",
    siteName: "Join Longevity",
    images: [
      {
        url: "https://joinlongevity.org/image/longevity.webp", // Default social sharing image
        width: 1200,
        height: 630,
        alt: "A curated list of influential figures in the longevity space.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Longevity Explorer: Experts, Researchers & Projects | Join Longevity",
    description: "Navigate the longevity space with our curated guide to the key people, projects, and communities. Find trustworthy sources with Join Longevity.",
    images: ["https://joinlongevity.org/image/longevity.webp"],
    creator: "@joinlongevity",
  },
};

export default function LongevityExplorerPage() {
  return <LongevityExplorerClient />;
} 