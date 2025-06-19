import ApplyLongevityClient from '@/components/ApplyLongevityClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Apply Longevity To Yourself | Join Longevity",
  description: "Discover how to apply longevity principles to your life. Learn about lifestyle choices, diet, and therapies that can help extend your healthspan.",
  keywords: ["longevity lifestyle", "longevity diet", "longevity therapies", "life extension", "healthspan", "stem cells", "reprogramming"],
  alternates: {
    canonical: "/apply-longevity",
  },
  openGraph: {
    title: "Apply Longevity To Yourself | Join Longevity",
    description: "Explore the biggest impact choices in longevity - from lifestyle and diet to cutting-edge therapies. Learn how to apply proven longevity principles to your life.",
    url: "https://joinlongevity.org/apply-longevity",
    siteName: "Join Longevity",
    images: [
      {
        url: "https://joinlongevity.org/image/longevity.webp",
        width: 1200,
        height: 630,
        alt: "Apply Longevity To Yourself - Lifestyle, Diet, and Therapies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply Longevity To Yourself | Join Longevity",
    description: "Explore the biggest impact choices in longevity - from lifestyle and diet to cutting-edge therapies. Learn how to apply proven longevity principles to your life.",
    images: ["https://joinlongevity.org/image/longevity.webp"],
    creator: "@joinlongevity",
  },
};

export default function LongevityLifestylePage() {
  return <ApplyLongevityClient />;
} 