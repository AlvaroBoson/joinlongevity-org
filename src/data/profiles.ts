import { Profile } from '@/types/profile';

export const profiles: Profile[] = [
  {
    id: "david-sinclair",
    name: "David Sinclair",
    description: "Professor of genetics at Harvard Medical School, focusing on understanding aging and reversing its effects.",
    imageUrl: "/image/profiles/david-sinclair.svg",
    tags: ["researchers", "healthspan", "supplements"],
    trustScore: 85,
    profileUrl: "/profiles/david-sinclair",
    categories: ["Researchers"],
    focusAreas: ["Life Extension", "Healthspan"],
    type: "Person",
    trustLevel: "High"
  },
  {
    id: "aubrey-de-grey",
    name: "Aubrey de Grey",
    description: "Biomedical gerontologist and chief science officer of SENS Research Foundation.",
    imageUrl: "/image/profiles/aubrey-de-grey.svg",
    tags: ["researchers", "immortality", "advocates"],
    trustScore: 75,
    profileUrl: "/profiles/aubrey-de-grey",
    categories: ["Researchers", "Advocates"],
    focusAreas: ["Immortality", "Life Extension"],
    type: "Person",
    trustLevel: "High"
  },
  {
    id: "peter-attia",
    name: "Peter Attia",
    description: "Longevity-focused physician and podcaster, specializing in the science of longevity and performance.",
    imageUrl: "/image/profiles/peter-attia.svg",
    tags: ["biohackers", "healthspan", "creators"],
    trustScore: 90,
    profileUrl: "/profiles/peter-attia",
    categories: ["Creators", "Biohackers"],
    focusAreas: ["Healthspan", "Performance"],
    type: "Person",
    trustLevel: "High"
  },
  {
    id: "ardd",
    name: "ARDD",
    description: "The 11th Aging Research and Drug Discovery Meeting is the world's largest conference on aging. Held in Copenhagen.",
    imageUrl: "/image/profiles/ardd.svg",
    profileUrl: "/conferences/ardd",
    categories: ["Conferences"],
    tags: ["conference", "aging research", "drug discovery", "networking"],
    focusAreas: ["Aging Research", "Pharmaceutical Development"],
    type: "Conference",
    trustScore: 70,
    trustLevel: "Medium"
  },
  {
    id: "longevity-summit-dublin",
    name: "Longevity Summit Dublin",
    description: "Bringing together the world's leading investors, entrepreneurs, and scientists to showcase the latest breakthroughs.",
    imageUrl: "/image/profiles/longevity-summit-dublin.svg",
    profileUrl: "/conferences/longevity-summit-dublin",
    categories: ["Conferences"],
    tags: ["conference", "longevity", "investment", "biotech", "europe"],
    focusAreas: ["Investment in Longevity", "Biotechnology", "Scientific Innovation"],
    type: "Conference",
    trustScore: 70,
    trustLevel: "Medium"
  },
  {
    id: "transvision",
    name: "TransVision",
    description: "One of the longest-running conferences on transhumanism and futurist thinking, exploring the future of humanity.",
    imageUrl: "/image/profiles/transvision.svg",
    profileUrl: "/conferences/transvision",
    categories: ["Conferences"],
    tags: ["conference", "transhumanism", "futurism", "life extension", "ethics"],
    focusAreas: ["Transhumanist Thought", "Radical Life Extension", "Future Technologies"],
    type: "Conference",
    trustScore: 70,
    trustLevel: "Medium"
  },
  {
    id: "longevity-biotech-fellowship",
    name: "Longevity Biotech Fellowship",
    description: "An elite community for builders and investors in longevity biotech. Highly selective, focused on high-impact ventures.",
    imageUrl: "/image/profiles/longevity-biotech-fellowship.svg",
    profileUrl: "/conferences/longevity-biotech-fellowship",
    categories: ["Conferences", "Communities", "Fellowships"],
    tags: ["fellowship", "biotech", "startups", "community", "career development"],
    focusAreas: ["Biotech Entrepreneurship", "Longevity Startups", "Community Building"],
    type: "Conference",
    trustScore: 70,
    trustLevel: "Medium"
  },
  {
    id: "vitalism",
    name: "Vitalism",
    description: "A community for bio-optimization and healthspan improvement, with a focus on practical, science-backed protocols.",
    imageUrl: "/image/profiles/vitalism.svg",
    profileUrl: "/conferences/vitalism",
    categories: ["Conferences", "Biohacking"],
    tags: ["conference", "biohacking", "health optimization", "community", "wellness"],
    focusAreas: ["Biohacking Techniques", "Health & Wellness", "Preventive Medicine"],
    type: "Conference",
    trustScore: 70,
    trustLevel: "Medium"
  }
]; 