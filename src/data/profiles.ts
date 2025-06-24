import { Profile } from '@/types/profile';

export const profiles: Profile[] = [
  {
    id: "david-sinclair",
    name: "David Sinclair",
    description: "Professor of genetics at Harvard Medical School, focusing on understanding aging and reversing its effects.",
    imageUrl: "/image/profiles/david-sinclair.svg",
    profileUrl: "https://sinclair.hms.harvard.edu/people/david-sinclair",
    category: ["Researcher"],
    approach: ["Cellular Reprogramming", "Metabolic Health"],
    evidenceLevel: "Published Research"
  },
  {
    id: "aubrey-de-grey",
    name: "Aubrey de Grey",
    description: "Biomedical gerontologist and chief science officer of SENS Research Foundation.",
    imageUrl: "/image/profiles/aubrey-de-grey.svg",
    profileUrl: "https://www.levf.org/team",
    category: ["Researcher", "Influencer / Creator"],
    approach: ["Damage Repair (SENS)"],
    evidenceLevel: "Published Research"
  },
  {
    id: "peter-attia",
    name: "Peter Attia",
    description: "Longevity-focused physician and podcaster, specializing in the science of longevity and performance.",
    imageUrl: "/image/profiles/peter-attia.svg",
    profileUrl: "https://peterattiamd.com/about/?_gl=1*10lr2hn*_up*MQ..*_ga*ODU3NTU1MzU1LjE3NDk3MTk2MzQ.*_ga_1CG74LFGNE*czE3NDk3MTk2MzMkbzEkZzAkdDE3NDk3MTk2MzMkajYwJGwwJGgw",
    category: ["Clinician (MD)", "Influencer / Creator"],
    approach: ["Metabolic Health", "Diagnostics & Biomarkers"],
    evidenceLevel: "Published Research"
  },
  {
    id: "ardd",
    name: "ARDD",
    description: "The 11th Aging Research and Drug Discovery Meeting is the world's largest conference on aging. Held in Copenhagen.",
    imageUrl: "/image/profiles/ardd.svg",
    profileUrl: "https://agingpharma.org",
    category: ["Conference"],
    approach: ["Damage Repair (SENS)", "Gene Therapies", "Senolytics", "Cellular Reprogramming"],
    evidenceLevel: "Published Research"
  },
  {
    id: "longevity-summit-dublin",
    name: "Longevity Summit Dublin",
    description: "Bringing together the world's leading investors, entrepreneurs, and scientists to showcase the latest breakthroughs.",
    imageUrl: "/image/profiles/longevity-summit-dublin.svg",
    profileUrl: "https://longevitysummitdublin.com",
    category: ["Conference"],
    approach: ["Diagnostics & Biomarkers", "Gene Therapies", "Senolytics", "Cellular Reprogramming"],
    evidenceLevel: "Published Research"
  },
  {
    id: "transvision",
    name: "TransVision",
    description: "One of the longest-running conferences on transhumanism and futurist thinking, exploring the future of humanity.",
    imageUrl: "/image/profiles/transvision.svg",
    profileUrl: "https://www.transvisionmadrid.com",
    category: ["Conference"],
    approach: [],
    evidenceLevel: "Early Stage / Theoretical"
  },
  {
    id: "longevity-biotech-fellowship",
    name: "Longevity Biotech Fellowship",
    description: "An elite community for builders and investors in longevity biotech. Highly selective, focused on high-impact ventures.",
    imageUrl: "/image/profiles/longevity-biotech-fellowship.svg",
    profileUrl: "https://www.longbiofellowship.org",
    category: ["Community / Platform", "Investor / VC"],
    approach: ["Diagnostics & Biomarkers", "Gene Therapies", "Senolytics", "Cellular Reprogramming"],
    evidenceLevel: "Community"
  },
  {
    id: "vitalism",
    name: "Vitalism",
    description: "A community for bio-optimization and healthspan improvement, with a focus on practical, science-backed protocols.",
    imageUrl: "/image/profiles/vitalism.svg",
    profileUrl: "https://www.vitalism.io",
    category: ["Community / Platform"],
    approach: ["Metabolic Health"],
    evidenceLevel: "Community"
  }
]; 