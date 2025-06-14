import { Metadata } from "next";
import AboutPageClient from "@/components/AboutPageClient";

export const metadata: Metadata = {
  title: "Our Mission & People | Join Longevity",
  description: "Meet the people and mission behind Join Longevity. Learn about our secretariat, scientific advisors, strategic advisors, and contributors working to make longevity accessible for all.",
};

export default function AboutPage() {
  return <AboutPageClient />;
} 