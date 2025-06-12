import { Metadata } from 'next';
import LongevityLifestyleClient from '@/components/LongevityLifestyleClient';

export const metadata: Metadata = {
  title: "Longevity Lifestyle: Practical Tips for a Longer, Healthier Life | Join Longevity",
  description: "Explore science-backed lifestyle tips for longevity. Learn about nutrition, myth-busting, and who to follow for trusted advice on extending your healthspan.",
  keywords: ["longevity lifestyle", "healthspan tips", "longevity diet", "science-backed health", "nutrition facts"],
  alternates: {
    canonical: "/longevity-lifestyle",
  },
  openGraph: {
    title: "The Longevity Lifestyle: A Practical Guide to a Longer, Healthier Life | Join Longevity",
    description: "Learn how to adopt a longevity lifestyle with practical tips on diet, exercise, and habits. Extend your healthspan with Join Longevity's expert advice.",
    url: "https://joinlongevity.org/longevity-lifestyle",
    siteName: "Join Longevity",
    images: [
      {
        url: "https://joinlongevity.org/image/longevity.webp", // Default social sharing image
        width: 1200,
        height: 630,
        alt: "A graphic illustrating key pillars of a longevity lifestyle, like diet and exercise.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Longevity Lifestyle: A Practical Guide to a Longer, Healthier Life | Join Longevity",
    description: "Learn how to adopt a longevity lifestyle with practical tips on diet, exercise, and habits. Extend your healthspan with Join Longevity's expert advice.",
    images: ["https://joinlongevity.org/image/longevity.webp"],
    creator: "@joinlongevity",
  },
};

export default function LongevityLifestylePage() {
  return <LongevityLifestyleClient />;
} 