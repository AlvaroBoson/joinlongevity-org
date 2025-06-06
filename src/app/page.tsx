import { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Join Longevity | Your Guide to the Longevity Ecosystem",
  description: "Longevity isn't just for billionaires. Join Longevity is your first step into the world of healthspan and lifespan extension, regardless of your background.",
};

export default function Home() {
  return <HomePageClient />;
}
