export interface Conference {
  id: string;
  name: string;
  description: string;
  location: string;
  date: string;
  endDate?: string;
  website: string;
  type: 'Research' | 'Industry' | 'Community' | 'Investment' | 'Mixed';
  focus: 'Scientific' | 'Business & Investment' | 'Community & Advocacy' | 'Clinical & Medical' | 'Technology & Innovation';
  ticketPrice?: string;
  virtual: boolean;
  hybrid?: boolean;
  imageUrl?: string;
  organizer: string;
  targetAudience: string[];
  keyTopics: string[];
  notableFeatures: string[];
}

export const conferences: Conference[] = [
  {
    id: "longevity-investors-conference-2025",
    name: "Longevity Investors Conference",
    description: "The world's most private investor conference in the longevity space. Bringing together top longevity key opinion leaders, institutional and private investors, wealthy private investors, family offices and funds in an exclusive 5* luxury hotel setting.",
    location: "Gstaad, Switzerland",
    date: "2025-09-22",
    endDate: "2025-09-25",
    website: "https://www.longevityinvestors.ch/longevity-investors-conference-2025",
    type: "Investment",
    focus: "Business & Investment",
    ticketPrice: "6,500 - 8,600 CHF",
    virtual: false,
    organizer: "Longevity Investors",
    targetAudience: ["Institutional Investors", "Private Investors", "Family Offices", "Fund Managers", "Industry Leaders"],
    keyTopics: ["Investment Opportunities", "Longevity Trends", "Rejuvenation Technologies", "Market Analysis", "Portfolio Strategies"],
    notableFeatures: ["Exclusive Setting", "20% Acceptance Rate", "Networking App", "Startup Showcase", "Swiss Alps Location"]
  },
  {
    id: "transvision-madrid-2025",
    name: "TransVision Madrid: International Longevity Summit",
    description: "Madrid becomes the meeting point for this futuristic celebration, where world-renowned experts present their ideas and research on the science of Longevity. Combining international meetings with local audiences to promote longevity research and development.",
    location: "El Ilustre Colegio de Medicos, Madrid, Spain",
    date: "2025-10-01",
    endDate: "2025-10-02",
    website: "https://transvisionmadrid.com/es/index.html",
    type: "Community",
    focus: "Community & Advocacy",
    virtual: false,
    hybrid: true,
    organizer: "TransVision Madrid",
    targetAudience: ["Researchers", "Futurists", "Technology Enthusiasts", "Longevity Advocates", "General Public"],
    keyTopics: ["Longevity Science", "Transhumanism", "Future Technologies", "Life Extension", "Scientific Outreach"],
    notableFeatures: ["International Longevity Day", "Scientific Outreach", "Local & International Speakers", "Research Promotion"]
  },
  {
    id: "biomarkers-aging-conference-2025",
    name: "Biomarkers of Aging Conference",
    description: "A specialized conference focusing on the latest developments in aging biomarkers research, bringing together scientists and researchers working on measuring and understanding the aging process.",
    location: "Boston, MA",
    date: "2025-10-20",
    endDate: "2025-10-21",
    website: "https://www.agingconsortium.org/conference-2025",
    type: "Research",
    focus: "Scientific",
    virtual: false,
    organizer: "Aging Consortium",
    targetAudience: ["Researchers", "Scientists", "Biotech Professionals", "Graduate Students", "Industry Scientists"],
    keyTopics: ["Aging Biomarkers", "Measurement Technologies", "Clinical Applications", "Research Methods", "Diagnostic Tools"],
    notableFeatures: ["Specialized Focus", "Research Presentations", "Industry Partnerships", "Scientific Networking"]
  },
  {
    id: "longevity-global-summit-2025",
    name: "Longevity Global: The Longevity Summit 2025",
    description: "A premier global summit bringing together leaders in longevity research, technology, and business to discuss the future of human healthspan and lifespan extension.",
    location: "Novato, CA (@Buck Institute)",
    date: "2025-12-09",
    endDate: "2025-12-10",
    website: "https://longevitygl.org/longevity-summit/",
    type: "Mixed",
    focus: "Technology & Innovation",
    virtual: false,
    organizer: "Longevity Global",
    targetAudience: ["Researchers", "Entrepreneurs", "Investors", "Technology Leaders", "Healthcare Professionals"],
    keyTopics: ["Longevity Technologies", "Healthspan Extension", "Innovation", "Research Breakthroughs", "Industry Trends"],
    notableFeatures: ["Global Reach", "Buck Institute Location", "Technology Focus", "Industry Leaders"]
  },
  {
    id: "roundtable-longevity-clinics-2025",
    name: "Roundtable of Longevity Clinics",
    description: "An exclusive gathering of longevity clinic operators, practitioners, and industry professionals focused on clinical applications of longevity medicine and best practices in patient care.",
    location: "Buck, Novato, CA",
    date: "2025-12-06",
    endDate: "2025-12-08",
    website: "https://longevity-roundtable.com",
    type: "Industry",
    focus: "Clinical & Medical",
    virtual: false,
    organizer: "Longevity Roundtable",
    targetAudience: ["Clinic Operators", "Medical Practitioners", "Healthcare Professionals", "Industry Experts"],
    keyTopics: ["Clinical Practice", "Patient Care", "Treatment Protocols", "Industry Standards", "Medical Innovation"],
    notableFeatures: ["Exclusive Roundtable Format", "Clinical Focus", "Practitioner Networking", "Best Practices Sharing"]
  },
  {
    id: "longevity-biotech-fellowship-2025",
    name: "Longevity Biotech Fellowship",
    description: "An elite community gathering for builders and investors in longevity biotech. Highly selective program focused on high-impact ventures and fostering collaboration in the longevity ecosystem.",
    location: "Valencia, Spain",
    date: "2025-09-22",
    endDate: "2025-09-29",
    website: "https://www.longbiofellowship.org",
    type: "Community",
    focus: "Business & Investment",
    virtual: false,
    organizer: "Longevity Biotech Fellowship",
    targetAudience: ["Entrepreneurs", "Investors", "Biotech Builders", "Industry Leaders", "Researchers"],
    keyTopics: ["Biotech Ventures", "Investment Strategies", "Entrepreneurship", "Innovation", "Collaboration"],
    notableFeatures: ["Elite Community", "Highly Selective", "Fellowship Program", "Builder Focus", "Valencia Location"]
  },
  {
    id: "semal-2025",
    name: "SEMAL",
    description: "Spanish conference focused on longevity medicine and anti-aging research, bringing together medical professionals and researchers in the Spanish-speaking longevity community.",
    location: "Madrid, Spain",
    date: "2025-10-03",
    endDate: "2025-10-04",
    website: "https://semal.org",
    type: "Research",
    focus: "Clinical & Medical",
    virtual: false,
    organizer: "SEMAL",
    targetAudience: ["Medical Professionals", "Researchers", "Healthcare Practitioners", "Students"],
    keyTopics: ["Longevity Medicine", "Anti-Aging Research", "Clinical Applications", "Medical Protocols", "Spanish Research"],
    notableFeatures: ["Spanish Focus", "Medical Community", "Clinical Research", "Local Expertise"]
  },
  {
    id: "nexii-longevity-2025",
    name: "NEXii Longevity 2025",
    description: "An innovative longevity conference bringing together international experts and researchers to explore the next generation of longevity technologies and interventions.",
    location: "Porto, Portugal",
    date: "2025-10-08",
    endDate: "2025-10-09",
    website: "https://nexiilongevity.com",
    type: "Mixed",
    focus: "Technology & Innovation",
    virtual: false,
    organizer: "NEXii",
    targetAudience: ["Researchers", "Technology Innovators", "Healthcare Professionals", "Entrepreneurs"],
    keyTopics: ["Next-Gen Technologies", "Innovation", "Research Advances", "Technology Applications", "Future Interventions"],
    notableFeatures: ["Innovation Focus", "International Experts", "Portugal Location", "Technology Emphasis"]
  }
];
