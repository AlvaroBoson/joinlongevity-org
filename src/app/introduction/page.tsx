import { Metadata } from 'next';
import IntroductionClient from '@/components/IntroductionClient';

export const metadata: Metadata = {
  title: "What is Longevity? An Introduction to Healthspan & the Future | Join Longevity",
  description: "Discover what longevity is and why it matters. Our introduction explains the mission to extend healthspan, the challenges we face, and how you can be a part of building a better future.",
  keywords: ["what is longevity", "introduction to longevity", "healthspan", "lifespan extension", "future of health", "aging research"],
  openGraph: {
    title: "What is Longevity? An Introduction to Healthspan & the Future | Join Longevity",
    description: "Discover what longevity is and why it matters. Our introduction explains the mission to extend healthspan, the challenges we face, and how you can be a part of building a better future.",
    url: "https://joinlongevity.com/introduction",
    siteName: "Join Longevity",
    images: [
      {
        url: "https://joinlongevity.com/image/introduction/introduction-og.webp", // Assuming you'll create a relevant OG image
        width: 1200,
        height: 630,
        alt: "An illustration showing the concept of extending healthspan.",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is Longevity? An Introduction to Healthspan & the Future | Join Longevity",
    description: "Discover what longevity is and why it matters. Our introduction explains the mission to extend healthspan, the challenges we face, and how you can be a part of building a better future.",
    images: ["https://joinlongevity.com/image/introduction/introduction-og.webp"],
  },
};

export default function IntroductionPage() {
  return <IntroductionClient />;
} 