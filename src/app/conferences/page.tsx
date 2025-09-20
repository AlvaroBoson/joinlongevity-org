import { Metadata } from 'next';
import ConferencesClient from '@/components/ConferencesClient';

export const metadata: Metadata = {
  title: "Longevity Conferences & Events | Join Longevity",
  description: "Discover the best longevity conferences and events. Connect with researchers, entrepreneurs, and advocates in the aging and longevity field.",
  keywords: ["longevity conferences", "aging research events", "longevity summit", "biotech conferences", "longevity networking", "aging research meetings"],
  openGraph: {
    title: "Longevity Conferences & Events | Join Longevity",
    description: "Discover the best longevity conferences and events. Connect with researchers, entrepreneurs, and advocates in the aging and longevity field.",
    url: "https://joinlongevity.org/conferences",
    siteName: "Join Longevity",
    images: [
      {
        url: "https://joinlongevity.org/image/longevity.webp",
        width: 1200,
        height: 630,
        alt: "Longevity conferences and events for networking and learning in the aging research field.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Longevity Conferences & Events | Join Longevity",
    description: "Discover the best longevity conferences and events. Connect with researchers, entrepreneurs, and advocates in the aging and longevity field.",
    images: ["https://joinlongevity.org/image/longevity.webp"],
    creator: "@joinlongevity",
  },
};

export default function ConferencesPage() {
  return <ConferencesClient />;
}
