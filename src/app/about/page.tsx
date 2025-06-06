import { Metadata } from "next";
import AboutPageClient from "@/components/AboutPageClient";

export const metadata: Metadata = {
  title: "About Join Longevity",
  description: "Learn about the mission of Join Longevity: to make the longevity field accessible to everyone, helping people navigate, apply, and support the science of a longer healthspan.",
};

export default function AboutPage() {
  return <AboutPageClient />;
} 