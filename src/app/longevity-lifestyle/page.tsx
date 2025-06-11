import { Metadata } from 'next';
import LongevityLifestyleClient from '@/components/LongevityLifestyleClient';

export const metadata: Metadata = {
  title: "Longevity Lifestyle: Practical Tips for a Longer, Healthier Life | Join Longevity",
  description: "Explore science-backed lifestyle tips for longevity. Learn about nutrition, myth-busting, and who to follow for trusted advice on extending your healthspan.",
  keywords: ["longevity lifestyle", "healthspan tips", "longevity diet", "science-backed health", "nutrition facts"],
  openGraph: {
    title: "Longevity Lifestyle: Practical Tips for a Longer, Healthier Life | Join Longevity",
    description: "Explore science-backed lifestyle tips for longevity. Learn about nutrition, myth-busting, and who to follow for trusted advice on extending your healthspan.",
    url: "https://joinlongevity.com/longevity-lifestyle",
    siteName: "Join Longevity",
    images: [
      {
        url: "https://joinlongevity.com/image/longevity-lifestyle-og.webp", // Assuming a relevant OG image
        width: 1200,
        height: 630,
        alt: "An image representing a healthy and active lifestyle for longevity.",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Longevity Lifestyle: Practical Tips for a Longer, Healthier Life | Join Longevity",
    description: "Explore science-backed lifestyle tips for longevity. Learn about nutrition, myth-busting, and who to follow for trusted advice on extending your healthspan.",
    images: ["https://joinlongevity.com/image/longevity-lifestyle-og.webp"],
  },
};

export default function LongevityLifestylePage() {
  return <LongevityLifestyleClient />;
} 