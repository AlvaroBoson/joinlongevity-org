import { Metadata } from 'next';
import JobsClient from '@/components/JobsClient';

export const metadata: Metadata = {
  title: "Longevity Jobs & Career Opportunities | Join Longevity",
  description: "Discover career opportunities in the longevity field. Find jobs in research, engineering, marketing, and more. Join the movement to extend healthy human lifespan.",
  keywords: ["longevity jobs", "longevity careers", "biotech jobs", "aging research jobs", "longevity biotech", "healthspan careers"],
  openGraph: {
    title: "Longevity Jobs & Career Opportunities | Join Longevity",
    description: "Discover career opportunities in the longevity field. Find jobs in research, engineering, marketing, and more. Join the movement to extend healthy human lifespan.",
    url: "https://joinlongevity.org/jobs",
    siteName: "Join Longevity",
    images: [
      {
        url: "https://joinlongevity.org/image/longevity.webp",
        width: 1200,
        height: 630,
        alt: "Longevity jobs and career opportunities in biotech and aging research.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Longevity Jobs & Career Opportunities | Join Longevity",
    description: "Discover career opportunities in the longevity field. Find jobs in research, engineering, marketing, and more. Join the movement to extend healthy human lifespan.",
    images: ["https://joinlongevity.org/image/longevity.webp"],
    creator: "@joinlongevity",
  },
};

export default function JobsPage() {
  return <JobsClient />;
}
